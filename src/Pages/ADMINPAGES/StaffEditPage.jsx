import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useFormPost } from "../../hooks/FormDataHoook";
import { UserUrls } from "../../utils/apis";
import swal from "sweetalert";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const StaffEditPage = () => {
    const [isLoading, setisLoading] = useState(false);
    const formPost = useFormPost();
    const formRef = useRef(null);
    const params = useParams();
    const navigate = useNavigate();
  const {state} =useLocation()
  console.log(state);
  
  
    const handleConfirm =async (e) => {
      e.preventDefault();
      setisLoading(true);
  
      const formData = new FormData(formRef.current);
      formData.append("id",  `${params?.id}`);
      const errors = {};
     try {
      const responce =await formPost.post({
        url:UserUrls.staffDelete,
        data:formData
      })
      setisLoading(true);
      if (responce?.update) {
        swal({  
          title: "Success",  
          text: "Staff Edited Successfully!",  
          icon: "success",  
          button: "OK", 
          confirmButtonClass: "danger",  
          confirmButtonText: "Confirm, remove it!",  
          closeOnConfirm: false  
        }
        ).then( async (ok) => {
          if (ok) {
            navigate("/acts/admin/staff");
          } else {
            return
          }
   
      }
        )
    }
     } catch (error) {
      setisLoading(true);
      console.log(error);
     }
     
      // dispatch(hideModal());
    };
  return (
    <Card>
           <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-2 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h6" color="blue-gray" className="text-left">
              {state?.staff}: Edit details
            </Typography>
         
          </div>
         
        </div>
      </CardHeader>
        <CardBody>
        <form onSubmit={handleConfirm} ref={formRef} >
        <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left mt-5"
            >
              Staff Name
            </label>
            <input
              type="text"
              id="last_name"
              defaultValue={state?.staff}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name="full_name"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300  text-left mt-5"
            >
              Staff Titles
            </label>
            <input
              type="text"
              id="last_name"
              defaultValue={state?.tittle}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name="titles"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left mt-5"
            >
              Image
            </label>
            <input
              type="file"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name="image"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left mt-5"
            >
              Staff Education
            </label>
            <textarea
              type="text"
              id="last_name"
              defaultValue={state?.edu}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
              placeholder=""
              name="education"
              required
            />
          </div>
          
          <Button variant="gradient" onClick={handleConfirm} type="submit">
            <span>{isLoading?"Editing Staff...":"Edit staff"}</span>
          </Button>
        </form>
        </CardBody>
    </Card>
  )
}

export default StaffEditPage