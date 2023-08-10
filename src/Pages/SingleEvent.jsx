import React from "react";
import QuickLinks from "../components/QuickLinks";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { HiArrowRight } from "react-icons/hi";

const SingleEvent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-xl text-left font-semibold text-gray-800 capitalize lg:text-4xl  hover:underline  dark:text-white">
            From the blog
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-2 md:mt-16 md:grid-cols-2">
            <div class="lg:flex-col ">
              <div class="flex flex-col justify-between py-4">
                <a
                  href="#"
                  class="text-xl font-semibold text-gray-800 "
                >
                  How to use sticky note for problem solving
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 October 2019
                </span>
             
              </div>
              <img
                class="object-cover w-full h-64 rounded-lg lg:w-80"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div
                className="flex fle-row gap-1 font-bold cursor-pointer mt-6"
                onClick={() => navigate("/acts/allEvents")}
              >
                <Typography as="h6" className="font-bold">
                  View other events and news
                </Typography>
                <HiArrowRight height={20} width={30} className="mt-1" />
              </div>
            </div>
            <QuickLinks />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleEvent;
