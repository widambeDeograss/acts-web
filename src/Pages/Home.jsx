import React, { useState, useEffect } from "react";
import {
  Carousel,
  IconButton,
  Typography,
  List,
  ListItem,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  LinkIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import colors from "../constants/colors";
import QuickLinks from "../components/QuickLinks";
import pe9 from "../assets/img/DJI_0981-min.JPG";
import pe8 from "../assets/img/DJI_0974.jpeg";
import nhigula from "../assets/img/nhigula faculty.png";
import buildingACt from "../assets/img/topActs.jpeg";
import pl8 from "../assets/img/_MG_9770.jpg";
import fred from "../assets/img/msuguFred.jpg";
import ngonyani from "../assets/img/ngonyaniStu.jpg";
import ernest from "../assets/img/ereneststu.jpg";
import { useNavigate } from "react-router-dom";
import { useDataFetch } from "../hooks/DataHook";
import { UserUrls } from "../utils/apis";
import { baseUrl } from "../utils/BaseUrl";

export const EventData = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div>
      <List>
        <ListItem
          style={{ display: "block" }}
          onClick={() => {
            navigate(`/acts/events/${event?.id}`, {
              state: {
                event: event?.id,
              },
            });
          }}
        >
          <div className="flex flex-row">
            <CalendarIcon height={32} />
            <Typography variant="body2" className="text-xs mt-2">
              {"  "}
              <span>{event?.date}</span>
            </Typography>
          </div>
          <Typography variant="h7" className="font-black">
            {" "}
            <strong>
              <a color="inherit" href="#" style={{ textDecoration: "none" }} className="text-xs">
                {event?.title}
              </a>
            </strong>
          </Typography>
          <div className="flex flex-row">
            <ClockIcon height={25} />
            <Typography variant="body4" className="text-xs mt-1">  {event?.time}</Typography>
            <MapPinIcon height={25} />
            <Typography variant="body4" className="text-xs mt-1">  Acts Dodoma</Typography>
          </div>
        </ListItem>
        <hr />
      </List>
    </div>
  );
};

const Home = () => {
  const fetcher = useDataFetch();
  const [blogs, setBlogs] = useState();

  const [sitedata, setsitedata] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);
  const [popular, setpopular] = useState([]);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.Events });
    const siteresponse = await fetcher.fetch({ url: UserUrls.siteInfo });
    console.log(response);
    if (response) {
      setpopular(response);
      setBlogs(response);
      
      setsitedata(siteresponse);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
   
  const tabloading =  <div className="max-w-full animate-pulse">
  <Typography
    as="div"
    variant="h1"
    className="mb-4 h-3 w-72 rounded-full bg-gray-300"
  >
    &nbsp;
  </Typography>
  <Typography
    as="div"
    variant="paragraph"
    className="mb-2 h-2 w- rounded-full bg-gray-300"
  >
    &nbsp;
  </Typography>
  <Typography
    as="div"
    variant="paragraph"
    className="mb-2 h-2 w- rounded-full bg-gray-300"
  >
    &nbsp;
  </Typography>
  <Typography
    as="div"
    variant="paragraph"
    className="mb-2 h-2 w- rounded-full bg-gray-300"
  >
    &nbsp;
  </Typography>
  <Typography
    as="div"
    variant="paragraph"
    className="mb-2 h-2 w- rounded-full bg-gray-300"
  >
    &nbsp;
  </Typography>
</div>;

  const tabData = [
    {
      label: "Message from the President",
      title: isLoading? " ": "Dr. Immaculate Nhigula",
      value: "message",
      image: nhigula,
      desc: isLoading? tabloading: sitedata?.message_from_president,
    },
    {
      label: "Mission",
      value: "mission",
      title: " ",
      image: pe8,
      desc:  isLoading? tabloading: sitedata?.mission,
    },

    {
      label: "Vision",
      value: "vision",
      title: " ",
      image: pl8,
      desc: isLoading? tabloading: sitedata?.vision,
    },
  ];
  const [currentTab, setcurrentTab] = useState(tabData[0]);

  const imagetab = (value) => {
    const currentT = tabData.find((tab) => tab.value === value);
    console.log(currentT.image);
    setcurrentTab(currentT);
  };

  return (
    <div>
      <Carousel
        className="rounded-xl h-96"
        transition={{ duration: 2 }}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -translate-y-2/4 left-4"
          >
            <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 -translate-y-2/4 !right-4"
          >
            <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
          <img src={pe9} alt="image 1" className="h-full w-full object-cover" />
          <div className="absolute inset-0 top-52 grid h-auto  pb-2 lg:w-[60%]  sm:w-[90%] mx-auto place-items-center bg-black/75">
            {isLoading ? (
              <div className="max-w-full animate-pulse">
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-800"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-800"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-800"
                >
                  &nbsp;
                </Typography>
                
              </div>
            ) : (
              <div className="w-full text-center p-5 ">
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-1 opacity-80 text-base lg:text-sm md:text-xs sm:text-xs"
                >
                  {sitedata?.message_from_president}
                </Typography>
              </div>
            )}
          </div>
        </div>
        <img src={pl8} alt="image 2" className="h-full w-full object-cover" />
        <img
          src={buildingACt}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="grid grid-cols-1 gap-4  md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 justify-around mt-16 shadow-sm   max-w-7xl mx-auto">
        <div>
        <QuickLinks />
        </div>

        <div className="shadow-md p-10  sm:w-full">
          <Typography variant="h6" className="text-sm">
            {" "}
            <strong>Recent Events, News and Upadets </strong>
          </Typography>
          {isLoading? <div className="max-w-full animate-pulse mt-5">
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                
              </div>: 
            blogs
              ?.slice(0, 3).reverse()
              .map((blog) => <EventData event={blog} />)}
         
          <hr />
          <div
            className=" font-bold cursor-pointer  "
            onClick={() => navigate("/acts/allEvents")}
          >
            <Typography as="h6" className="font-bold text-xs flex fle-row gap-1 hover:bg-gray-100 w-24 rounded-lg p-1">
              View All
              <ArrowRightIcon height={15} width={30} className="" />
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="bg-gray-400 h-auto mt-10 w-full">
        <div className="flex flex-row  p-10  max-w-7xl mx-auto">
          <div className="w-1/4 rounded-lg overflow-hidden mr-1">
            <img
              src={currentTab?.image}
              alt={currentTab?.value}
              className="h-full w-full object-cover  hidden md:block lg:block sm:hidden rounded-lg"
            />
          </div>
          <div className="lg:w-3/4 sm:w-full">
            <Tabs id="custom-animation" value="message">
              <TabsHeader>
                {tabData.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => {
                      imagetab(value);
                    }}
                    className="text-xs"
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                {tabData.map(({ value, desc, title }) => (
                  <>
                    <TabPanel
                      key={value}
                      value={value}
                      className=" mx-auto sm:w-full lg:w-3/4 text-xs"
                    >
                      <h2 className="">
                        <strong>{title}</strong>
                      </h2>
                      {desc}
                    </TabPanel>
                  </>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
      <div
        className="w-full h-auto py-2 "
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center lg:text-left">
            <div className="flex justify-between  px-10">
              <h2 className="mb-12 text-left text-sm font-bold ">
                Popular Events
              </h2>
              <div>
                <button className="h-  bg-[#4CA9FF] rounded-sm text-xs p-1 hover:scale-95
                 "
                 onClick={() => navigate("/acts/allEvents")}
                 >
                  View all
                </button>
              </div>
            </div>

            <div className="">

            {isLoading ? (
             <div className="">
              <div className="grid  lg:grid-cols-3 w-full gap-3 lg:gap-3 sm:gap-10">
              <div className="max-w-full animate-pulse mx-auto">
                 <div className="grid h-full max-h-[200px] min-h-[160px] w-72 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300 ">
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
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300 mt-2 "
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                >
                  &nbsp;
                </Typography>
                
              </div>
              <div className="max-w-full animate-pulse mx-auto">
                 <div className="grid h-full max-h-[200px] min-h-[160px] w-72 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
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
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300 mt-2"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                >
                  &nbsp;
                </Typography>
                
              </div>
              <div className="max-w-full animate-pulse mx-auto">
                 <div className="grid h-full max-h-[200px] min-h-[160px] w-72 max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
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
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300 mt-2"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                >
                  &nbsp;
                </Typography>
                
              </div>
              </div>
             </div> 
            ) : (
              <div className="grid grid-cols-1 gap-10  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-3">
              {popular?.slice(1, 4)?.map( (event) => {
               return(
                <div className="mb-12 lg:mb-0 opacity- transition duration-300 ease-in-out hover:opacity-50 mx-auto"
                key={event?.id}
                onClick={() => {
                  navigate(`/acts/events/${event?.id}`, {
                    state: {
                      event: event?.id,
                    },
                  });
                }}
                >
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img  src={baseUrl + event?.image} className="w-full h-44" />
                  <a href="#!">
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed  bg-[hsla(0,0%,98.4%,0.2)]"></div>
                  </a>
                </div>
                <h5 className="mb-4 text-xs font-bold">
                {event?.title}
                </h5>
                <p className="text-neutral-500 text-xs">
                {/* {event?.description} */}
                </p>
                <div className="flex items-center mt-2">
                  <p className="inline-flex items-center mr-3 font-semibold text-xs text-gray-900 dark:text-white">
                
                    ACTS Dodoma
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      {event?.date}: {event?.time}
                    </time>
                  </p>
                </div>
              </div>
               ) 
              })}
            </div>
            )
             
            }


             

              
            </div>
          </section>
        </div>
      </div>
      <section>
        <section class="bg-white ">
          <div class=" px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm">
              <h2 class=" text-lg tracking-tight font-extrabold text-gray-900">
                Testimonials
              </h2>
              <p class="mb-8 font-light text-gray-500 lg:mb-16 dark:text-gray-400 text-sm">
                What our students say about us
              </p>
            </div>
            <div class="grid mb-8 lg:mb-12 lg:grid-cols-3">
              <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
                <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                  <p class="my-4 text-xs">
                    "I recommend these courses to everyone, and wish you, luck
                    with the new studies!
                  </p>
                </blockquote>
                <figcaption class="flex justify-center items-center space-x-3">
                  <img
                    class="w-9 h-9 rounded-full"
                    src={ernest}
                    alt="profile picture"
                  />
                  <div class="space-y-0.5 font-medium  text-left text-sm">
                    <div>ERNEST IDABU</div>
                    <div class="text-sm font-light text-gray-500 ">
                      Masters of Arts Degree in Biblical Studies
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 ">
                <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500">
                  <p class="my-4 text-xs">
                    "I am grateful for your wonderful course! Your tutors are
                    the best, and I am completely satisfied with the level of
                    professional teaching."
                  </p>
                </blockquote>
                <figcaption class="flex justify-center items-center space-x-3">
                  <img
                    class="w-9 h-9 rounded-full"
                    src={fred}
                    alt="profile picture"
                  />
                  <div class="space-y-0.5 font-medium text-left text-sm">
                    <div>FRED MSUNGU</div>
                    <div class="text-sm font-light text-gray-500 ">
                      Masters of Arts Degree(Leadership Concentration)
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r ">
                <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 ">
                  <p class="my-4 text-xs">
                    "I recommend these courses to everyone, and wish you, luck
                    with the new studies!."
                  </p>
                </blockquote>
                <figcaption class="flex justify-center items-center space-x-3">
                  <img
                    class="w-9 h-9 rounded-full"
                    src={`${require("../assets/img/Lawrence.png")}`}
                    alt="profile picture"
                  />
                  <div class="space-y-0.5 font-medium  text-left">
                    <div className="uppercase text-xs">Lawrence Memruti Laizer</div>
                    <div class="text-xs font-light text-gray-500 ">
                      LEAD PASTOR TAG NEW SINAI CHRISTIAN CENTER
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
