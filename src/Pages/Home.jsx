import React from "react";
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

const tabData = [
  {
    label: "Message from the principal",
    value: "message",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Mission",
    value: "mission",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: "Vision",
    value: "vision",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const Home = () => {
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
          <div className="absolute inset-0 top-52 grid h-32 w-[60%] mx-auto place-items-center bg-black/75">
            <div className="w-1/2 text-center md:w-2/4">
              <Typography
                variant="lead"
                color="white"
                className="mb-1 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts,
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
        <div
          style={{
            backgroundColor: colors.primary,
            color: "white",
            padding: "20px",
          }}
        >
          <div className="flex flex-row text-centre justify-center">
            <LinkIcon height={40} className="-mt-2  mr-3" />
            <Typography variant="h5">
              {" "}
              <strong>Quick Links </strong>
            </Typography>
          </div>

          <a
            href="https://www.pathseminary.org/admission"
            className="mt-3 p-10 my-10"
            style={{ textDecoration: "none", color: "white" }}
          >
            New students information conserning Tution Fees{" "}
          </a>
          <hr />
          <Typography variant="body4">
            <a
              href="https://www.pathseminary.org/apply"
              style={{ textDecoration: "none", color: "white" }}
            >
              Application Form for Doctrate students{" "}
            </a>
          </Typography>
          <hr />
          <Typography variant="body4">
            <a
              href="https://my.globaluniversity.edu/?"
              style={{ textDecoration: "none", color: "white" }}
            >
              Masters students Portal{" "}
            </a>
          </Typography>
        </div>

        <div className="shadow-md p-4">
          <Typography variant="h5">
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
            {/* <Divider component="li" /> */}

            {/* <ListItem sx={{display:'block'}}>
                <Typography variant='body2'> <CalendarMonth /> December 1 2022</Typography>
                <Typography variant='h6'><strong> <Link color="inherit" href="/" style={{textDecoration: "none"}}>
                Announcement to join short and long term courses - Bible Knowledge
                    </Link> </strong></Typography>
            
                <Typography variant='body4'><Timer /> 9:25pm<LocationOn />acts dodoma</Typography>
              
              </ListItem>
              <Divider component="li" />
              


              <ListItem sx={{display:'block'}}>
                <Typography variant='body2'> <CalendarMonth /> December 1 2022</Typography>
                <Typography variant='h6'><strong> <Link color="inherit" href="/" style={{textDecoration: "none"}}>
                ACTS Dodoma Campus Tracer Study Report for 2021/2022 Academic Year
                    </Link> </strong></Typography>
              
                <Typography variant='body4'><Timer /> 9:25pm<LocationOn />acts dodoma</Typography>
                
              </ListItem>
              <Divider component="li" />



              <ListItem sx={{display:'block'}}>
                <Typography variant='body2'> <CalendarMonth /> December 1 2022</Typography>
                <Typography variant='h6'><strong> <Link color="inherit" href="/" style={{textDecoration: "none"}}>
                Students selected to join masters degree programmers for the academic year 2022/2023.
                    </Link> </strong></Typography>
                
                <Typography variant='body4'><Timer /> 9:25pm<LocationOn />acts dodoma</Typography>
                
              </ListItem>
              <Divider component="li" /> */}
          </List>
        </div>

        <div className="bg-gray-400 h-auto mt-10 w-full">
          <div className="flex flex-row p-10 ">
            <div className="w-1/4">
            <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover rounded-sm"
        />
            </div>
            <div className="w-3/4">
            <Tabs id="custom-animation" value="html" >
              <TabsHeader>
                {tabData.map(({ label, value }) => (
                  <Tab key={value} value={value}>
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
                {tabData.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
