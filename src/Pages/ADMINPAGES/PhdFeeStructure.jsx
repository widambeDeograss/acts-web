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
import { UserUrls } from "../../utils/apis";
import { useDataFetch } from "../../hooks/DataHook";
import { baseUrl } from "../../utils/BaseUrl";
import { HiCurrencyDollar, HiUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { showModal, selectModal } from "../../App/ModalSlice";
import swal from "sweetalert";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const TABLE_HEAD = [
    "No",
    "Description",
    "Amount (USD)",
    "",
  ];

const PhdFeeStructure = () => {
    const [isLoading, setisLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const [corses, setcorses] = useState([]);
    const [totalRes, settotalRes] = useState();
    const [phdCourse, setphdCourse] = useState();
    const dispatch = useDispatch();
    const { showModal: isModalVisible, modalType } = useSelector(selectModal);
  
    const handleShowModal = (modalType) => {
      dispatch(showModal(modalType));
    };
    const fetcher = useDataFetch();
    const itemsPerPage = 12;
  
  
    const loadData = async () => {
      setisLoading(true);
      const response = await fetcher.fetch({
        url: UserUrls.phdFees + `?id=${params?.id}`,
      });
    
      
      if (response) {
        setcorses(response?.data);
        settotalRes(response?.total);
        setphdCourse(response?.course)
        setisLoading(false);
      }
    };
    useEffect(() => {
      loadData();
    }, []);
  
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
            url: UserUrls.phdFeesDelete + `?id=${id}`,
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
            <Empty message="There are Fee structures for this Program, at the moment." />
            <Button onClick={() => handleShowModal("feeItemPhd")}>
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
              Fee structure
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-sm text-left">
              {phdCourse?.course}
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
           
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={() => handleShowModal("feeItemPhd")}
              >
                <HiCurrencyDollar strokeWidth={2} className="h-4 w-4" /> Add Item
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
            {corses?.map(({ description, amount,id }, index) => {
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
                      {amount}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Tooltip content="Delete">
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
          <tr>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold px-5"
                >
                  Total : {totalRes} USD
                </Typography>
              </tr>
        </table>
      </CardBody>
    
    </Card>
  </div>
  )
}

export default PhdFeeStructure