import React, { useState } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import QuickLinks from "../components/QuickLinks";
import { useNavigate } from "react-router-dom";
import PageHeroSection from "../components/PageHeroSection";

const EntryRequirements = () => {
  const [open, setOpen] = useState(false);
  const [openQualifications, setOpenQualification] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => setOpen((cur) => !cur);
  const toggleOpenQualifications = () => setOpenQualification((cur) => !cur);

  return (
    <div>
      <PageHeroSection title="Entry Requirements" />

      <div className="mt-3 flex flex-wrap gap-2 justify-around p-2">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full">
          <Button
            onClick={toggleOpenQualifications}
            color={openQualifications ? "blue" : "gray"}
            className="w-full mt-3"
          >
            MASTERS PROGRAMS
          </Button>
          <Collapse open={openQualifications}>
            <Card className="my-4 mx-auto lg:w-full md:w-3/4 sm:w-full">
              <CardBody>
                <Typography className="font-bold">
                  Entry requirements for Masters programs
                </Typography>
                <ol className="mt-2 font-bold text-sm">
                  <li className="flex ">
                    <CursorArrowRaysIcon height={20} className="mt-1" /> Born
                    again member of a church
                  </li>
                  <li className="flex ">
                    <CursorArrowRaysIcon height={20} className="mt-1" /> Filled
                    by the Holy Spirit according to Acts 2:4
                  </li>
                  <li className="flex ">
                    <CursorArrowRaysIcon height={20} className="mt-1" /> Call of
                    God and Commitment to Ministry
                  </li>

                  <li className="flex">
                    <CursorArrowRaysIcon height={25} className="mt-1" />
                    Bachelor Degree in Biblical, Theological, Ministerial or
                    other studies from a recognized institution with a minimum
                    GPA of 3.2
                  </li>
                </ol>
              </CardBody>
            </Card>
          </Collapse>
          <Button
            onClick={toggleOpen}
            color={open ? "blue" : "gray"}
            className="w-full mt-3"
          >
            PHD PROGRAMS
          </Button>
          <Collapse open={open}>
            <Card className="my-4 mx-auto  lg:w-full md:w-3/4 sm:w-full">
              <CardBody>
                <Typography className="font-bold">
                  Entry requirements for Phd programs
                </Typography>
                <ol className="mt-2 text-sm">
                  <li className="flex font-semibold">
                    <CursorArrowRaysIcon height={20} className="mt-1" /> A
                    born-again Christian
                  </li>
                  <li className="flex font-semibold">
                    <CursorArrowRaysIcon height={20} className="mt-1" /> Filled
                    by the Holy Spirit according to Acts 2:4
                  </li>
                  <li className="flex font-semibold">
                    <CursorArrowRaysIcon height={20} className="mt-1" /> Call of
                    God and committed to full-time ministry
                  </li>
                  <li className="flex font-semibold">
                    <CursorArrowRaysIcon height={20} className="mt-1" />{" "}
                    Master’s Degree (MA or MDiv)
                  </li>
                  <li className="flex font-semibold">
                    <CursorArrowRaysIcon height={20} className="mt-1" /> A
                    minimum GPA of 2.5
                  </li>
                  {/* <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> Admission
                  starts now up to August 2023. (In two weeks Application
                  package will be available)
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> On 1st
                  September 2023, prospectus candidates will be meeting with
                  Professors briefly for proposal preparations.
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> Session/
                  Seminar 1, starts on October 2023
                </li> */}
                </ol>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <div className="flex flex-col gap-2 ">
          <QuickLinks />
          <div>
            <Button
              className="flex text-base"
              onClick={() => navigate("/admission/acts_online_application")}
            >
              Apply now <ArrowRightIcon height={30} className="-mt-1 ml-2 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryRequirements;
