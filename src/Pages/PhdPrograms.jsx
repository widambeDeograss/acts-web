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

const PhdPrograms = () => {
  const [open, setOpen] = useState(false);
  const [openQualifications, setOpenQualification] = useState(false);
  const [openModeofStudy, setopenModeofStudy] = useState(false);
  const [openPrograms, setopenPrograms] = useState(false);
  const navigate = useNavigate();
   
  const toggleOpen = () => setOpen((cur) => !cur);
  const toggleOpenQualifications = () => setOpenQualification((cur) => !cur);
  const toggleModeOfStudy = () => setopenModeofStudy((cur) => !cur);
  const toogleOpenPrograms = () => setopenPrograms((cur) => !cur);


  return (
    <div>

        <PageHeroSection title="Phd programs"/>
    <div className="mt-3 flex flex-wrap gap-2 justify-between p-10">
      <div className="lg:w-1/2 md:w-3/4 sm:w-full">
        <Button
          onClick={toogleOpenPrograms}
          color={openPrograms ? "blue" : "gray"}
          className="w-full mb-3"
        >
          PHD Program
        </Button>
        <Collapse open={openPrograms}>
          <Card className="my-4 mx-auto lg:w-ful md:w-3/4 sm:w-full">
            <CardBody>
              <Typography className="font-bold">
                ACTS in collaboration with TRINITY BIBLE COLLEGE AND GRADUATE
                SCHOOL - North Dakota, USA, presents to you a 4-year program for
                a Ph.D. in Practical Theology (research-based).
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
        <Button
          onClick={toggleModeOfStudy}
          color={openModeofStudy ? "blue" : "gray"}
          className="w-full"
        >
          Mode of study
        </Button>
        <Collapse open={openModeofStudy}>
          <Card className="my-4 mx-auto lg:w-full md:w-3/4 sm:w-full">
            <CardBody>
              <Typography className="font-bold">
                Ph.D. Sessions are conducted through doctoral seminars
              </Typography>
              <Typography className="font-normal text-left">
                Two terms per year - June and October, also every session takes
                only one week.
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
        <Button
          onClick={toggleOpenQualifications}
          color={openQualifications ? "blue" : "gray"}
          className="w-full mt-3"
        >
          Qualifications
        </Button>
        <Collapse open={openQualifications}>
          <Card className="my-4 mx-auto lg:w-full md:w-3/4 sm:w-full">
            <CardBody>
              <Typography className="font-bold">
                Ph.D. Sessions are conducted through doctoral seminars
              </Typography>
              <ol className="mt-2">
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> A
                  born-again Christian
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> Filled by
                  the Holy Spirit according to Acts 2:4
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> Call of God
                  and committed to full-time ministry
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> Master’s
                  Degree (MA or MDiv)
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> A minimum
                  GPA of 2.5
                </li>
                <li className="flex font-semibold">
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
          Cost per term
        </Button>
        <Collapse open={open}>
          <Card className="my-4 mx-auto  lg:w-full md:w-3/4 sm:w-full">
            <CardBody>
              <Typography className="font-bold">
                Cost per term is as follows
              </Typography>
              <ol className="mt-2">
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> 
                  1. Application fee - $75 (paid once)
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> 
                  2. Tuition fee - $800

                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> 
                  3. Course/Seminar Enrollment - $ 35
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> 
                  4. Library fee - $85

                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> 
                  5. Technology fee - $ 100
                </li>
                <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={20} className="mt-1" /> 
                  6. Resident fee (single room + meals and other services) - $ 280
                </li>
              </ol>

              <Typography className="font-bold mt-3 text-left">
              TOTAL COSTS = $1,300 per term
              </Typography>

              <Typography className="font-bold mt-3 text-left">
                Payment must be made to: EQUITY BANK
              </Typography>
              <Typography className="font-bold  text-left">
                A/C NAME: TAG AFRICAN CONTINENTAL THEOLOGICAL SEMINARY
              </Typography>
              <Typography className="font-bold  text-left">
                A/C NUMBER: 3009211642182
              </Typography>

        
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div className="flex flex-col gap-2 ">
        <QuickLinks />
        <div>
          <Button className="flex text-base"
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

export default PhdPrograms;
