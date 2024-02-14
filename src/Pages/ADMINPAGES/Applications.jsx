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
import Menu from "../../components/adminComponents/Menu";
import MenuItem from "../../components/adminComponents/MenuItem";
import Badge from "../../components/adminComponents/Badge";
import Empty from "../../components/adminComponents/Empty";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// import Button from "../../components/adminComponents/Button";
import { useNavigate } from "react-router-dom";
import { UserUrls } from "../../utils/apis";
import { useDataFetch } from "../../hooks/DataHook";
import { baseUrl } from "../../utils/BaseUrl";
import * as fileServer from "file-saver";
import XLSX  from "sheetjs-style";

const renderDateTime = (dateString) => {
  const dateTime = new Date(dateString);
  return dateTime.toLocaleDateString();
};


const Applications = () => {
  const navigate = useNavigate();
  const [applications, setapplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const fetcher = useDataFetch();
  const itemsPerPage = 12

  const totalPages = Math.ceil(applications.length / itemsPerPage);


const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const fileExtension = '.xlsx';

const exportToExcel = async () => {
const ws = XLSX.utils.json_to_sheet(applications);
const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
const data = new Blob ([excelBuffer], { type: fileType });
fileServer.saveAs(data, "applications" + fileExtension);
}

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.Application });
    console.log(response);
    if (response) {
      setapplications(response?.reverse());
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
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray" className="text-left">
              All Applications
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm"
            onClick={() => {exportToExcel()}}
            >
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
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
                          
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {first_name} {last_name}
                            </Typography>
                           
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                      <div className="flex items-center gap-4">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {phone}
                        </Typography>
                        </div>
                      </td>
                      <td className={className}>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant="gradient"
                          color="primary"
                          className="py-0.5 px-2 text-[11px] font-medium"
                        >
                          {email}
                        </Badge>
                        </div>
                      </td>
                      <td className={className}>
                      <div className="flex items-center ml-2">
                     
                        <Typography
                          variant="small"
                          className="mb-1 block text-xs font-medium text-blue-gray-600 "
                        >
                          {renderDateTime(created_at)}
                        </Typography>
                       </div>
                      </td>
                      <td className={className}>
                      <div className="flex items-center gap-4">
                      <Tooltip content="View application">
                        <IconButton variant="text"
                         onClick={() => window.open(`${baseUrl}${document}`, "_blank")}
                        >
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                       </div>
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

export default Applications;
