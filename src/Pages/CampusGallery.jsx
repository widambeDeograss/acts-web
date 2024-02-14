import {
  Typography,
  Card,
  CardHeader,
  Spinner,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import PageHeroSection from "../components/PageHeroSection";
import InfiniteImageCarousel from "../components/InfiniteImageCarosel";
import { useDataFetch } from "../hooks/DataHook";
import { UserUrls } from "../utils/apis";
import acts_tour from "../assets/acts_tours.mp4";
import pe9 from "../assets/img/DJI_0981-min.JPG";
import pl2 from "../assets/img/_MG_9791.jpg";
import pl3 from "../assets/img/_MG_9704.jpg";
import pl7 from "../assets/img/_MG_9779.jpg";
import pl8 from "../assets/img/_MG_9770.jpg";
import { baseUrl } from "../utils/BaseUrl";

const itemData = [
  {
    img: pe9,
    title: "",
    author: "ACTS Ground",
  },
  {
    img: pl2,
    title: "",
    author: "ACTS Canteen",
  },
  {
    img: pl3,
    title: "",
    author: "ACTS Hostel",
  },

  // {
  //   img: pl6,
  //   title: '',
  //   author: 'ACTS Library',
  // },

  {
    img: pl7,
    title: "",
    author: "ACTS Library",
  },

  {
    img: pl8,
    title: "",
    author: "ACTS Library",
  },

  {
    img: pe9,
    title: "",
    author: "ACTS Ground",
  },
];

function CampusGallery() {
  const [images, setimages] = useState([]);
  const [videos, setvideos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setisLoading] = useState(false);

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

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <PageHeroSection title="Campus Tour" />
      <Typography variant="h4" className="mt-5 font-semibold">
        Join ACTS Today
      </Typography>
      <Typography variant="h2" className=""></Typography>
      <Typography
        variant="body2"
        className=" mx-auto text-center w-2/3  mt-2 font-light mb-6 leading-snug"
      >
        Acts exists to develop God’s ministers who are capable of pioneering
        indigenous churches with the potential to grow spiritually, numerically,
        and geographically in the power of the Holy Spirit, thus fulfilling the
        Great commission
      </Typography>

      <div className="flex justify-center items-center  ">
        <InfiniteImageCarousel images={itemData} />
      </div>

      <div className="mx-auto mb-8 w-11/12">
        <Typography variant="h5" className="mb-1 font-semibold text-left ">
          ACTS Tour{" "}
        </Typography>
        <video className="h-full w-full rounded-lg" controls autoPlay muted>
          <source src={acts_tour} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mx-auto mb-8 w-11/12">
        <Typography variant="h6" className="mb-1 font-semibold text-left ">
          ACTS Gallery{" "}
        </Typography>
        {isLoading ? (
          <div className="flex justify-center gap-10 flex-wrap">
            <div className="grid h-full max-h-[200px] min-h-[160px] w-44 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <div className="grid h-full max-h-[200px] min-h-[160px] w-44 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <div className="grid h-full max-h-[200px] min-h-[160px] w-44 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          </div>
        ) : images?.length === 0 ? (
          <div className="text-xs">
            There are no content in our Gallery for now
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  mt-3">
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
                </div>
              );
            })}
          </div>
        )}

        <Typography className="text-left font-bold mt-10">
          ACTS events
        </Typography>
        {isLoading ? (
          <div className="flex justify-center gap-10 flex-wrap">
            <div className="grid h-full max-h-[300px] min-h-[160px] w-44 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="grid h-full max-h-[300px] min-h-[160px] w-44 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="grid h-full max-h-[100px] min-h-[160px] w-44 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-3">
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
                </div>
              );
            })}
          </div>
        )}
      </div>

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
}

export default CampusGallery;
