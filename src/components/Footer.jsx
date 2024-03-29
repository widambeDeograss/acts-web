import { Avatar, Typography } from "@material-tailwind/react";
import colors from "../constants/colors";
import logo from "../assets/logo.png";
import { PlayIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Footer() {
const navigate = useNavigate();
  return (
    <footer
      className="w-full p-8 text-white"
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
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs"
            >
              Privacy policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs"
            >
              Terms and conditions
            </Typography>
          </li>
          <li
          onClick={() => navigate("/acts/allEvents")}
          >
            <Typography
              as="a"
              href="#"
              color="white"

              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs"
            >
              Copyright statements
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs"
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
          className="font-normal transition-colors text-left mt-3 text-sm"
        >
          AFRICA’S CONTINENTAL THEOLOGICAL SEMINARY (ACTS)
        </Typography>
      </div>
      <hr className="my-8 border-blue-gray-50" />

      <div className="flex justify-between">
        <Typography color="white" className=" font-normal text-xs">
          &copy; {new Date().getFullYear()} ACTS
        </Typography>
        <div className="flex justify-start items-center gap-2">
          <h3 className="text-xs font-normal">Connect with us: </h3>
          <Typography
            as="a"
            href="https://youtube.com/@Gmail.comyusuphkelvin?si=KAQAC_RJv1qXnR_5"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-600"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 224 224"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M219.316 54.2297C218.05 49.1568 215.554 44.5269 212.079 40.8034C208.603 37.08 204.27 34.3935 199.513 33.0129C182 28 112 28 112 28C112 28 42 28 24.4873 33.0129C19.73 34.3935 15.3968 37.08 11.9214 40.8034C8.44588 44.5269 5.95005 49.1568 4.68364 54.2297C5.5631e-07 72.9535 0 112 0 112C0 112 5.5631e-07 151.046 4.68364 169.77C5.95005 174.843 8.44588 179.473 11.9214 183.197C15.3968 186.92 19.73 189.607 24.4873 190.987C42 196 112 196 112 196C112 196 182 196 199.513 190.987C204.27 189.607 208.603 186.92 212.079 183.197C215.554 179.473 218.05 174.843 219.316 169.77C224 151.046 224 112 224 112C224 112 224 72.9535 219.316 54.2297Z"
                fill="#FF0302"
              />
              <path
                d="M84 149.333V74.6666L158.667 112L84 149.333Z"
                fill="#FEFEFE"
              />
            </svg>
          </Typography>
          <Typography
            as="a"
            href="https://www.facebook.com/profile.php?id=100095550401483"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </Typography>
          <Typography
            as="a"
            href="https://instagram.com/acts_official255?igshid=OGY3MTU3OGY1Mw=="
            className="opacity-80 transition-opacity hover:opacity-100 text-red-300"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </Typography>
          <Typography
            as="a"
            href="https://wa.me/message/TFSQ7OKL7KUZG1"
            className="opacity-80 transition-opacity hover:opacity-100 text-red-300"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_1039)">
                <path
                  d="M1.43555 12.9384C1.43555 4.93835 4.43555 1.93835 12.4355 1.93835C20.4355 1.93835 23.4355 4.93835 23.4355 12.9384C23.4355 20.9384 20.4355 23.9384 12.4355 23.9384C4.43555 23.9384 1.43555 20.9384 1.43555 12.9384Z"
                  fill="#00CD4C"
                />
                <path
                  d="M6.37555 19.0984L6.85555 17.6684C7.01555 17.2084 7.14555 16.7384 7.32555 16.2884C7.37469 16.1924 7.40032 16.0862 7.40032 15.9784C7.40032 15.8706 7.37469 15.7643 7.32555 15.6684C6.75699 14.6187 6.52496 13.4196 6.66091 12.2336C6.79686 11.0476 7.29422 9.93214 8.08555 9.03836C8.66005 8.38347 9.37702 7.86898 10.1814 7.53441C10.9857 7.19984 11.8561 7.05409 12.7255 7.10836C14.0434 7.15185 15.3038 7.65814 16.2855 8.53836C17.2139 9.34641 17.8617 10.4284 18.1355 11.6284C18.3642 12.5987 18.3366 13.6119 18.0555 14.5684C17.7119 15.7703 16.9806 16.825 15.9755 17.5684C15.3101 18.0866 14.5383 18.4513 13.7153 18.6363C12.8924 18.8213 12.0388 18.822 11.2155 18.6384C10.6947 18.5336 10.1925 18.3516 9.72555 18.0984C9.68958 18.0814 9.65031 18.0726 9.61055 18.0726C9.57079 18.0726 9.53152 18.0814 9.49555 18.0984L6.81555 18.9384L6.37555 19.0984ZM7.89555 17.5884H7.98555L9.66555 17.0584C9.72391 17.0386 9.78718 17.0386 9.84555 17.0584C10.0855 17.1784 10.3155 17.3284 10.5655 17.4284C11.5619 17.866 12.6801 17.9403 13.7255 17.6384C14.3405 17.4741 14.9164 17.1887 15.4195 16.7989C15.9227 16.4091 16.3429 15.9227 16.6555 15.3684C17.276 14.2883 17.4591 13.0116 17.167 11.8007C16.875 10.5898 16.1301 9.53686 15.0855 8.85836C14.1398 8.24478 13.0101 7.97909 11.89 8.10679C10.7698 8.23449 9.72895 8.74764 8.94555 9.55836C8.30428 10.2132 7.86662 11.0399 7.68555 11.9384C7.54322 12.5543 7.52745 13.1928 7.63918 13.815C7.75091 14.4373 7.98782 15.0304 8.33555 15.5584C8.392 15.6519 8.42184 15.7591 8.42184 15.8684C8.42184 15.9776 8.392 16.0848 8.33555 16.1784C8.20555 16.6184 8.06555 17.0984 7.89555 17.5884Z"
                  fill="white"
                />
                <path
                  d="M15.4355 14.6283C15.4294 14.8412 15.3633 15.048 15.2448 15.2249C15.1262 15.4019 14.9601 15.5417 14.7655 15.6283C14.5636 15.7387 14.34 15.8039 14.1104 15.8194C13.8808 15.8349 13.6505 15.8005 13.4355 15.7183C13.0238 15.569 12.6199 15.3987 12.2255 15.2083C11.716 14.9384 11.2615 14.5755 10.8855 14.1383C10.4589 13.6691 10.0928 13.1484 9.79552 12.5883C9.57256 12.2001 9.46827 11.7551 9.49552 11.3083C9.51608 11.0776 9.58558 10.8539 9.69939 10.6521C9.8132 10.4504 9.96869 10.2752 10.1555 10.1383C10.2417 10.08 10.3417 10.0455 10.4455 10.0383C10.572 10.0281 10.6991 10.0281 10.8255 10.0383C10.8718 10.0442 10.9153 10.0633 10.9508 10.0935C10.9863 10.1237 11.0123 10.1636 11.0255 10.2083C11.1255 10.4383 11.2055 10.6683 11.2955 10.9083C11.3855 11.1483 11.4055 11.2283 11.4755 11.3783C11.5371 11.4609 11.5669 11.5629 11.5595 11.6657C11.5522 11.7685 11.5082 11.8652 11.4355 11.9383C11.3392 12.0641 11.2322 12.1812 11.1155 12.2883C11.0728 12.3219 11.0441 12.3702 11.0349 12.4237C11.0257 12.4773 11.0366 12.5323 11.0655 12.5783C11.3363 13.07 11.6956 13.5074 12.1255 13.8683C12.4337 14.0994 12.7696 14.2909 13.1255 14.4383C13.1624 14.472 13.2106 14.4907 13.2605 14.4907C13.3105 14.4907 13.3587 14.472 13.3955 14.4383L13.8955 13.8683C14.0055 13.7483 14.0555 13.7183 14.1955 13.7883L15.4255 14.4283C15.4422 14.4587 15.4517 14.4925 15.4534 14.5272C15.4552 14.5618 15.449 14.5964 15.4355 14.6283Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_1039">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.435547 0.938354)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Typography>
        </div>
      </div>
    </footer>
  );
}
