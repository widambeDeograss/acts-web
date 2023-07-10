import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Breadcrumbs
} from "@material-tailwind/react";
import {EnvelopeIcon, PhoneArrowDownLeftIcon} from "@heroicons/react/24/solid"
import logo from '../assets/logo.png';
import colors from "../constants/colors";
 
export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 " 
    style={{
      color:colors.primary
    }}
    >
      <Typography
        as="li"
        variant="small"

        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:border-b-2 hover:border-b-purple-900">
          Home
        </a>
      </Typography>
    
      <Typography
        as="li"
        variant="small"

        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:border-b-2 hover:border-b-purple-900">
          AboutUs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"

        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:border-b-2 hover:border-b-purple-900">
          Campus 
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
    
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:border-b-2 hover:border-b-purple-900">
          Academics
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
      
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:border-b-2 hover:border-b-purple-900">
          Admission
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
    <div  
    className={`sticky top z-10 h-10 max-w-full rounded-none py-1 px-4 lg:px-8 lg:py-2 lg:flex md:flex sm:hidden hidden flex-row justify-between  text-white`}
    style={{
      backgroundColor:colors.primary
    }}
    >
      <div className="flex flex-row gap-2">
        <div className="text-white flex flex-row">
         <EnvelopeIcon color="white" height={20} className="mt-1"/> 
        <Typography
        as="li"
        variant="small"
    
        className="p-1 font-"
      >
        <a href="#" className="flex items-center text-xs">
          info@actseminary.education
        </a>
      </Typography>
        </div>
        <div className="text-white flex flex-row">
         <PhoneArrowDownLeftIcon color="white" height={20} className="mt-1"/> 
        <Typography
        as="li"
        variant="small"

        className="p-1 font-body"
      >
        <a href="#" className="flex items-center text-xs">
          +255 2264 565 52625
        </a>
      </Typography>
        </div>
      </div>
      <div className="flex flex-row">
        <Typography
         as="li"
         variant="small"
 
         className="p-1 font-body text-xs">
          Follow Us:
        </Typography>
      <Breadcrumbs className="-mt-1 h-8 ">
      <a href="#" className="opacity-60 -mt-1">
        instagram
      </a>
      <a href="#" className="opacity-60 -mt-1">
        facebook
      </a>
      <a href="#">
        twitter
      </a>
    </Breadcrumbs>
      </div>
    </div>
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
        <img src={logo} className="h-10 w-12"/>
          {/* <Typography
            as="a"
            href="#"
            className=" cursor-pointer py-1.5 font-medium"
          >
            ACTS
          </Typography> */}
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
              <Button variant="gradient" color="purple" size="sm" fullWidth className="mb-2"
              style={{
                backgroundColor:colors.primary
              }}>
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
          <Button variant="gradient" color="purple" size="sm" fullWidth className="mb-2">
            <span>Appy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
   
    </>
  );
}