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

const tabData = [
  {
    label: "Message from the President",
    title: "Dr. Immaculate Nhigula",
    value: "message",
    image: nhigula,
    desc: `ACTS exists to develop God’s ministers
    who are capable of pioneering
    indigenous churches with the
    potential to grow spiritually,
    numerically, and geographically in
    the power of the Holy Spirit, thus
    fulfilling the Great commission`,
  },
  {
    label: "Mission",
    value: "mission",
    title: " ",
    image: pe8,
    desc: `To prepare, empower and develop servant leaders with the best Pentecostal training, skills, integrity and passion for multiplying the church and reach the world with the gospel of Jesus Christ in the power of Holy Spirit.`,
  },

  {
    label: "Vision",
    value: "vision",
    title: " ",
    image: pl8,
    desc: `To have servant leaders who are committed to God and His Word, spiritually transformed and empowered by Holy Spirit to reach and impact nations with the gospel of Jesus Christ.`,
  },
];

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
            <Typography variant="body2">
              {" "}
              <span>{event?.date}</span>
            </Typography>
          </div>
          <Typography variant="h6">
            {" "}
            <strong>
              <a color="inherit" href="#" style={{ textDecoration: "none" }}>
                {event?.title}
              </a>
            </strong>
          </Typography>
          <div className="flex flex-row">
            <ClockIcon height={25} />
            <Typography variant="body4"> {event?.time}</Typography>
            <MapPinIcon height={25} />
            <Typography variant="body4"> acts dodoma</Typography>
          </div>
        </ListItem>
        <hr />
      </List>
    </div>
  );
};

const Home = () => {
  const [currentTab, setcurrentTab] = useState(tabData[0]);
  const fetcher = useDataFetch();
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.Events });
    console.log(response);
    if (response) {
      setBlogs(response?.reverse());
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

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
            <div className="w-full text-center p-5 ">
              <Typography
                variant="lead"
                color="white"
                className="mb-1 opacity-80 text-base lg:text-base md:text-sm sm:text-sm"
              >
                `ACTS exists to develop God’s ministers who are capable of
                pioneering indigenous churches with the potential to grow
                spiritually, numerically, and geographically in the power of the
                Holy Spirit, thus fulfilling the Great commission`,,
              </Typography>
            </div>
          </div>
        </div>
        <img src={pl8} alt="image 2" className="h-full w-full object-cover" />
        <img
          src={buildingACt}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="grid grid-cols-1 gap-4  md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 justify-around mt-16 shadow-sm px-5 lg:px-16">
        <QuickLinks />

        <div className="shadow-md p-10  sm:w-full">
          <Typography variant="h6">
            {" "}
            <strong>Recent Events News&upadets </strong>
          </Typography>
          {blogs &&
            blogs
              ?.slice(0, 3)
             
              .map((blog) => <EventData event={blog} />)}
          <hr />
          <div
            className="flex fle-row gap-1 font-bold cursor-pointer"
            onClick={() => navigate("/acts/allEvents")}
          >
            <Typography as="h6" className="font-bold">
              View All
            </Typography>
            <ArrowRightIcon height={20} width={30} className="mt-1" />
          </div>
        </div>
      </div>
      <div className="bg-gray-400 h-auto mt-10 w-full">
        <div className="flex flex-row p-10  max-w-7xl mx-auto">
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
                      className=" mx-auto sm:w-full lg:w-3/4"
                    >
                      <h2>
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
      <section>
        <section class="bg-white ">
          <div class=" px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm">
              <h2 class=" text-xl tracking-tight font-extrabold text-gray-900">
                Testimonials
              </h2>
              <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                What our students say about us
              </p>
            </div>
            <div class="grid mb-8 lg:mb-12 lg:grid-cols-3">
              <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
                <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                  <p class="my-4">
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
                  <div class="space-y-0.5 font-medium  text-left">
                    <div>ERNEST IDABU</div>
                    <div class="text-sm font-light text-gray-500 ">
                      Masters of Arts Degree in Biblical Studies
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 ">
                <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500">
                  <p class="my-4">
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
                  <div class="space-y-0.5 font-medium text-left">
                    <div>FRED MSUNGU</div>
                    <div class="text-sm font-light text-gray-500 ">
                      Masters of Arts Degree(Leadership Concentration)
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r ">
                <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 ">
                  <p class="my-4">
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
                    <div className="uppercase">Lawrence Memruti Laizer</div>
                    <div class="text-sm font-light text-gray-500 ">
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
