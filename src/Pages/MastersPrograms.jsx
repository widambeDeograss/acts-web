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
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import QuickLinks from "../components/QuickLinks";
import { useNavigate } from "react-router-dom";
import PageHeroSection from "../components/PageHeroSection";

const MastersPrograms = () => {
  const [open, setOpen] = useState(false);
  const [openModeofStudy, setopenModeofStudy] = useState(false);
  const [openPrograms, setopenPrograms] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => setOpen((cur) => !cur);
  const toggleModeOfStudy = () => setopenModeofStudy((cur) => !cur);
  const toogleOpenPrograms = () => setopenPrograms((cur) => !cur);

  const ResidentialPaymentData = [
    {
      no: 1,
      description: "Borrowing books for 5 courses @50",
      amount: "250",
    },
    {
      no: 2,
      description: "Tution Fee for 5 courses @120",
      amount: "600",
    },
    {
      no: 3,
      description: "Registration 5 courses @15",
      amount: "75",
    },
    {
      no: 3,
      description: "Utilities",
      amount: "200",
    },
  ];
  const Non_ResidentialPaymentData = [
    {
      no: 1,
      description: "Registration fee",
      units:'4 courses',
      price_per_unit:'15',
      amount: "60",
    },
    {
      no: 2,
      description: "Tution Fee ",
      units:'4 courses',
      price_per_unit:'120',
      amount: "480",
    },
    {
      no: 3,
      description: "Books",
      units:'4 courses',
      price_per_unit:'50',
      amount: "200",
    },
    {
      no:4,
      description: "Meals and Accomodation",
      units:'31 days',
      price_per_unit:'25',
      amount: "775",
    },
  ];

  return (
    <div>
    <PageHeroSection title="Masters Programs"/>
    <div className="mt-3 mb-5 flex flex-wrap  justify-around p-1">
      <div className="lg:w-1/2 md:w-3/4 sm:w-full">
        <Button onClick={toogleOpenPrograms} color={openPrograms? "blue":"gray"} className="w-full mb-3">
          Masters Programs
        </Button>
        <Collapse open={openPrograms}>
          <Card className="my-4 mx-auto lg:w-ful md:w-full sm:w-full">
            <CardBody>
              <Typography className="font-bold">
                We offer the following Masters programs
              </Typography>
              <ol className="mt-2 text-sm font-bold">
                <li className="flex ">
                  <AcademicCapIcon height={20} className="" /> Masters of
                  Divinity in Biblical Studies
                </li>
                <li className="flex ">
                  <AcademicCapIcon height={20} className="" /> Masters of
                  Divinity in Ministerial Studies
                </li>
                <li className="flex ">
                  <AcademicCapIcon height={20} className="" /> Masters of
                  Arts in Leadership
                </li>
                <li className="flex ">
                  <AcademicCapIcon height={20} className=" " /> 
                  Masters of
                  Arts in Interlectual Studies(Mission)
                </li>
                <li className="flex ">
                  <AcademicCapIcon height={20} className="" /> Masters of
                  Arts in Education
                </li>
                <li className="flex ">
                  <AcademicCapIcon height={20} className="" /> Masters of
                  Arts in Biblical Studies
                </li>
              </ol>
            </CardBody>
          </Card>
        </Collapse>
        <Button onClick={toggleModeOfStudy} color={openModeofStudy? "blue":"gray"} className="w-full" >
          Mode of study
        </Button>
        <Collapse open={openModeofStudy}>
          <Card className="my-4 mx-auto lg:w-full md:w-3/4 sm:w-full">
            <CardBody>
              <Typography className="font-bold">
                Residential Students
              </Typography>
              <Typography className="font-normal text-left">
                Three terms per year
              </Typography>
              <ol className="mt-2">
                <li className="flex font-semibold">
                  <CalendarDaysIcon height={20} className="mt-1" /> January to
                  March
                </li>
                <li className="flex font-semibold">
                  <CalendarDaysIcon height={20} className="mt-1" /> May to July
                </li>
                <li className="flex font-semibold">
                  <CalendarDaysIcon height={20} className="mt-1" /> September to
                  November
                </li>
              </ol>

              <Typography className="font-bold mt-5">
                Non-Residential Students
              </Typography>
              <Typography className="font-normal text-left">
                Two terms per year
              </Typography>
              <ol className="mt-2">
                <li className="flex font-semibold">
                  <CalendarDaysIcon height={20} className="mt-1" /> April to May
                </li>
                <li className="flex font-semibold">
                  <CalendarDaysIcon height={20} className="mt-1" /> Agust to
                  September
                </li>
              </ol>
              <Typography className="font-bold mt-3 text-left">
                Note: Each term is three weeks long
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
        <Button onClick={toggleOpen} color={open? "blue":"gray"} className="w-full mt-3 mb-4">
          Cost per term
        </Button>
        <Collapse open={open}>
          <Card className="my-4 mx-auto  lg:w-full md:w-3/4 sm:w-full">
            <CardBody>
              <Typography className="font-bold">
               Residential Students
              </Typography>
              <Typography className="font-body text-left">
                There is a sponsorship to all residential students. This
                sponsorship cover the area of meals and accommodation for the
                period of the whole semester
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
                  {ResidentialPaymentData.map(
                    ({ no, description, amount }, key) => {
                      const className = `py-3  ${
                        key === ResidentialPaymentData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={no}>
                          <td className={className}>
                            
                            
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-semibold"
                                >
                                  {no}
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
                    }
                  )}
                  <tr>
                  <td className="border-b border-blue-gray-50">
                           
                          </td>
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
                              1125.00
                            </Typography>
                          </td>
                          
                  </tr>
                </tbody>
              </table>
              <Typography className="font-bold mt-3 text-left">
                Payment must be made to: EQUITY BANK
              </Typography>
              <Typography className="font-bold  text-left">
                A/C NAME: TAG AFRICAN CONTINENTAL THEOLOGICAL SEMINARY
              </Typography>
              <Typography className="font-bold  text-left">
                A/C NUMBER: 3009211642182
              </Typography>

              <Typography className="font-bold mt-5">
                Non-Residential Students
              </Typography>
              <Typography className="font-normal text-left">
              The cost per term is as follows
              </Typography>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    {["No", "Description", "Units(PER SESSION)", "PRICE PER UNIT(USD)", "TOTAL PRICE (USD)"].map((el) => (
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
                  {Non_ResidentialPaymentData.map(
                    ({ no, description,units,price_per_unit ,amount }, key) => {
                      const className = `py-3  ${
                        key === ResidentialPaymentData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={no}>
                          <td className={className}>
                            
                            
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-semibold"
                                >
                                  {no}
                                </Typography>
                           
                           
                          </td>
                          <td className={className}>
                            <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                              {description}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                              {units}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                              {price_per_unit}
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
                    }
                  )}
                  <tr>
                  <td className="border-b border-blue-gray-50">
                           
                          </td>
                  <td className="border-b border-blue-gray-50">
                  <Typography
                              variant="small"
                              className="mb-1  text-base font-bold text-blue-gray-600"
                            >
                             TOTAL
                            </Typography>
                          </td>
                          <td className="border-b border-blue-gray-50">
                           
                          </td>
                          <td className="border-b border-blue-gray-50">
                           
                          </td>
                  <td className="border-b border-blue-gray-50">
                  <Typography
                              variant="small"
                              className="mb-1  text-base font-bold text-blue-gray-600"
                            >
                              1515.00
                            </Typography>
                          </td>
                          
                  </tr>
                </tbody>
              </table>
              <Typography className="font-bold mt-3 text-left">
                Note: For anyone desiring to have his or her own room  the price is $35 per day
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
          onClick={() => navigate("/admission/acts_online_application")}>
            Apply now <ArrowRightIcon height={30} className="-mt-1 ml-2 " />
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MastersPrograms;
