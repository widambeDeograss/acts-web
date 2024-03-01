import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { showModal, hideModal, selectModal } from "../App/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormPost } from "../hooks/FormDataHoook";
import { UserUrls } from "../utils/apis";
import swal from "sweetalert";

export function AddFeeItemMasters() {
  const dispatch = useDispatch();
  const { showModal: open, modalType } = useSelector(selectModal);
 const [isLoading, setisLoading] = useState(false);
  const formPost = useFormPost();
  const formRef = useRef(null);

  const handleOpen = () => {
    if (open) {
      dispatch(hideModal());
    } else {
      // Assuming "staffsAdd" is the modal type for this modal
      dispatch(showModal("courseAdd"));
    }
  };

  const handleConfirm =async (e) => {
    e.preventDefault();
    setisLoading(true);

    const formData = new FormData(formRef.current);
    const errors = {};
   try {
    const responce =await formPost.post({
      url:UserUrls.mastersFees,
      data:formData
    })
    console.log(responce);
    setisLoading(true);
    if (responce?.save) {
      swal({  
        title: "Success",  
        text: "Conglaturations Fee item was added succesfully!",  
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
    console.log(error);
   }
   
    // dispatch(hideModal());
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Fee Item</DialogHeader>
        <DialogBody>
          <form onSubmit={handleConfirm} ref={formRef} >
            <div>
            <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Choose mode
              </label>
              <select
                id="countries"
                name="type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-purple-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose mode Type</option>

                <option value="NON_RESIDENTIAL" className="py-2">Non Residential</option>

                <option value="RESIDENTIAL" className="py-2">Residential</option>
              </select>
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
            Description
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                placeholder=""
                name="description"
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
            Units
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                placeholder=""
                name="units"
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
            price per unit(USD)
              </label>
              <input
                type="number"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                placeholder=""
                name="price_per_unit"
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
            total price
              </label>
              <input
                type="number"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                placeholder=""
                name="total_price"
                required
              />
            </div>
            <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" onClick={handleConfirm} type="submit" disabled={isLoading}>
            <span>{isLoading?"Adding Item...":"Add Item"}</span>
          </Button>
          </form>
        </DialogBody>
        <DialogFooter>
         
        </DialogFooter>
      </Dialog>
    </>
  );
}
