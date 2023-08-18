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

const authorsTableData = [
  {
    id: 12354,
    name: "Baraka Ramadhani",
    loc: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.40 1.png",
    validations: ["Manager", "Organization"],
    online: true,
    progress: 60,
    date: "23/04/18",
  },
  {
    id: 18845,
    name: "Janneth Hulingo",
    loc: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.png",
    validations: ["Programator", "Developer"],
    online: false,
    progress: 30,
    date: "11/01/19",
  },
];

const renderDateTime = (dateString) => {
  const dateTime = new Date(dateString);
  return dateTime.toLocaleDateString();
};

const PdfViewer = (pdfUrl) => {
  console.log(pdfUrl);
  return (
    <div>
      <h1>PDF Viewer</h1>
      <iframe src={pdfUrl} width="800" height="600"></iframe>
    </div>
  );
};


const Applications = () => {
  const navigate = useNavigate();
  const [applications, setapplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const fetcher = useDataFetch();
  const itemsPerPage = 12

  const totalPages = Math.ceil(applications.length / itemsPerPage);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.Application });
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = applications.slice(startIndex, endIndex);


  if (!applications || !applications.length) {
    return (
      <div className="'flex justify-center items-center'">
        <Empty message="There are no applications at the moment." />

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
          className="mb-2 mt-4 p-6 bg-purple-600 "
        >
          <div className="flex justify-between items-center">
            <Typography as="div" variant="h3">
              All applications
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["APPLICANT NAME", "PHONE", "APPLICATION EMAIL ", "APPLICATION DATE", "VIEW APPLICATION"].map(
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
                  { id, first_name, last_name, email, created_at, phone, document },
                  key
                ) => {
                  const className = `py-1 px-4 ${key === currentPageData.length - 1
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
                              {first_name} {last_name}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              ID:{id}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {phone}
                        </Typography>

                      </td>
                      <td className={className}>
                        <Badge
                          variant="gradient"
                          color="primary"
                          className="py-0.5 px-2 text-[11px] font-medium"
                        >
                          {email}
                        </Badge>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="mb-1 block text-xs font-medium text-blue-gray-600"
                        >
                          {renderDateTime(created_at)}
                        </Typography>

                      </td>
                      <td className={className}>
                        <Menu
                          placement="left-start"
                          trigger="..."

                        >
                          <MenuItem
                            onClick={() => window.open(`${baseUrl}${document}`, "_blank")}
                          >View pdf</MenuItem>
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

export default Applications;
