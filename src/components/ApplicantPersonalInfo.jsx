import React, { useState, useRef } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Radio,
} from "@material-tailwind/react";
import swal from "sweetalert";

const ApplicantPersonalInfo = () => {
  const [open, setOpen] = useState(false);
  const [openMinsterial, setOpenMinisterial] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const errors = {};

    // formData.forEach((value, name) => {
    //   if (!value) {
    //     errors[name] = `${name} is required`;
    //   }
    // });
   
    let applicant_personal_details = {};

    if (Object.keys(errors).length > 0) {
      // Handle errors here or set them in your state, depending on your design
      console.log(errors);
    } else {
      // Handle form submission
      for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
        if (name === 'passprt') {
          const reader = new FileReader();
          reader.onload = () => {
            const base64Image = reader.result;
    
            // Save Base64 image data to Local Storage
            applicant_personal_details[`passprt`] = base64Image;
          };
          reader.readAsDataURL(value);
        }
        applicant_personal_details[`${name}`] = value;
      }

      console.log(applicant_personal_details);
      localStorage.setItem('applicant_personal_details', JSON.stringify(applicant_personal_details))
      swal({  
        title: "",  
        text: "Application details added succesfully proceed NEXT!",  
        icon: "success",  
        button: "OK",  
      });
      window.location.reload()
    
    }
  };
 
  return (
    <div class="  ">
      <Typography className="font-bold text-left mt-28 sm:mt-1">
        PERSONAL INFORMATION{" "}
      </Typography>
      <form onSubmit={handleSubmit} ref={formRef} >
        <div className="flex flex-row mt-3">
          <Typography className="font-semibold text-left mt-3">
            Previous studies with Global University:{" "}
          </Typography>
          <div className="flex gap-3">
            <Radio
              id="ripple"
              name="ripple"
              label="Yes"
              onClick={() => setOpen(true)}
            />
            <Radio
              id="ripple"
              name="ripple"
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
                name="global_university_student_no"
                required = {open}
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
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name="last_name"
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
              id="maiden_name"
              name="maiden_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              
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
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name="first_name"
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
              id="middle_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name="middle_name"
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
              id="date_of_birth"
              name="date_of_birth"
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
              id="passprt"
              name="passprt"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              accept="image/png, image/gif, image/jpeg"
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
              <Radio id="Mr" name="Title" value="Mr" label="Mr"  onClick={() => {}} />
              <Radio
                id="Ms"
                name="Title"
                label="Ms"
                value="Ms" 
                onClick={() => {}}
              />
              <Radio
                id="Mrs"
                name="Title"
                label="Mrs"
                value="Mrs" 
                onClick={() => {}}
              />
              <Radio
                id="Rev"
                name="Title"
                label="Rev"
                value="Rev" 
                onClick={() => {}}
              />
              <Radio
                id="Dr"
                name="Title"
                label="Dr"
                value="Dr" 
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
                id="Male-on"
                name="gender"
                value="Male" 
                label="Male"
                ripple={true}
                onClick={() => {}}
              />
              <Radio
                id="Female"
                name="gender"
                value="Female" 
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
                id="Single"
                name="marital_status"
                value="Single"
                label="Single"
                onClick={() => {}}
              />
              <Radio
                id="Married"
                name="marital_status"
                value="Married" 
                label="Married"
                onClick={() => {}}
              />
              <Radio
                id="Widowed"
                name="marital_status"
                value="Widowed" 
                label="Widowed"
                onClick={() => {}}
              />
              <Radio
                id="Divorced"
                name="marital_status"
                value="Divorced" 
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
              id="home_address"
              name="home_address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="contry_of_residence"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Country of Residence
            </label>
            <input
              type="text"
              id="contry_of_residence"
              name="contry_of_residence"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tanzania"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="contry_of_citizenship"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Conutry of Citizenship
            </label>
            <input
              type="text"
              id="contry_of_citizenship"
              name="contry_of_citizenship"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tanzania"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="primary_language"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primary Language
            </label>
            <input
              type="text"
              id="primary_language"
              name="primary_language"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="English"
              required
            />
          </div>
          <div>
            <label
              for="primary_phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primary phone
            </label>
            <input
              type="tel"
              id="primary_phone"
              name="primary_phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0xxx xxx xxx"
              pattern="[0-9]{4} [0-9]{3} [0-9]{3}"
              required
            />
          </div>
        </div>
        <div class="grid gap-6 mb-6 lg:grid-cols-2 w-full">
          <div>
            <label
              for="present_occcupation"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Present Occupation
            </label>
            <input
              type="text"
              id="present_occcupation"
              name="present_occcupation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="other_phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Other Phone
            </label>
            <input
              type="tel"
              id="other_phone"
              name="other_phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0xxx xxx xxx"
              pattern="[0-9]{4} [0-9]{3} [0-9]{3}"
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
              name="primary_rerigious_affiliation"
              value="Assemblies of God"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Assemblies of God
                </Typography>
              }
            />
            <Radio
              id="terms-react"
              name="primary_rerigious_affiliation"
              value="Other Pentecostal"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Other Pentecostal
                </Typography>
              }
            />
            <Radio
              id="terms-react"
              name="primary_rerigious_affiliation"
              value="Other Protestant"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Other Protestant
                </Typography>
              }
            />
            <Radio
              id="terms-react"
              name="primary_rerigious_affiliation"
              value="Roman Catholic"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Roman Catholic
                </Typography>
              }
            />
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="primary_rerigious_affiliation"
                value="Other"
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
                name="other_primary_rerigious_affiliation"
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
                name="ministerial_organization"
                required={openMinsterial}
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
                name="ministerial_country"
                required={openMinsterial}
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
                name="ministerial_district"
                required={openMinsterial}
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
                name="ministerial_credential_level"
                required={openMinsterial}
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
                name="ministerial_date_obtained"
                required={openMinsterial}
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
              name="how_hear_about_us"
              value="Friend"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  Friend
                </Typography>
              }
            />
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="how_hear_about_us"
                value="Internet"
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
                name="how_hear_about_us_internet"
              />
            </div>
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="how_hear_about_us"
                value="Magazine"
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
                name="how_hear_about_us_magazine"
              />
            </div>
            <div className="flex flex-wrap">
              <Radio
                id="terms-react"
                name="how_hear_about_us"
                value="other"
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
                name="how_hear_about_us_other"
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
