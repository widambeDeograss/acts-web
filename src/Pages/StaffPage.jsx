import React, { useState, useEffect } from "react";
import { Typography, Collapse, Spinner } from "@material-tailwind/react";
import PageHeroSection from "../components/PageHeroSection";
import { useDataFetch } from "../hooks/DataHook";
import { UserUrls } from "../utils/apis";
import { baseUrl } from "../utils/BaseUrl";


const StaffPage = () => {
  const [openPresident, setopenPresident] = useState(false);
  const [positions, setpositions] = useState([]);
  const [staffs, setstaffs] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [openStates, setOpenStates] = useState([]);
  const fetcher = useDataFetch();

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.administration });
    const staffs = await fetcher.fetch({ url: UserUrls.staff });
    console.log(response);
    if (response) {
      setpositions(response);
      setstaffs(staffs);
      setOpenStates(new Array(staffs?.length).fill(false));
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const toggleCollapse = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div>
      <PageHeroSection title="Our staff" />

      <div className="mt-10 w-10/12 gap-1 mx-auto">
        <Typography variant="h6" className="mb-3 font-semibold text-left">
          SEMINARY ADMINISTRATION
        </Typography>

        {isLoading? <div className="flex justify-center"> <Spinner className="h-8 w-8"/></div>:<div class="grid  sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4 mb-6">
          {positions?.map(
            ({ id, image, staff_name, staff_titles, admin_title }, index) => {
              return (
                <figure className="relative h-64 w-full" key={id}>
                  <img
                    className="h-full w-full rounded-xl object-fill "
                    src={baseUrl + `/${image}`}
                    alt="nature image"
                  />
                  <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-gray-400 bg-[#862F8E]/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm ">
                    <div>
                      <Typography
                        color="gray"
                        className="mt-2 font-normal uppercase text-xs text-left text-white"
                      >
                        {admin_title}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-"
                      >
                        {staff_titles} {staff_name}
                      </Typography>
                    </div>
                    {/* <Typography variant="h5" color="blue-gray">
                                Growth
                              </Typography> */}
                  </figcaption>
                </figure>
              );
            }
          )}
        </div>}
      </div>

      <div className="mt-10 w-10/12 gap-1 mx-auto">
        <Typography variant="h6" className="mb-3 font-semibold text-left">
          SEMINARY FACULTY
        </Typography>

        <div class="grid  sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4 mb-6">
          {staffs?.map(({ id, full_name, titles, image, education }, index) => {
            return (
              <div
                className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105 "
                onClick={() => toggleCollapse(index)}
              style={{ height: openStates[index] ? "100%" : "176px" }}
              key={id}
              >
                <Typography
                  color="gray"
                  className="mt-2  uppercase text-sm text-left  font-bold"
                >
                  {full_name}
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="capitalize text-sm text-left  text-light-blue-500 w-32"
                >
                  {titles}
                </Typography>
                <div
                  className="float-right"
                  onClick={() => setopenPresident(true)}
                >
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
                  >
                    more details
                  </Typography>
                </div>
                <Collapse open={openStates[index]}>
                  <figure className="relative h-64 w-full mt-5">
                    <img
                      className="h-full w-full object-fill "
                      src={baseUrl + `/${image}`}
                      alt="nature image"
                    />
                  </figure>
                  <Typography
                    color="gray"
                    className="mt-2  text-xs text-left  font-bold"
                  >
                    {education}
                  </Typography>
                </Collapse>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
