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
import * as fileSever from "file-saver"; 
const renderDateTime = (dateString) => {
  const dateTime = new Date(dateString);
  return dateTime.toLocaleDateString();
};

const TABLE_HEAD = [
  "No",
  "Description",
  "Units(PER SESSION)",
  "PRICE PER UNIT(USD)",
  "TOTAL PRICE (USD)",
  "",
];

const FeeStracture = () => {
  const navigate = useNavigate();
  const [corses, setcorses] = useState([]);
  const [residential, setresidential] = useState([]);
  const [totalRes, settotalRes] = useState();
  const [totalNoRes, settotalNoRes] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const { showModal: isModalVisible, modalType } = useSelector(selectModal);

  const handleShowModal = (modalType) => {
    dispatch(showModal(modalType));
  };
  const fetcher = useDataFetch();
  const itemsPerPage = 12;

  const totalPages = Math.ceil(corses.length / itemsPerPage);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({
      url: UserUrls.mastersFees + `?type=NON_RESIDENTIAL`,
    });
    const residential = await fetcher.fetch({
      url: UserUrls.mastersFees + `?type=RESIDENTIAL`,
    });
    
    if (response) {
      setcorses(response?.data);
      settotalNoRes(response?.total);
      setresidential(residential?.data);
      settotalRes(residential?.total);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

    
const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const fileExtension = '.xlsx';

const exportToExcel = async () => {
const ws =await XLSX.utils.json_to_sheet(residential);
const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
const data =  new Blob ([excelBuffer], { type: fileType });
fileSever.saveAs(data, "feeStracture" + fileExtension);
}


  const handle_delete = async (id) => {
    swal({
      title: "",
      text: "Are you sure you want to delete item!",
      icon: "warning",
      buttons: ["no!", "yes!"],
      showCancelButton: true,
      confirmButtonClass: "danger",
      confirmButtonText: " Confirm, remove it!",
      closeOnConfirm: false,
    }).then(async (willdelete) => {
      if (willdelete) {
        const response = await fetcher.fetch({
          url: UserUrls.mastersFeesDelete + `?id=${id}`,
        });
        
        if (response.delete) {
          window.location.reload();
        }
      } else {
        return;
      }

      //delete
    });
  };

  if (!corses || !corses.length) {
    return (
      <div className="'flex justify-center items-center'">
        <div>
          <Empty message="There are Fee structures at the moment." />
          <Button onClick={() => handleShowModal("feeItemMasters")}>
            Add fee structure items
          </Button>
        </div>
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
                ACTS masters fee structure
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                For residential and non residential students
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={() =>exportToExcel()}
                >
                  <HiDownload strokeWidth={2} className="h-4 w-4" /> Download
                </Button>
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={() => handleShowModal("feeItemMasters")}
                >
                  <HiUserAdd strokeWidth={2} className="h-4 w-4" /> Add Fee Item
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>

        <Typography variant="h6" color="blue-gray" className="text-left px-4">
          Non Residential
        </Typography>

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
              {corses?.map(
                (
                  { description, price_per_unit, total_price, units, id },
                  index
                ) => {
                  const isLast = index === corses.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {index + 1}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {units}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price_per_unit}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {total_price}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton
                            variant="text"
                            onClick={() => {
                              handle_delete(id);
                            }}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}

              <tr>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold px-5"
                >
                  Total : {totalNoRes} USD
                </Typography>
              </tr>
            </tbody>
          </table>
        </CardBody>
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-left px-4 mt-10"
        >
          Residential
        </Typography>

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
              {residential?.map(
                (
                  { description, price_per_unit, total_price, units, id },
                  index
                ) => {
                  const isLast = index === residential.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {index + 1}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {units}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price_per_unit}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {total_price}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton
                            variant="text"
                            onClick={() => {
                              handle_delete(id);
                            }}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
              <tr>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold px-5"
                >
                  Total : {totalRes ? totalRes : 0} USD
                </Typography>
              </tr>
            </tbody>
          </table>
        </CardBody>
        <CardFooter>
        <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold px-5 pt-5"
                >
                  NOTE: Fee structures for Phd Programs are found on the course section, under each Phd program
                </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeeStracture;
