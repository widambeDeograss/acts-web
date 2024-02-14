import React from 'react';
import { Typography } from '@material-tailwind/react';
import {

    LinkIcon,

  } from "@heroicons/react/24/outline";
  import colors from '../constants/colors';
import {useNavigate} from "react-router-dom";

function QuickLinks() {
    const navigate = useNavigate()
  return (
    <div
          style={{
            backgroundColor: colors.primary,
            color: "white",
            padding: "60px",
            width:"100%"
          }}
        >
          <div className="flex flex-row text-centre justify-center ">
            <LinkIcon height={30} className="-mt-2  mr-3" />
            <Typography variant="h5" className="text-sm">
              {" "}
              <strong>Quick Links </strong>
            </Typography>
          </div>

          <div className="flex flex-col gap-5 text-left mt-10">

       

            <a
               href="https://my.globaluniversity.edu/?"
              style={{ textDecoration: "none", color: "white" }}
              className='text-xs'
            >
              Masters students Portal{" "}
            </a>
              <hr/>
              <a

                  href="/acts/contact_us"
                  style={{ textDecoration: "none", color: "white" }}
                  className='text-xs'

              >
                  Contact us
              </a>
           
              <hr/>
              <a
              href='/acts/allEvents'
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => navigate("/acts/allEvents")}
              className='text-xs'
            >
              All ACTS events 
            </a>

            <hr />
              <a
                  href="/admission/acts_online_application"
                  style={{ textDecoration: "none", color: "white" }}
                  className='text-xs'
              >
                  Apply online
              </a>
          </div>
        </div>

  )
}

export default QuickLinks
