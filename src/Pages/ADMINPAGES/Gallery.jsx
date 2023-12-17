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
import { HiFilm, HiUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { showModal, selectModal } from "../../App/ModalSlice";
import swal from "sweetalert";

const Gallery = () => {
  const navigate = useNavigate();
  const [corses, setcorses] = useState([]);
  const [images, setimages] = useState([]);
  const [videos, setvideos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const { showModal: isModalVisible, modalType } = useSelector(selectModal);

  const handleShowModal = (modalType) => {
    dispatch(showModal(modalType));
  };
  const fetcher = useDataFetch();

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.gellery });

    console.log(response);
    if (response) {
      const imgs = response?.filter((file) => file.type === "IMAGE");
      const vds = response?.filter((file) => file.type === "VIDEO");
      setimages(imgs);
      setvideos(vds);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handle_delete = async (id) => {
    swal({
      title: "",
      text: "Are you sure you want to delete this item!",
      icon: "warning",
      buttons: ["no!", "yes!"],
      showCancelButton: true,
      confirmButtonClass: "danger",
      confirmButtonText: " Confirm, remove it!",
      closeOnConfirm: false,
    }).then(async (willdelete) => {
      if (willdelete) {
        const response = await fetcher.fetch({
          url: UserUrls.gelleryDelete + `?id=${id}`,
        });
        console.log(response);
        if (response.delete) {
          window.location.reload();
        }
      } else {
        return;
      }

      //delete
    });
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!images || !images.length) {
    return (
      <div className="'flex justify-center items-center'">
        <div>
          <Empty message="There are no content at the moment." />
          <Button onClick={() => handleShowModal("galleryAdd")}>
            Add Content
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
                ACTS Gallery
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Get a peek at pictures taken at our events
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={() => handleShowModal("galleryAdd")}
                >
                  <HiFilm strokeWidth={2} className="h-4 w-4" /> Add content
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardBody className=" px-0 pt-0 h-auto">
          <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-6 mt-3">
            {images?.map((item) => {
              return (
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden h-64 w-64 shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
                    key={item.id}
                    onClick={() => setSelectedImage(baseUrl + `${item?.file}`)}
                  >
                    <img
                      src={baseUrl + `${item?.file}`}
                      alt="card-image"
                      className="object-cover h-full w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white px-4 py-2 text-sm">
                      {item?.title}
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      handle_delete(item?.id);
                    }}
                    className="bg-red-400 m-2 float-left"
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>

          <Typography className="text-left px-5 font-bold">VIDEOS</Typography>
          <div className="grid grid-cols-1  mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-6 mt-3">
            {videos?.map((item) => {
              return (
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden h-64 w-64 shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
                    key={item.id}
                    // onClick={() => setSelectedImage(baseUrl + `${item?.file}`)}
                  >
                    <video
                      className="h-full w-full rounded-lg object-cover"
                      controls
                      autoPlay
                      muted
                    >
                      <source
                        src={baseUrl + `${item?.file}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white px-4 py-2 text-sm">
                      {item?.title}
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      handle_delete(item?.id);
                    }}
                    className="bg-red-400 m-2 float-left"
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <button
              className="absolute top-4 right-4 text-black hover:text-gray-800 text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected Image" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
