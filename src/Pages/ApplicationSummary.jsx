import React, {useState} from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button, Typography } from "@material-tailwind/react";
import ApplicationPdf from "../components/ApplicationPdf";
import { useFormPost } from "../hooks/FormDataHoook";
import { UserUrls } from "../utils/apis";
import swal from 'sweetalert'; 
import { useNavigate } from "react-router-dom";

const ApplicationSummary = () => {
  const [isloading, setisloading] = useState(false);
  const formPost = useFormPost()
  const navigate = useNavigate()
  const applicant_personal_details = JSON.parse(
    localStorage.getItem("applicant_personal_details")
  );
  const referee_pastors_list = JSON.parse(localStorage.getItem("referee_pastors_list"));
  const referee_employers_list = JSON.parse(localStorage.getItem("referee_employers_list"));
  const applicant_education_data = JSON.parse(localStorage.getItem(
    "applicant_education_data"
  ));

  const handleSubmitApplication =async (doc) => {
    setisloading(true)
    const formData = new FormData();
    formData.append("document", doc, "document.pdf");
    formData.append("first_name", applicant_personal_details.first_name);
    formData.append("last_name", applicant_personal_details.last_name);
    formData.append("email", applicant_personal_details.email);
    formData.append("program", applicant_education_data.take_masters? "Masters Program": "Phd Program");
    formData.append("course", applicant_education_data.take_masters? applicant_education_data.marsters_course: "Phd Program" );
    formData.append("phone", applicant_personal_details.primary_phone);

    console.log(formData);
    try {
      const responce =await formPost.post({
        url:UserUrls.Application,
        data:formData
      
      })
      console.log(responce);
      if (responce.save == true) {
          localStorage.clear()
          swal({  
            title: "Success",  
            text: "Conglaturations your Application was sent succesfully!",  
            icon: "success",  
            button: "OK", 
            confirmButtonClass: "danger",  
            confirmButtonText: "Confirm, remove it!",  
            closeOnConfirm: false  
          }
          ).then( async (ok) => {
            if (ok) {
              window.location.reload()
            } else {
              return
            }
     
        })
          
          // navigate("/admission/acts_online_application")
      }
    } catch (error) {
      swal({  
        title: "Warning",  
        text: "some issues found when sending your application. Check your internet connection and try again! We have stored the state of your application you wont have to fill the form again!",  
        icon: "warning",  
        button: "OK",  
      });
    }
    setisloading(false)
  }


  return (
    <div>
      <div className="App">
        
        {/* <ApplicationPdf />
         */}
        <div className="mt-4">
          <Typography className="font-bold mb-4">
            APPLICATION DETAILS: Personal Information
          </Typography>
          <div className="text-left text-sm">
            <Typography className=" ">
              Previous study with Global university:{" "}
              {applicant_personal_details.global_university_student_no
                ? "Yes"
                : "No"}
            </Typography>
            <Typography className=" ">
              student No. (Former Global university students):{" "}
              {applicant_personal_details.global_university_student_no}
            </Typography>
            <Typography className=" ">
              Applicant Family/last name: {applicant_personal_details.last_name}
            </Typography>
            <Typography className=" ">
              Maiden name: {applicant_personal_details.maiden_name}
            </Typography>
            <Typography className=" ">
              First name: {applicant_personal_details.first_name}
            </Typography>
            <Typography className=" ">
              Middle name: {applicant_personal_details.maiden_name}
            </Typography>
            <Typography className=" ">
              Date of Birth: {applicant_personal_details.date_of_birth}
            </Typography>
            <Typography className=" ">
              Tittle: {applicant_personal_details.Title}
            </Typography>
            <Typography className=" ">
              Marital status: {applicant_personal_details.marital_status}
            </Typography>
            <Typography className=" ">
              Gender: {applicant_personal_details.gender}
            </Typography>
            <Typography className=" ">
              Home address: {applicant_personal_details.home_address}
            </Typography>
            <Typography className=" ">
              Country of residence:{" "}
              {applicant_personal_details.contry_of_residence}
            </Typography>
            <Typography className=" ">
              Country of citizenship:{" "}
              {applicant_personal_details.contry_of_citizenship}
            </Typography>
            <Typography className=" ">
              Email address: {applicant_personal_details.email}
            </Typography>
            <Typography className=" ">
              Primary Language spoken:{" "}
              {applicant_personal_details.primary_language}
            </Typography>
            <Typography className=" ">
              Primary Phone: {applicant_personal_details.primary_phone}
            </Typography>
            <Typography className=" ">
              Present Occupation:{" "}
              {applicant_personal_details.present_occcupation}
            </Typography>
            <Typography className=" ">
              Other Phone: {applicant_personal_details.other_phone}
            </Typography>
          </div>
        </div>

        <div className="text-sm mt-4 ">
          <Typography>
            How did you hear about us:{" "}
            {applicant_personal_details.how_hear_about_us}
          </Typography>
          <Typography>
            Internet: {applicant_personal_details.how_hear_about_us_internet}
          </Typography>
          <Typography>
            Magazine: {applicant_personal_details.how_hear_about_us_magazine}
          </Typography>
          <Typography>
            Other: {applicant_personal_details.how_hear_about_us_other}
          </Typography>
          <Typography className="mt-4">
            Primary Religious Affiliation:{" "}
            {applicant_personal_details.primary_rerigious_affiliation}
          </Typography>
          <Typography className="">
            Other Primary Religious Affiliation:{" "}
            {applicant_personal_details.other_primary_rerigious_affiliation}
          </Typography>
        </div>

        <div className="mt-4 text-sm">
          <Typography className="font-bold">
            Ministerial cridentials :{" "}
            {applicant_personal_details.ministerial_organization ? "Yes" : "No"}
          </Typography>
          {applicant_personal_details.ministerial_organization && (
            <div>
              <Typography className="mt-1">
                Organization:{" "}
                {applicant_personal_details.ministerial_organization}
              </Typography>
              <Typography>
                District: {applicant_personal_details.ministerial_organization}
              </Typography>
              <Typography>
                Cridential level:{" "}
                {applicant_personal_details.how_hear_about_us_magazine}
              </Typography>
              <Typography>
                Other Primary Date obtained:{" "}
                {applicant_personal_details.how_hear_about_us_other}
              </Typography>
              <Typography>
                Other Primary Country:{" "}
                {applicant_personal_details.how_hear_about_us_other}
              </Typography>
            </div>
          )}
        </div>
        <div>
          <Typography className="font-bold mt-6 mb-1">
            APPLICATION DETAILS: References
          </Typography>
          <Typography className="text-xs ">
            List of nam as and addresses of your pastor and educator or employer
          </Typography>
          <table className="w-full  overflow-x-scroll table-auto mt-8">
            <thead>
              <tr>
                {["Pastors Name", "Address", "Phone"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3  ">
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {referee_pastors_list.map(({ name, address, phone }, key) => {
                const className = `py-3  ${key === referee_pastors_list.length - 1
                  ? ""
                  : "border-b border-blue-gray-50"
                  }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                        {address}
                      </Typography>
                    </td>

                    <td className={className}>
                      <Typography
                        variant="small"
                        className="mb-1  text-xs font-medium text-blue-gray-600"
                      >
                        {phone}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="w-full  overflow-x-hidden table-auto mt-8">
            <thead>
              <tr>
                {["Educator|Employer name", "Address", "Phone"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3  ">
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {referee_employers_list.map(({ name, address, phone }, key) => {
                const className = `py-3  ${key === referee_employers_list.length - 1
                  ? ""
                  : "border-b border-blue-gray-50"
                  }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                        {address}
                      </Typography>
                    </td>

                    <td className={className}>
                      <Typography
                        variant="small"
                        className="mb-1  text-xs text-center text-blue-gray-600"
                      >
                        {phone}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <Typography className="font-bold mt-6 mb-1">
            APPLICATION DETAILS: Academic Information
          </Typography>
          <Typography className="text-xs ">
            An official transcript is required from each school where degree work was done after Grade 12
          </Typography>
          <table className="w-full  overflow-x-scroll table-auto mt-8">
            <thead>
              <tr>
                {[
                  "School Name",
                  "City/state/country",
                  "Dates attended",
                  "Major",
                  "Degrees",
                ].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3  ">
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{applicant_education_data.educatorsList?.map(({ name, city, dates, major, Degrees }, key) => {
              
                const className = `py-3  ${key === applicant_education_data.educatorsList?.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                  }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                        {city}
                      </Typography>
                    </td>

                    <td className={className}>
                      <Typography
                        variant="small"
                        className="mb-1  text-xs font-medium text-blue-gray-600"
                      >
                        {dates}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        className="mb-1  text-xs font-medium text-blue-gray-600"
                      >
                        {major}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        className="mb-1  text-xs font-medium text-blue-gray-600"
                      >
                        {Degrees}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-left">
          <Typography className="font-bold mb-4  ">
            APPLICATION DETAILS: Program of study
          </Typography>
          <Typography className="">
           Program of study:{applicant_education_data.take_masters? "Masters Program": "Phd Program"}
          </Typography>
          <Typography className="font-bold mb-4">
           Masters Program: {applicant_education_data.take_masters && (
            <div>
              {applicant_education_data.marsters_course}
            </div>
           )}
          </Typography>
          <Typography className="">
          Mode of study you want to use: {applicant_education_data.residetial_student? "Residential": "Non Residential"}
          </Typography>
         
          </div>
          <br />
          <br />
          <PDFDownloadLink document={<ApplicationPdf />} filename="doc">
          {({ blob, url, loading, error  }) =>
            loading ? (
              <Button>Loading Document...</Button>
            ) : (
              <Button
               onClick={() => handleSubmitApplication(blob)}
              >
                {isloading? "Sending application...": "Download and send Application"}
                 </Button>
            )
          }
        </PDFDownloadLink>
       
      </div>
    </div>
  );
};

export default ApplicationSummary;
