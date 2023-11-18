import React, {useState} from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Card,
  Breadcrumbs,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import "./nav.css";
import logo from "../assets/logo.png";
import colors from "../constants/colors";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setscrolled] = useState(false);
  const navigate = useNavigate()

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    window.addEventListener(
      "scroll" ,() => setscrolled(true)
    )
  }, []);

  const navList = (
    <ul
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 "
      style={{
        color: colors.primary,
      }}
    >
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a
          href="/"
          className="flex items-center hover:border-b-2 hover:border-b-purple-900"
        >
          Home
        </a>
      </Typography>

      <Typography as="li" variant="small" className="p-1 font-normal">
        <div class="relative hover-trigger">
          <a
            href="#"
            className="flex items-center cursor-pointer hover-trigger  hover:border-b-2 hover:border-b-purple-900"
          >
            AboutUs
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </a>
          <div class=" px-4 py-2  hover-target">
            <Card className="absolute z-50 top-0 mt-6 ">
              <List>
                <ListItem
                 onClick={()=> navigate("acts/about_us")}
                >Historical Background</ListItem>
                {/* <ListItem
                 onClick={()=> navigate("acts/contact_us")}
                >Staff</ListItem> */}
                <ListItem
                onClick={()=> navigate("acts/contact_us")}
                >Contact Us</ListItem>
              </List>
            </Card>
          </div>
        </div>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal"
      onClick={() => navigate("acts/campus_tour")}
      >
        <div class="relative ">
          <a
            className="flex items-center cursor-pointer hover-trigger  hover:border-b-2 hover:border-b-purple-900"
          >
            Campus

          </a>
        </div>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <div class="relative hover-trigger">
          <a
            href="#"
            className="flex items-center cursor-pointer hover-trigger  hover:border-b-2 hover:border-b-purple-900"
          >
            Academics
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </a>
          <div class=" px-4 py-2  hover-target">
            <Card className="absolute z-50">
              <List>
                <ListItem className="hover:text-purple-900"
                onClick={() => navigate("/academics/masters_programs")}
                >
                  Masters Programs
                </ListItem>
                <ListItem
                onClick={() => navigate("/academics/Phd_programs")}
                >Phd Programs</ListItem>
              </List>
            </Card>
          </div>
        </div>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <div class="relative hover-trigger">
          <a
            className="flex items-center cursor-pointer hover-trigger  hover:border-b-2 hover:border-b-purple-900"
          >
             Admission
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </a>
          <div class=" px-4 py-2  hover-target">
          <Card className="absolute z-50 top-0 mt-6">
              <List>
                <ListItem
                onClick={() => navigate("/admission/entry_requirements")}
                >Entry Requirements</ListItem>
                <ListItem
                onClick={() => navigate("/admission/acts_online_application")}
                >Apply online</ListItem>
              </List>
            </Card>
          </div>
        </div>
      </Typography>

    </ul>
  );

  return (
    <>
      <div
        className={`sticky top z-10 h-10 max-w-full rounded-none py-1 px-4 lg:px-8 lg:py-2 lg:flex md:flex sm:hidden hidden flex-row justify-between  text-white`}
        style={{
          backgroundColor: colors.primary,
        }}
      >
        <div className="flex flex-row gap-2">
          <div className="text-white flex flex-row">
            <EnvelopeIcon color="white" height={20} className="mt-1" />
            <Typography as="li" variant="small" className="p-1 font-">
              <a href="#" className="flex items-center text-xs">
                info@actseminary.education
              </a>
            </Typography>
          </div>
          <div className="text-white flex flex-row">
            <PhoneArrowDownLeftIcon
              color="white"
              height={20}
              className="mt-1"
            />
            <Typography as="li" variant="small" className="p-1 font-body">
              <a href="#" className="flex items-center text-xs">
                +255 787 023747
              </a>
            </Typography>
          </div>
        </div>
        <div className="flex flex-row">
          <Typography as="li" variant="small" className="p-1 font-body text-xs">
            Follow Us:
          </Typography>
          <Breadcrumbs className="-mt-1 h-8 ">
            <a href="https://www.instagram.com/p/Cvm4Z5aNZTu/?igshid=OGY3MTU3OGY1Mw==" className="opacity-60 -mt-1">
              instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=100065764118362" className="opacity-60 -mt-1">
              facebook
            </a>
            <a href="https://youtube.com/@jcctag-mbeyabusokelo3754">youtube</a>
          </Breadcrumbs>
        </div>
      </div>
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img src={logo} className="h-10 w-12" />
          {/* <Typography
            as="a"
            href="#"
            className=" cursor-pointer py-1.5 font-medium"
          >
            ACTS
          </Typography> */}
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              color="purple"
              size="sm"
              fullWidth
              className="mb-2"
              style={{
                backgroundColor: colors.primary,
              }}
              onClick={() => navigate("/admission/acts_online_application")}
            >
              <span>Appy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button
            variant="gradient"
            color="purple"
            size="sm"
            fullWidth
            className="mb-2"
            onClick={() => navigate("/admission/acts_online_application")}
          >
            <span>Appy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
