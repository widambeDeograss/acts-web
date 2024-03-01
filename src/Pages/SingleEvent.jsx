import React, {useState, useEffect} from "react";
import QuickLinks from "../components/QuickLinks";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { HiArrowRight } from "react-icons/hi";
import { UserUrls } from "../utils/apis";
import { useDataFetch } from "../hooks/DataHook";
import { baseUrl } from "../utils/BaseUrl";

const SingleEvent = () => {
  const fetcher = useDataFetch();
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();
  const {state} =useLocation()
  const event_id = state
  const [isLoading, setisLoading] = useState(false);
  const params = useParams();

  
  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.SingleEvent + params.id });
    if (response) {
      setBlogs(response);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-xl text-left font-semibold text-gray-800 capitalize lg:text-4xl  hover:underline  dark:text-white">
            {blogs?.title}
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-2 md:mt-16 md:grid-cols-2">
            <div class="lg:flex-col ">
              <div class="flex flex-col justify-between py-4">
                <a
                  href="#"
                  class="text-base font- text-gray-800 text-justify"
                >
                  {blogs?.description}
                </a>

                <span class="text-lg mt-3 text-gray-500 dark:text-gray-300">
                  On: {blogs?.date} time {blogs?.time}
                </span>
             
              </div>
              <img
                class="object-cover w-full h-64 rounded-lg lg:w-"
                src={baseUrl + blogs?.image}
                alt=""
              />

              <div
                className="flex fle-row gap-1 font-bold cursor-pointer mt-10"
                onClick={() => navigate("/acts/allEvents")}
              >
                <Typography as="h6" className="font-bold">
                  View other events and news
                </Typography>
                <HiArrowRight height={20} width={30} className="mt-1" />
              </div>
            </div>
            <div>
            <QuickLinks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleEvent;
