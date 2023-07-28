import React from "react";
import { Typography } from "@material-tailwind/react";
import pe7 from "../assets/img/DJI_0973.jpeg";
import pe8 from "../assets/img/DJI_0974.jpeg";
import pe9 from "../assets/img/DJI_0981-min.JPG";
import majule from "../assets/img/majule faculty.png";
import majembe from "../assets/img/majembe faculty.png";
import nyanda from "../assets/img/nyanda faculty.png";
import Kibga from "../assets/img/Kibga faculty.jpg";
import nhigula from "../assets/img/nhigula faculty.png";
import vicePresident from "../assets/img/vicePresident.jpg";

const staffData = [
    {
      img: nhigula,
      title: 'Dr. Immaculate Nhigula',
      author: 'Presdent',
    },
    {
      img: vicePresident,
      title: 'REV. DR. JOSEPH KIMEME',
      author: 'Vice President',
    },
    {
      img: majule,
      title: 'REV. DR. GEOFREY P. MAJULE',
      author: 'Dip, BA, M.Div & D.Min',
    },
    {
      img: majembe,
      title: 'REV. DR. PASTORY MAJEMBE',
      author: 'Dip, BA, M.Div, Th. M ',
    },
    {
      img: nyanda,
      title: 'REV. DR. JACKSON NYANDA',
      author: 'Academic Dean & Registar',
    },
    {
      img: Kibga,
      title: 'DR. ELIA Y. KIBGA',
      author: 'Staff',
    },
  ];

function AboutUs() {
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
                            Acts exists to develop God’s ministers who are capable of
                            pioneering indigenous churches with the potential to grow
                            spiritually, numerically, and geographically in the power of the
                            Holy Spirit, thus fulfilling the Great commission
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mt-10 w-10/12 gap-1 mx-auto">
                <div className=" lg:mr-16 sm:w-full md:w-full lg:w-1/2 sm:mr-0">
                    <Typography variant="h4" className="mb-1 font-semibold text-left">
                        ACTS'S HISTORY
                    </Typography>
                    <Typography
                        variant="h7"
                        className="mb-2 font-normal text-left leading-normal"
                    >
                        This seminary started as a Unit of Postgraduate Studies at the
                        Assemblies of God Central Bible College – CBC. It was launched in
                        October 27, 2007 by the former Archbishop of that period Rev. Dr.
                        Ranwell Mwanisongole; in a special inauguration ceremony held at the
                        Tanzania Assemblies of God Bible College (AGBC).
                    </Typography>
                    <Typography
                        variant="h7"
                        className="mb-2 font-normal text-left leading-normal"
                    >
                        This unit was established under the leadership and administration of
                        East Africa Graduate Studies (EAGS), Nairobi, and operated under the
                        umbrella of EAGS Nairobi. From the year 2013 to 2019 and from 2019
                        to until now, there have been major changes in the Postgraduate
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
                    </Typography>
                </div>
                <div className="mt-5  overflow-hidden lg:w-1/3 md:w-10/12 sm:w-full">
                    <img
                        src={pe9}
                        alt="image 1"
                        className="h-96 w-full object-cover rounded-xl "
                    />
                </div>
            </div>

            <div className="mt-10 w-10/12 gap-1 mx-auto">
                <Typography variant="h4" className="mb-3 font-semibold text-left">
                    OUR STAFF
                </Typography>

                <div class="grid  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4 mb-6">
                    {staffData.map(staff => {
                        return(
                            <figure className="relative h-96 w-full" key={staff.author}>
                            <img
                              className="h-full w-full rounded-xl object-cover object-center"
                              src={staff.img}
                              alt="nature image"
                            />
                            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                              <div>
                                <Typography variant="h5" color="blue-gray" className="capitalize text-base text-left">
                                  {staff.author}
                                </Typography>
                                <Typography color="gray" className="mt-2 font-normal uppercase text-sm">
                                  {staff.title}
                                </Typography>
                              </div>
                              {/* <Typography variant="h5" color="blue-gray">
                                Growth
                              </Typography> */}
                            </figcaption>
                          </figure>
                        )
                    })}
                  
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
