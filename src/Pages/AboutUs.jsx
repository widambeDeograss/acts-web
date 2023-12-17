import React, {useState, useEffect} from "react";
import { Spinner, Typography } from "@material-tailwind/react";
import pe7 from "../assets/img/DJI_0973.jpeg";
import pe8 from "../assets/img/DJI_0974.jpeg";
import pe9 from "../assets/img/DJI_0981-min.JPG";
import { useDataFetch } from "../hooks/DataHook";
import { UserUrls } from "../utils/apis";


function AboutUs() {
    const fetcher = useDataFetch();
    const [blogs, setBlogs] = useState();
  
    const [sitedata, setsitedata] = useState(null);
    const [isLoading, setisLoading] = useState(false);
  
    const loadData = async () => {
      setisLoading(true);
      const response = await fetcher.fetch({ url: UserUrls.Events });
      const siteresponse = await fetcher.fetch({ url: UserUrls.siteInfo });
      console.log(response);
      if (response) {
        setBlogs(response?.reverse());
        setsitedata(siteresponse)
        setisLoading(false);
      }
    };
    useEffect(() => {
      loadData();
    }, []);
    return (
        <div>
            <div className="relative h-64 w-11/12 mx-auto rounded-lg mt-5 overflow-hidden">
                <img src={pe8} alt="image 1" className="h-auto w-full object-cover " />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h4"
                            color="white"
                            className=" mt-4 mb-4 text-lg md:text-base lg:text-xl"
                        >
                            About ACTS
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80 text-base"
                        >
                           {sitedata?.message_from_president}
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-row  mt-10  mb-10 w-10/12 gap-1 mx-auto">
                <div className=" lg:mr-16 sm:w-full md:w-full lg:w-1/2 sm:mr-0">
                    <Typography variant="h4" className="mb-1 font-semibold text-left">
                        ACTS' HISTORY
                    </Typography>
                    {isLoading? <div className="flex justify-center"><Spinner className="h-8 w-8"/></div>:
                    <Typography
                    variant="h7"
                    className="mb-2 font-normal text-left leading-normal"
                >
                    {sitedata?.historical_background}
                    {/* This seminary started as a Unit of Postgraduate Studies at the
                    Assemblies of God Central Bible College – CBC. It was launched in
                    October 27, 2007 by the former Archbishop of that period Rev. Dr.
                    Ranwell Mwanisongole; in a special inauguration ceremony held at the
                    Tanzania Assemblies of God Bible College (AGBC). */}
                </Typography>
                    }
                    {/* <Typography
                        variant="h7"
                        className="mb-2 font-normal text-left leading-normal"
                    >
                        This unit was established under the leadership and administration of
                        East Africa Graduate Studies (EAGS), Nairobi, and operated under the
                        umbrella of EAGS Nairobi. From the year 2013 to 2019 and from 2019
                        until now, there have been major changes in the Postgraduate
                        Training Unit of the Assemblies of God Bible College Dodoma (AGBC).
                        From 2013 to 2019, this Unit was no longer under the East Africa
                        Graduate school (EAGS) of Nairobi, but was made an independent unit,
                        communicating with Global University USA directly.
                    </Typography>
                    <Typography
                        variant="h7"
                        className="mb-2 font-normal text-left leading-normal"
                    >
                        In 2020, Archbishop Dr. Barnabas Mtokambali inaugurated the Seminary
                        of the Tanzanian Assemblies of God church that will serve not only
                        Tanzania but the entire continent of Africa. It is called “AFRICA’S
                        CONTINENTAL THEOLOGICAL SEMINARY.”
                    </Typography> */}
                </div>
                <div className="mt-5  overflow-hidden lg:w-[43%] md:w-10/12 sm:w-full">
                    <img
                        src={pe9}
                        alt="image 1"
                        className="h-full w-full object-cover rounded-xl "
                    />
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
