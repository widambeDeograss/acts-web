import { Avatar, Typography } from "@material-tailwind/react";
import colors from "../constants/colors"; 
import logo from "../assets/logo.png";


export default function Footer() {
  return (
    <footer className="w-full p-8 text-white" 
    style={{
        backgroundColor: colors.primary,
      }}
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <Avatar src={logo} alt="logo-ct" className="w-16 h-16" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Privacy policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms and conditions
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Copyright statements 
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <div>
      <Typography
              as="a"
              href="#"
              color="whitw"
              className="font-normal transition-colors text-left mt-3"
            >
              AFRICA’S CONTINENTAL THEOLOGICAL SEMINARY (ACTS)
            </Typography>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; {new Date().getFullYear()} Acts 
      </Typography>
    </footer>
  );
}