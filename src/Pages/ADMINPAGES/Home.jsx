import { HiUser } from "react-icons/hi";
import React, { useState, useEffect, useRef } from "react";
import Page from "../../components/adminComponents/Page";
import PageHeader from "../../components/adminComponents/PageHeader";
import { useDataFetch } from "../../hooks/DataHook";
import { useFormPost } from "../../hooks/FormDataHoook";
import { UserUrls } from "../../utils/apis";
import Typography from "../../components/adminComponents/Typography";
import { Card, CardHeader, Button } from "@material-tailwind/react";
import swal from "sweetalert";

export default function AdminHomePage() {
  
  const [optimizationData, setOptimizationData] = React.useState(null);
  const fetcher = useDataFetch();
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(false);
  const formPost = useFormPost();
  const formRef = useRef(null);

  const loadData = async () => {
    // setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.Dashboard });
    const sitedata = await fetcher.fetch({ url: UserUrls.siteInfo });
    
    if (response) {
      setdata(response);
      setOptimizationData(sitedata);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);


  
  const handleConfirm =async (e) => {
    e.preventDefault();
    // setisLoading(true);

    const formData = new FormData(formRef.current);
    const errors = {};
   try {
    const responce =await formPost.post({
      url:UserUrls.siteInfoUpdate + `?id=${optimizationData?.id}`,
      data:formData
    })
    
    setisLoading(true);
    if (responce?.update) {
      swal({  
        title: "Success",  
        text: "Conglaturations Site-info updated succesfully!",  
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
 
    }
      )
  }
   } catch (error) {
    setisLoading(true);
   alert(error);
   }
   
    // dispatch(hideModal());
  };

  return (
    <Card className="w-full h-[100%] bg-white">
      <CardHeader>
        <Typography variant="h1" className="p-10">ACTS Admin home page</Typography>
      </CardHeader>

      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 justify-center p-3  ">
        <div class="container mx-auto pr-4">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-red-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">NO OF APPLICATIONS</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{data?.number_applications}</p>
          </div>
        </div>

        <div class="container mx-auto pr-4">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-blue-500 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">NO OF USERS FEEDBACKS</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{data?.number_contacts}</p>
          </div>
        </div>

        <div class="container mx-auto pr-4">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-purple-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">NO OF EVENTS</p>
            </div>
            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{data?.number_events}</p>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-purple-900 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">NO OF PROGRAMS</p>
            </div>
            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{data?.number_course}</p>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-blue-900 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">
                SEMINARY ADMINISTRATION
              </p>
            </div>
            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{data?.number_admin}</p>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-blue-200 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">SEMINARY STAFF</p>
            </div>
            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{data?.number_staff}</p>
          </div>
        </div>
      </div>
   
      <Card className="mt-10">
      <CardHeader>
        <Typography variant="h1" className="p-4 text-left">ACTS Important site-info</Typography>
      </CardHeader>
      <form  className="px-10 py-5" onSubmit={handleConfirm} ref={formRef}>
      
    
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
        >
          Message from the president
        </label>
        <textarea
          type="text"
          id="last_name"

          defaultValue={optimizationData?.message_from_president}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
          placeholder=""
          name="message_from_president"
          required
        />
      </div>
    
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
        >
          mission
        </label>
        <textarea
          type="text"
          id="last_name"
          defaultValue={optimizationData?.mission}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
          placeholder=""
          name="mission"
          required
        />
      </div>
    
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
        >
          vision
        </label>
        <textarea
          type="text"
          id="last_name"
          defaultValue={optimizationData?.vision}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
          placeholder=""
          name="vision"
          required
        />
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
        >
          historical background
        </label>
        <textarea
          type="text"
          id="last_name"
          defaultValue={optimizationData?.historical_background}
          class="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
          placeholder=""
          name="historical_background"
          required
        />
      </div>

      <Button variant="gradient" onClick={handleConfirm} type="submit">
        
            <span>{isLoading?"Updating site info...":"Update site-info"}</span>
          </Button>
    
    </form>
      </Card>

    </Card>
  );
}
