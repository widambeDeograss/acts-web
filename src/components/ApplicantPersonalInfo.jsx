import React, { useState } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Radio,
} from "@material-tailwind/react";

const ApplicantPersonalInfo = () => {
  const [open, setOpen] = useState(false);
  const [openMinsterial, setOpenMinisterial] = useState(false);

  return (
    <div class="  ">
      <Typography className="font-bold text-left mt-28 sm:mt-1">
        PERSONAL INFORMATION{" "}
      </Typography>
      <form>
        <div className="flex flex-row mt-3">
          <Typography className="font-semibold text-left mt-3">
            Previous studies with Global University:{" "}
          </Typography>
          <div className="flex gap-3">
            <Radio
              id="ripple-on"
              name="type"
              label="Yes"
              onClick={() => setOpen(true)}
            />
            <Radio
              id="ripple-off"
              name="type"
              label="No"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
        <Collapse open={open}>
          <Card className="my-4 mx-auto w-8/12">
            <CardBody>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Student No. (Former Global University Students only)
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                required
              />
            </CardBody>
          </Card>
        </Collapse>
        <div class="grid gap-6 mb-6 lg:grid-cols-3 w-full">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Family/Last Name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Maiden Name(if applicable)
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              PASSSPORT PHOTO
            </label>
            <input
              type="file"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div class="grid gap-6 mb-6 lg:grid-cols-2 w-full">
          <div className="flex flex-row mt-3">
            <Typography className="text-base text-left mt-3">
              Title:{" "}
            </Typography>
            <div className="flex flex-wrap gap-1">
              <Radio id="ripple-on" name="type" label="Mr" onClick={() => {}} />
              <Radio
                id="ripple-off"
                name="type"
                label="Ms"
                onClick={() => {}}
              />
              <Radio
                id="ripple-off"
                name="type"
                label="Mrs"
                onClick={() => {}}
              />
              <Radio
                id="ripple-off"
                name="type"
                label="Rev"
                onClick={() => {}}
              />
              <Radio
                id="ripple-off"
                name="type"
                label="Dr"
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <Typography className="text-base  text-left mt-3">
              Gender:{" "}
            </Typography>
            <div className="flex gap-3">
              <Radio
                id="ripple-on"
                name="type"
                label="Male"
                ripple={true}
                onClick={() => {}}
              />
              <Radio
                id="ripple-off"
                name="type"
                label="Female"
                onClick={() => {}}
                ripple={false}
              />
            </div>
          </div>
        </div>
        <div class="mb-6">
          <div className="flex flex-row mt-3">
            <Typography className="text-base  text-left mt-3">
              Marital Status:{" "}
            </Typography>
            <div className="flex flex-wrap gap-3">
              <Radio
                id="ripple-on"
                name="type"
                label="Single"
                onClick={() => {}}
              />
              <Radio
                id="ripple-off"
                name="type"
                label="Married"
                onClick={() => {}}
              />
              <Radio
                id="ripple-off"
                name="type"
                label="Widowed"
                onClick={() => {}}
              />
              <Radio
                id="ripple-off"
                name="type"
                label="Divorced"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
        <div class="grid gap-6 mb-6 lg:grid-cols-3 w-full">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Home Address
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Country of Residence
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tanzania"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Conutry of Citizenship
            </label>
            <input
              type="text"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tanzania"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primary Language
            </label>
            <input
              type="text"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="English"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primary phone
            </label>
            <input
              type="tel"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="255 765 453 565"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div class="grid gap-6 mb-6 lg:grid-cols-2 w-full">
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Present Occupation
            </label>
            <input
              type="text"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Other Phone
            </label>
            <input
              type="tel"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="255 765 453 565"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <Typography className="text-left font-semibold">
            Primary Religious Affiliation
          </Typography>
          <div className="flex flex-col gap-2">
            <Radio
              id="terms-html"
              name="terms"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Assemblies of God
                </Typography>
              }
            />
            <Radio
              id="terms-react"
              name="terms"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Other Pentecostal
                </Typography>
              }
            />
            <Radio
              id="terms-react"
              name="terms"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Other Protestant
                </Typography>
              }
            />
            <Radio
              id="terms-react"
              name="terms"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Roman Catholic
                </Typography>
              }
            />
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="terms"
                label={
                  <Typography
                    color="blue-gray"
                    className="font-medium flex  mr-2"
                  >
                    Other(specify)
                  </Typography>
                }
              />
              <input
                type="text"
                id="password"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div class="mb-6">
        <div className="flex flex-row mt-3">
          <Typography className="font-semibold text-left mt-3">
            Ministerial Credentials:{" "}
          </Typography>
          <div className="flex gap-3">
            <Radio
              id="ripple-on"
              name="type"
              label="Yes"
              onClick={() =>setOpenMinisterial(true)}
            />
            <Radio
              id="ripple-off"
              name="type"
              label="No"
              onClick={() => setOpenMinisterial(false)}
            />
          </div>
        </div>
        <Collapse open={openMinsterial}>
          <Card className="my-4 mx-auto w-8/12">
            <CardBody>
          <div className="mb-3">
          <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Organization
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                required
              />
          </div>
          <div className="mb-3">
          <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Country
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                required
              />
          </div>
          <div className="mb-3">
          <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               District
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                required
              />
          </div>
          <div className="mb-3">
          <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Cridential Level
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                required
              />
          </div>
          <div className="mb-3">
          <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Date Obtained
              </label>
              <input
                type="date"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                required
              />
          </div>
            </CardBody>
          </Card>
        </Collapse>
        </div>
        <div class="mb-6">
          <Typography className="text-left font-semibold">
            How did you hear about us
          </Typography>
          <div className="flex flex-col gap-2">
            <Radio
              id="terms-html"
              name="terms"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Church/Pastor
                </Typography>
              }
            />
            <Radio
              id="terms-react"
              name="terms"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Friend
                </Typography>
              }
            />
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="terms"
                label={
                  <Typography
                    color="blue-gray"
                    className="font-medium flex  mr-2"
                  >
                Internet(specify)
                  </Typography>
                }
              />
              <input
                type="text"
                id="password"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="terms"
                label={
                  <Typography
                    color="blue-gray"
                    className="font-medium flex  mr-2"
                  >
                    Magazine(specify)
                  </Typography>
                }
              />
              <input
                type="text"
                id="password"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="terms"
                label={
                  <Typography
                    color="blue-gray"
                    className="font-medium flex  mr-2"
                  >
                    Other(specify)
                  </Typography>
                }
              />
              <input
                type="text"
                id="password"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            I agree {" "}
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      {/* <p class="mt-5">
        After filling all required fields for personal information, Go next for the References
        <a
          class="text-blue-600 hover:underline"
          href="#"
          target="_blank"
        >
          Acts
        </a>
        .
      </p> */}
    </div>
  );
};

export default ApplicantPersonalInfo;
