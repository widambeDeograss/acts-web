import React, { useState, useEffect } from "react";
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
import { useDataFetch } from "../hooks/DataHook";
import { UserUrls } from "../utils/apis";
import { baseUrl } from "../utils/BaseUrl";
import { data } from "autoprefixer";

const MastersPrograms = () => {
  const [open, setOpen] = useState(false);
  const [openModeofStudy, setopenModeofStudy] = useState(false);

  const [noResidential, setnoResidential] = useState([]);
  const [Residential, setResidential] = useState([]);
  const [openPrograms, setopenPrograms] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [programs, setprograms] = useState([]);
  const fetcher = useDataFetch();

  const toggleOpen = () => setOpen((cur) => !cur);
  const toggleModeOfStudy = () => setopenModeofStudy((cur) => !cur);
  const toogleOpenPrograms = () => setopenPrograms((cur) => !cur);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.courses });
    setisLoading(true);
    const nreindt = await fetcher.fetch({
      url: UserUrls.mastersFees + `?type=NON_RESIDENTIAL`,
    });
    const residential = await fetcher.fetch({
      url: UserUrls.mastersFees + `?type=RESIDENTIAL`,
    });
    console.log(response);
    if (response) {
      const MastersPrograms = response?.filter((program) => program?.category === "Masters Course")
      setprograms(MastersPrograms);
      setnoResidential(nreindt);
      setResidential(residential);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

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
        {isLoading ? (
              <div className="flex justify-center">
              <div className="max-w-full animate-pulse">
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-3 w-96 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w- rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w- rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w- rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w- rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
              </div>
            ) : (
          <Card className="my-4 mx-auto lg:w-ful md:w-full sm:w-full">
            <CardBody>
              <Typography className="font-bold">
                We offer the following Masters programs
              </Typography>
              <ol className="mt-2 text-sm font-bold">
              {programs?.map(({ id, course }, index) => {
            return (
             
                <li className="flex ">
                <AcademicCapIcon height={20} className="" />{course}
              </li>
            
            )})}
               
            
              </ol>
            </CardBody>
          </Card>
            )}
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
                  {Residential.data?.map(
                   ({ id, description,units,price_per_unit ,total_price }, key) => {
                      const className = `py-3  ${
                        key === Residential?.data?.length - 1
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
                            {total_price}
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
                             {Residential?.total}
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
                  {noResidential?.data?.map(
                    ({ id, description,units,price_per_unit ,total_price }, key) => {
                      const className = `py-3  ${
                        key === ResidentialPaymentData.length - 1
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
                              {total_price}
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
                              {noResidential?.total}
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
          <Button className="flex text-sm bg-gray-500"
          onClick={() => navigate("/admission/acts_online_application")}>
            Apply now <ArrowRightIcon height={20} className="-mt-[0.5px] ml-2 " />
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MastersPrograms;
