import { Typography } from "@material-tailwind/react";
import colors from "../constants/colors"; 
import logo from "../assets/logo.png";


export default function Footer() {
  return (
    <footer className="w-full p-8 text-white bg-white" 
    // style={{
    //     backgroundColor: "gray",
    //   }}
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="purple"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Privacy policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="purple"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms and conditions
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="purple"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Copyright statements 
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="purple"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="purple" className="text-center font-normal">
        &copy; 2023 Acts 
      </Typography>
    </footer>
  );
}