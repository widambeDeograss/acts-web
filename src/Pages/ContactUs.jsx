import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
import { Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useFormPost } from "../hooks/FormDataHoook";
import { UserUrls } from "../utils/apis";
import swal from "sweetalert";

const ContactUs = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [loading, setloading] = useState(false);
  const formPost = useFormPost();

  const handleSubmit =async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const responce =await formPost.post({
        url:UserUrls.userContact,
        data:{
          name:name,
          message:message,
          email:email
        }
        

      })
      console.log(responce);
      if (responce) {
        swal({  
          title: "",  
          text: "Your message was sent succesfully!",  
          icon: "success",  
          button: "OK",  
        });
          setemail(' ');
          setname(' ');
          setmessage(' ');
      }
    } catch (error) {
        alert("some issues found try again later")
    }
    setloading(false);

  }


  return (
    <div>
      <div class="w-full shrink-0 grow-0  basis-auto lg:w-full mt-10">
        <Card className="w-full ">

          <div className="mx-auto text-center max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 ">
                Contact Us
              </h2>
              <p className=" text-base leading-8 text-gray-600 ">
                AFRICA’S CONTINENTAL THEOLOGICAL SEMINARY (ACTS)
              </p>
              <p className=" text-base leading-8 text-gray-600">
                Get in touch:
                +255 787 023747
              </p>
              <p class="text-base leading-8 text-gray-600">
                Box 70 Dodoma, Tanzania
              </p>
              <p class="text-base leading-8 text-gray-600 underline cursor-pointer mb-5">
              info@actseminary.education
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div class="container  mx-auto md:px-6">
        <section class="mb-11 text-center">
          <div class="py-12 md:px-12">
            <div class="container mx-auto xl:px-32">
              <div class="grid items-center lg:grid-cols-2">
                <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]  md:px-12 lg:-mr-14">
                    <h2 class="mb-12 text-xs text-lef font-bold">
                      Send us a message
                    </h2>
                    <form  onSubmit={handleSubmit}>
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-sm text-left font-medium text-gray-900 text-xs"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          placeholder=""
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-xs text-left font-medium text-gray-900 dark:text-gray-300"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          id="first_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          placeholder=""
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-xs text-left font-medium text-gray-900 dark:text-gray-300"
                        >
                          Message
                        </label>
                        <textarea
                          type="text"
                          id="first_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          placeholder=""
                          value={message}
                          onChange={(e) => setmessage(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center text-xs"
                      >
                        {loading ? "Submiting message ..." :"Submit"}
                      </button>
                    </form>
                  </div>
                </div>
                <div class="md:mb-12 lg:mb-0">
                  <div class="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253888.9331992513!2d35.478111725000005!3d-6.128739600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184de59c9d373987%3A0xb5d84a416a25f8be!2sTanzania%20Assemblies%20of%20God%20Head%20Office%20-%20Dodoma!5e0!3m2!1sen!2stz!4v1676538581952!5m2!1sen!2stz"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      class="absolute left-0 top-0 h-full w-full rounded-lg"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
