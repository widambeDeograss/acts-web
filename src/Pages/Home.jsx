import React, { useState } from "react";
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

const tabData = [
  {
    label: "Message from the principal",
    title: "Dr. Immaculate Nhigula",
    value: "message",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    desc: `Acts exists to develop God’s ministers
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
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: "Vision",
    value: "vision",
    title: " ",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const Home = () => {
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
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 top-52 grid h-32  lg:w-[60%]  sm:w-[90%] mx-auto place-items-center bg-black/75">
            <div className="w-full text-center p-5 ">
              <Typography
                variant="lead"
                color="white"
                className="mb-1 opacity-80 text-base lg:text-base md:text-sm sm:text-sm"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts `Acts exists to develop God’s ministers
                who are capable of pioneering indigenous churches with the
                potential to grow spiritually, numerically, and geographically
                in the power of the Holy Spirit, thus fulfilling the Great
                commission`,,
              </Typography>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="flex flex-wrap justify-around mt-16 shadow-sm ">
       <div>
        <QuickLinks />
       </div>

        <div className="shadow-md p-5 lg:w-1/3 md:w-1/2 sm:w-full">
          <Typography variant="h6">
            {" "}
            <strong>Recent Events News&upadets </strong>
          </Typography>
          <List>
            <ListItem style={{ display: "block" }}>
              <div className="flex flex-row">
                <CalendarIcon height={32} />
                <Typography variant="body2">
                  {" "}
                  <span>Novemver 1 2022</span>
                </Typography>
              </div>
              <Typography variant="h6">
                {" "}
                <strong>
                  <a
                    color="inherit"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    New students orientation
                  </a>
                </strong>
              </Typography>
              <div className="flex flex-row">
                <ClockIcon height={25} />
                <Typography variant="body4"> 9:25pm</Typography>
                <MapPinIcon height={25} />
                <Typography variant="body4"> acts dodoma</Typography>
              </div>
            </ListItem>
            <hr />
          </List>
          <div className="flex fle-row gap-1 font-bold cursor-pointer">
           <Typography as="h6" className="font-bold">View All</Typography>
           <ArrowRightIcon height={20} width={30}  className="mt-1"/>
          </div>
        </div>

        <div className="bg-gray-400 h-auto mt-10 w-full">
          <div className="flex flex-row p-10 ">
            <div className="w-1/4 ">
              <img
                src={currentTab?.image}
                alt={currentTab?.value}
                className="h-full w-full object-cover rounded-sm hidden lg:block sm:hidden"
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
                      <TabPanel key={value} value={value}>
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
      </div>
      <section>
        <div className="mt-5">
          <div className=" text-center">
            <h3 className="mb-4 pt-5">
              <strong>What students Say aboutUs</strong>
            </h3>
          </div>
        </div>

        <div className="flex flex-col shadow-sm text-center lg:flex-row md:flex-col sm:flex-col p-10">
          <div className=" mb-5 mb-md-0">
            <div className="d-flex justify-center mb-4">
              <Avatar
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                className="rounded-3xl shadow-1 h-24 w-24"
                size="30"
              />
            </div>
            <h5 className="mb-3">
              <strong>ERNEST IDABU</strong>
            </h5>
            <h6 className="text-primary mb-3">
              Masters of Arts Degree in Biblical Studies
            </h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>I recommend these
              courses to everyone, and wish you, guys, luck with the new
              studies!
            </p>
          </div>
          <div className=" mb-5 mb-md-0">
            <div className="d-flex justify-center mb-4">
              <Avatar
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                className="rounded-3xl shadow-1 h-24 w-24"
                size="30"
              />
            </div>
            <h5 className="mb-3">FRED MSUNGU</h5>
            <h6 className="text-primary mb-3">
              Masters of Arts Degree(Leadership Concentration)
            </h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>I am grateful for your
              wonderful course! Your tutors are the best, and I am completely
              satisfied with the level of professional teaching.
            </p>
          </div>
          <div className=" mb-0">
            <div className="d-flex justify-center mb-4">
              <Avatar
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                className="rounded-3xl shadow-1 h-24 w-24"
                size="30"
              />
            </div>
            <h5 className="mb-3">AURELIAN NGONYANI</h5>
            <h6 className="text-primary mb-3">
              Masters of Divinity Degree(Ministerial Track)
            </h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>I recommend these
              courses to everyone, and wish you, guys, luck with the new
              studies!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
