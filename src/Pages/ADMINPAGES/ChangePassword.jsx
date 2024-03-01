import React, { useState, useRef } from "react";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import Typography from "../../components/adminComponents/Typography";
import { useFormPost } from "../../hooks/FormDataHoook";
import { UserUrls } from "../../utils/apis";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/BaseUrl";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../App/AuthSlice";
import axios from "axios";

const ChangePassword = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const formPost = useFormPost();
  const [isLoading, setisLoading] = useState(false);
  const token = useSelector(selectCurrentToken);

  const handleSubmit = async (event) => {
    setisLoading(true);
    event.preventDefault();
    //for image submission
      const formData = new FormData(formRef.current);
   
      try {
        const response = await axios.put(
          `${baseUrl}/auth/change-password`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );
       
        if (response?.status) {
          
          swal({
            title: "",
            text: "Password changed successfully!",
            icon: "success",
            button: "OK",
          });
        }
      } catch (error) {
        swal({
          title: "",
          text: "Something went wrong try again!",
          icon: "error",
          button: "OK",
        });
      }
      setisLoading(false);
    
  };

  return (
    <Page>
      <PageHeader>
        <Typography variant="h1" className="ml-2">
          Change Password Form
        </Typography>
      </PageHeader>
      <PageBody>
        <div className=" max-h-screen  ">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-lg mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    i
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Change Password</h2>
                  </div>
                </div>
                <div></div>
                <form action="" onSubmit={handleSubmit} ref={formRef}>
                  <div className="flex flex-col">
                    <label className="leading-loose">Old Password</label>
                    <input
                      type="password"
                      required
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="old password"
                      name="old_password"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">New Password</label>
                    <input
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 mb-2"
                      id="formFileSm"
                      type="password"
                      name="new_password"
                      placeholder="new password"
                    />
                  </div>

                  <button
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    type="submit"
                  >
                    {isLoading ? "Changing password....." : "Change Password"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </PageBody>
    </Page>
  );
};

export default ChangePassword;