import React, { useEffect, useState } from "react";
import Card from "../../components/adminComponents/Card";
import Typography from "../../components/adminComponents/Typography";
import CardHeader from "../../components/adminComponents/CardHeader";
import CardBody from "../../components/adminComponents/CardBody";
import Menu from "../../components/adminComponents/Menu";
import MenuItem from "../../components/adminComponents/MenuItem";
import ProgressBar from "../../components/adminComponents/ProgressBar";
import Badge from "../../components/adminComponents/Badge";
import Empty from "../../components/adminComponents/Empty";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// import Button from "../../components/adminComponents/Button";
import { useNavigate } from "react-router-dom";
import { UserUrls } from "../../utils/apis";
import { useDataFetch } from "../../hooks/DataHook";
import { baseUrl } from "../../utils/BaseUrl";
import swal from "sweetalert";


const renderDateTime = (dateString) => {
  const dateTime = new Date(dateString);
  return dateTime.toLocaleDateString();
};


const UserContacts = () => {
  const navigate = useNavigate();
  const [applications, setapplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const fetcher = useDataFetch();
  const itemsPerPage = 10

  const totalPages = Math.ceil(applications.length / itemsPerPage);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.userContact });
    console.log(response);
    if (response) {
      setapplications(response);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handle_delete =async (id) => {
    swal({  
      title: "",  
    text: "Are you sure you want to delete this message!",  
    icon: "warning",  
    buttons: ["no!", "yes!"],    
      showCancelButton: true,  
      confirmButtonClass: "danger",  
      confirmButtonText: " Confirm, remove it!",  
      closeOnConfirm: false  
    }
    ).then( async (willdelete) => {
      if (willdelete) {
        const response = await fetcher.fetch({ url: UserUrls.DeleteEvent + id });
        console.log(response);
        if (response.delete) {
          window.location.reload()
        }
      } else {
        return
      }
    });   
   
   //delete
 };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = applications.slice(startIndex, endIndex);


  if (!applications || !applications.length) {
    return (
      <div className="'flex justify-center items-center'">
        <Empty message="There are no messages at the moment." />

      </div>
    );
  }



  return (
    <div className=" mx-auto p-10">
      <Card>
        <CardHeader
          variant="gradient"
          color="teal-900"
          title="Validators"
          className="mb-2 mt-4 p-6 bg-blue-600 "
        >
          <div className="flex justify-between items-center">
            <Typography as="div" variant="h3">
              Users Messages
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["NAME", "EMAIL ", " DATE", "Message", " "].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-1 px-8  text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {currentPageData?.map(
                (
                  { id, name, email, created_at, message },
                  key
                ) => {
                  const className = `py-1 px-2 ${key === currentPageData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div class="flex relative  justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
                            {/* <Img
                              src={avatar}
                              className=" w-20 h-20 rounded-full"
                            /> */}
                          </div>
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name} 
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              ID:{id}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {email}
                        </Typography>

                      </td>
                      <td className={className}>
                        <Badge
                          variant="gradient"
                          color="primary"
                          className="py-0.5 px-2 text-[11px] font-medium"
                        >
                         {renderDateTime(created_at)}
                        </Badge>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="mb-1 block text-xs font-medium text-blue-gray-600"
                        >
                          {message}
                        </Typography>

                      </td>
                      <td className={className}>
                        <Menu
                          placement="left-start"
                          trigger="..."

                        >
                          <MenuItem
                            onClick={() => handle_delete(id)}
                          >Delete</MenuItem>
                        </Menu>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>

        </CardBody>
        
      
      </Card>
      <div className="mt-10 ml-[20%]">
      <div className="flex  gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <Badge className="w-24" >{currentPage} / {totalPages}</Badge>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
    </div>
    </div>
  );
};

export default UserContacts;
