import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
  
    LinkIcon,
    
  } from "@heroicons/react/24/outline";
  import colors from '../constants/colors';

function QuickLinks() {
  return (
    <div
          style={{
            backgroundColor: colors.primary,
            color: "white",
            padding: "30px",
          }}
        >
          <div className="flex flex-row text-centre justify-center ">
            <LinkIcon height={40} className="-mt-2  mr-3" />
            <Typography variant="h5">
              {" "}
              <strong>Quick Links </strong>
            </Typography>
          </div>

          <div className="flex flex-col gap-5 text-left">
            <a
              href="https://www.pathseminary.org/admission"
              className="mt-5"
              style={{ textDecoration: "none", color: "white" }}
            >
              New students information conserning Tution Fees{" "}
            </a>
            <hr />

            <a
              href="https://www.pathseminary.org/apply"
              style={{ textDecoration: "none", color: "white" }}
            >
              Application Form for Doctrate students{" "}
            </a>

            <hr />

            <a
              href="https://my.globaluniversity.edu/?"
              style={{ textDecoration: "none", color: "white" }}
            >
              Masters students Portal{" "}
            </a>
          </div>
        </div>

  )
}

export default QuickLinks