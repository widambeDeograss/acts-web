import React, { useEffect, useState } from "react";
import {
  ArrowDownTrayIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  TrashIcon,
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
import { HiDownload, HiUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { showModal, selectModal } from "../../App/ModalSlice";
import swal from "sweetalert";
import XLSX from "sheetjs-style";
import * as fileServer from "file-saver";


const TABLE_HEAD = ["profile", "name", "position", "title", ""];

const Administration = () => {
  const navigate = useNavigate();
  const [positions, setpositions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const { showModal: isModalVisible, modalType } = useSelector(selectModal);

  const handleShowModal = (modalType) => {
    dispatch(showModal(modalType));
  };
  const fetcher = useDataFetch();
  const itemsPerPage = 12;

  const totalPages = Math.ceil(positions.length / itemsPerPage);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.administration });
    if (response) {
      setpositions(response?.reverse());
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const fileExtension = '.xlsx';

const exportToExcel = async () => {
const ws =await XLSX.utils.json_to_sheet(positions);
const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
const data =  new Blob ([excelBuffer], { type: fileType });
fileServer.saveAs(data, "Administratiion" + fileExtension);
}

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = positions.slice(startIndex, endIndex);

  if (!positions || !positions.length) {
    return (
      <div className="'flex justify-center items-center'">
        <div>
          <Empty message="There are no Administrative positions at the moment." />
          <Button
          onClick={() => handleShowModal("administrationAdd")}
          >
        
            Add Position
          </Button>
        </div>
      </div>
    );
  }

  const handle_delete = async (id) => {
    swal({  
      title: "",  
    text: "Are you sure you want to remove the position!",  
    icon: "warning",  
    buttons: ["no!", "yes!"],   
      showCancelButton: true,  
      confirmButtonClass: "danger",  
      confirmButtonText: " Confirm, remove it!",  
      closeOnConfirm: false  
    }
    ).then( async (willdelete) => {
      if (willdelete) {
        const response = await fetcher.fetch({ url: UserUrls.administrationDelete + `?id=${id}` });
      
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
                All Seminary Administration
              </Typography>
              
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={() => exportToExcel()}
                >
                  <HiDownload strokeWidth={2} className="h-4 w-4" /> Download
                </Button>
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={() => handleShowModal("administrationAdd")}
                >
                  <HiUserAdd strokeWidth={2} className="h-4 w-4" /> Add position
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {positions?.map(({ id,image, staff_name, staff_titles, admin_title }, index) => {
                const isLast = index === positions?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                     <td className={classes}>
                        <div className="flex items-center ">
                        <Avatar
                          src={baseUrl + `${image}`}
                          alt={staff_name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        </div>
                      </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {staff_name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {admin_title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                      {staff_titles}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text"
                        onClick={() => {handle_delete(id)}}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <Badge className="w-24">
              {currentPage} / {totalPages}
            </Badge>

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
          <Button
            variant="outlined"
            size="sm"
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

export default Administration;
