import React, { useEffect, useState } from "react";
import {
  ArrowDownTrayIcon,
  EyeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import Badge from "../../components/adminComponents/Badge";
import Empty from "../../components/adminComponents/Empty";
import { useNavigate } from "react-router-dom";
import { UserUrls } from "../../utils/apis";
import { useDataFetch } from "../../hooks/DataHook";
import { baseUrl } from "../../utils/BaseUrl";
import { HiUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { showModal, selectModal } from "../../App/ModalSlice"; 
import { TrashIcon } from "@heroicons/react/24/solid";
import swal from "sweetalert";


const renderDateTime = (dateString) => {
  const dateTime = new Date(dateString);
  return dateTime.toLocaleDateString();
};



const StaffAdminPage = () => {
  const navigate = useNavigate();
  const [staff, setstaff] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const { showModal: isModalVisible, modalType } = useSelector(selectModal);
  

  const handleShowModal = (modalType) => {
    dispatch(showModal(modalType));
  };
  const fetcher = useDataFetch();
  const itemsPerPage = 12

  const totalPages = Math.ceil(staff.length / itemsPerPage);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.staff });
    console.log(response);
    if (response) {
      setstaff(response?.reverse());
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = staff.slice(startIndex, endIndex);


  if (!staff || !staff.length) {
    return (
      <div className="'flex justify-center items-center'">
        <div>
        <Empty message="There are no Staff at the moment." />
        <Button
        onClick={() => handleShowModal('staffsAdd')}
        ><HiUserAdd strokeWidth={2} className="h-4 w-4" /> Add Staff</Button>
        </div>

      </div>
    );
  }

  const handle_delete = async (id) => {
    swal({  
      title: "",  
    text: "Are you sure you want to remove the staff!",  
    icon: "warning",  
    buttons: ["no!", "yes!"],   
      showCancelButton: true,  
      confirmButtonClass: "danger",  
      confirmButtonText: " Confirm, remove it!",  
      closeOnConfirm: false  
    }
    ).then( async (willdelete) => {
      if (willdelete) {
        const response = await fetcher.fetch({ url: UserUrls.staffDelete + `?id=${id}` });
        console.log(response);
        if (response.delete) {
          window.location.reload()
        }
      } else {
        return
      }
    
  
    //delete
  })
}


  return (
    <div className=" mx-auto p-10">
      <Card>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray" className="text-left">
              All ACTS Staff
            </Typography>
         
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
    
            <Button className="flex items-center gap-3" size="sm"
            onClick={() => handleShowModal('staffsAdd')}
            >
              <HiUserAdd strokeWidth={2} className="h-4 w-4" /> Add Staff
            </Button>
          </div>
        </div>
      </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[" ","STAFF NAME", "TITLE", "", ].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-1 px-6  text-left"
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
                  { id, full_name, titles, image, education },
                  key
                ) => {
                  const className = `py-1 px-4 ${key === currentPageData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={id}>
                      <td className={className}>
                        <div className="flex items-center ">
                        <Avatar
                          src={baseUrl + `/${image}`}
                          alt={full_name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center ">
                          
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {full_name}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              ID:{id}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex justify-center -ml-24">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {titles}
                        </Typography>
                        </div>

                      </td>
                  
                    
                      <td className={className}>
                      <Tooltip content="View education">
                        <IconButton variant="text"
                        onClick={() => {
                          swal({  
                            title: `${full_name}`,  
                          text: `${education}`,  
                      
                          }
                          )
                        }}
                        >
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="delete staff">
                        <IconButton variant="text"
                        onClick={() => {handle_delete(id)}}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                       
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>

        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
       
        <Badge className="w-24" >{currentPage} / {totalPages}</Badge>
     
          {/* <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton> */}
        </div>
        <Button variant="outlined" size="sm"
           onClick={() => handlePageChange(currentPage + 1)}
           disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </CardFooter>
      
      </Card>
      
    </div>
  );
};

export default StaffAdminPage;
