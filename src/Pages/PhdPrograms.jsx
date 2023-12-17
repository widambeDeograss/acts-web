import React, { useState, useEffect} from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  List,
  ListItem,
  Spinner,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  CursorArrowRaysIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import QuickLinks from "../components/QuickLinks";
import { useNavigate } from "react-router-dom";
import PageHeroSection from "../components/PageHeroSection";
import { useDataFetch } from "../hooks/DataHook";
import { UserUrls } from "../utils/apis";
import { baseUrl } from "../utils/BaseUrl";

const cost_per_term = [
  {
    no: 1,
    description: "Application fee",
    amount: "75",
  },
  {
    no: 2,
    description: "Tution Fee",
    amount: "800",
  },
  {
    no: 3,
    description: "Course/Seminar Enrollment",
    amount: "35",
  },
  {
    no: 4,
    description: "Technology fee",
    amount: "100",
  },

  {
    no: 6,
    description: "Resident fee (single + Meals and Accomodation)",
    amount: "280",
  },
];

const PhdPrograms = () => {
  const [open, setOpen] = useState(false);
  const [openQualifications, setOpenQualification] = useState(false);
  const [openModeofStudy, setopenModeofStudy] = useState(false);
  const [openPrograms, setopenPrograms] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [PhdFeeStracture, setPhdFeeStracture] = useState([]);
  const [programs, setprograms] = useState([]);
  const fetcher = useDataFetch();
  const navigate = useNavigate();

  const toggleOpen = () => setOpen((cur) => !cur);
  const toggleOpenQualifications = () => setOpenQualification((cur) => !cur);
  const toggleModeOfStudy = () => setopenModeofStudy((cur) => !cur);
  const toogleOpenPrograms = () => setopenPrograms((cur) => !cur);

  const loadData = async () => {
    try {
      setisLoading(true);
      const response = await fetcher.fetch({ url: UserUrls.courses });
  
      if (response) {
        const PhdCourses = response.filter((program) => program?.category === "Phd Course");
        const feePromises = PhdCourses.map(async (course) => {
          const fee_response = await fetcher.fetch({
            url: UserUrls.phdFees + `?id=${course?.id}`,
          });
          return fee_response;
        });
  
        const feeResults = await Promise.all(feePromises);
        setPhdFeeStracture(feeResults);
  
        setprograms(PhdCourses);
        setisLoading(false);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      // Handle error, set isLoading to false or show an error message
      setisLoading(false);
    }
  };
  
  useEffect(() => {
    loadData();
  }, []);
  
  console.log(PhdFeeStracture[0]?.data);
  

  return (
    <div>
      <PageHeroSection title="Phd programs" />
      <div className="mt-3 flex flex-wrap gap-2 justify-around p-2">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full">
          <Button
            onClick={toogleOpenPrograms}
            color={openPrograms ? "blue" : "gray"}
            className="w-full mb-3"
          >
            PHD Program
          </Button>
          <Collapse open={openPrograms}>
            {isLoading ? (
              <div className="flex justify-center">
                <Spinner className="h-8 w-8" />
              </div>
            ) : (
              <Card className="my-4 mx-auto lg:w-ful md:w-full sm:w-full">
                <CardBody>
                <ol className="mt-2 text-xs font-bold">
              {programs?.map(({ id, course }, index) => {
            return (
             
                <li className="flex text-left justify-start mt-2">
                <AcademicCapIcon height={20} className="" />{course}
              </li>
            
            )})}
               
            
              </ol>
                </CardBody>
              </Card>
            )}
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
                  Two terms per year - June and October, also every session
                  takes only one week.
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
            <Card className="my-4 mx-auto lg:w-full md:w-3/4 sm:w-full text-xs">
              <CardBody>
                <Typography className="font-bold">
                  Ph.D. Sessions are conducted through doctoral seminars
                </Typography>
                <ol className="mt-2 font-bold">
                  <li className="flex ">
                    <CursorArrowRaysIcon height={20} className="" /> A
                    born-again Christian
                  </li>
                  <li className="flex">
                    <CursorArrowRaysIcon height={20} className="" /> Filled by
                    the Holy Spirit according to Acts 2:4
                  </li>
                  <li className="flex ">
                    <CursorArrowRaysIcon height={20} className="" /> Call of God
                    and committed to full-time ministry
                  </li>
                  <li className="flex">
                    <CursorArrowRaysIcon height={20} className="" /> Master’s
                    Degree (MA or MDiv)
                  </li>
                  <li className="flex ">
                    <CursorArrowRaysIcon height={20} className="" /> A minimum
                    GPA of 2.5
                  </li>
                  {/* <li className="flex font-semibold">
                  <CursorArrowRaysIcon height={25} className="mt-1" /> Admission
                  starts now up to August 2023. (In two weeks Application
                  package will be available)
                </li> */}
                  {/* <Typography className="font-bold mt-3 text-left">
                Note: On 1st
                  September 2023, prospectus candidates will be meeting with
                  Professors briefly for proposal preparations.
                  Session/
                  Seminar 1, starts on October 2023
              </Typography> */}
                </ol>
              </CardBody>
            </Card>
          </Collapse>
          <Button
            onClick={toggleOpen}
            color={open ? "blue" : "gray"}
            className="w-full mt-3 "
          >
            Cost per term
          </Button>
          <Collapse open={open}>
          {isLoading ? (
              <div className="flex justify-center">
                <Spinner className="h-8 w-8" />
              </div>
            ) : (
            <Card className="my-4 mx-auto  lg:w-full md:w-3/4 sm:w-full">
              {PhdFeeStracture?.map((fee) => 
                <CardBody >
                <Typography className="font-bold text-xs text-left">
                  {fee.course?.course}
                </Typography>
                <Typography className="font-bold text-xs">
                  Cost per term is as follows
                </Typography>
                <table className="w-full  overflow-x-scroll table-auto">
                  <thead>
                    <tr>
                      {["No", "Description", "Amount in Usd"].map((el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3  "
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fee?.data?.map(({ id, description, amount }, key) => {
                      const className = `py-3  ${
                        key === cost_per_term.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={id}>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {key+1}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                              {description}
                            </Typography>
                          </td>

                          <td className={className}>
                            <Typography
                              variant="small"
                              className="mb-1  text-xs font-medium text-blue-gray-600"
                            >
                              {amount}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td className="border-b border-blue-gray-50"></td>
                      <td className="border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="mb-1  text-base font-bold text-blue-gray-600"
                        >
                          TOTAL
                        </Typography>
                      </td>
                      <td className="border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="mb-1 text-base font-bold text-blue-gray-600"
                        >
                          {fee?.total}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>

              
              </CardBody>
               )
              }

            <div className="px-3">
            <Typography className="font-bold mt-3 text-left">
                  Payment must be made to: EQUITY BANK
                </Typography>
                <Typography className="font-bold  text-left">
                  A/C NAME: TAG AFRICAN CONTINENTAL THEOLOGICAL SEMINARY
                </Typography>
                <Typography className="font-bold  text-left">
                  A/C NUMBER: 3009211642182
                </Typography>
            </div>
              
            </Card>
            )}
          </Collapse>
        </div>

        <div className="flex flex-col gap-2 ">
          <QuickLinks />
          <div>
            <Button
              className="flex text-sm bg-gray-500"
              onClick={() => navigate("/admission/acts_online_application")}
            >
              Apply now{" "}
              <ArrowRightIcon height={20} className="-mt-[0.5px] ml-2 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhdPrograms;
