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
            <LinkIcon height={40} className="-mt-2  mr-3" />
            <Typography variant="h5">
              {" "}
              <strong>Quick Links </strong>
            </Typography>
          </div>

          <div className="flex flex-col gap-5 text-left mt-10">

            <a
              href="https://www.trinitybiblecollege.edu/ph-d-application"
              style={{ textDecoration: "none", color: "white" }}
            >
              Application Form for Doctrate students{" "}
            </a>

            <hr />

            <a
             
              style={{ textDecoration: "none", color: "white" }}
            >
              Masters students Portal{" "}
            </a>
              <hr/>
              <a
                  href="/acts/contact_us"
                  style={{ textDecoration: "none", color: "white" }}

              >
                  Contact us
              </a>
           
              <hr/>
              <a
                  href="/admission/acts_online_application"
                  style={{ textDecoration: "none", color: "white" }}

              >
                  Apply online
              </a>
          </div>
        </div>

  )
}

export default QuickLinks
