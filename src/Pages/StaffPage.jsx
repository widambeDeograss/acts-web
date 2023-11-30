import React, { useState } from "react";
import { Typography, Collapse } from "@material-tailwind/react";
import PageHeroSection from "../components/PageHeroSection";
import majule from "../assets/img/majule faculty.png";
import majembe from "../assets/img/majembe faculty.png";
import nyanda from "../assets/img/nyanda2.png";
import muimbula from "../assets/img/Muimbula.png";
import Kibga from "../assets/img/Kibga faculty.jpg";
import nhigula from "../assets/img/nhigula2.png";
import vicePresident from "../assets/img/vicePresident.jpg";

const staffData = [
  {
    img: nhigula,
    title: "MCH. DR. IMMACULATE NHIGULA",
    author: "Presdent",
  },
  {
    img: vicePresident,
    title: "REV. DR. JOSEPH KIMEME",
    author: "Vice President",
  },

  {
    img: nyanda,
    title: "REV. DR. JACKSON NYANDA",
    author: "Academic Dean",
  },
  {
    img: muimbula,
    title: "MCH. WILLIMINA MUIMBULA",
    author: "BM & Resistrar",
  },
  // {
  //   img: majule,
  //   title: 'REV. DR. GEOFREY P. MAJULE',
  //   author: 'Dip, BA, M.Div & D.Min',
  // },
  // {
  //   img: majembe,
  //   title: 'REV. DR. PASTORY MAJEMBE',
  //   author: 'Dip, BA, M.Div, Th. M ',
  // },
];

const StaffPage = () => {
  const [openPresident, setopenPresident] = useState(false);
  const [openKimeme, setopenKimeme] = useState(false);
  const [openNyanda, setopenNyanda] = useState(false);
  const [openMuibula, setopenMuibula] = useState(false);
  const [openMajule, setopenMajule] = useState(false);
  const [openMajembe, setopenMajembe] = useState(false);
  const [openKibga, setopenKibga] = useState(false);
  const [openhamuli, setopenhamuli] = useState(false);
  const [opennguyaine, setopennguyaine] = useState(false);
  
  return (
    <div>
      <PageHeroSection title="Our staff" />

      <div className="mt-10 w-10/12 gap-1 mx-auto">
        <Typography variant="h6" className="mb-3 font-semibold text-left">
          SEMINARY ADMINISTRATION
        </Typography>

        <div class="grid  sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4 mb-6">
          {staffData.map((staff) => {
            return (
              <figure className="relative h-64 w-full" key={staff.author}>
                <img
                  className="h-full w-full rounded-xl object-fill "
                  src={staff.img}
                  alt="nature image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-gray-400 bg-[#862F8E]/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm ">
                  <div>
                    <Typography
                      color="gray"
                      className="mt-2 font-normal uppercase text-xs text-left text-white"
                    >
                      {staff.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-32"
                    >
                      {staff.author}
                    </Typography>
                  </div>
                  {/* <Typography variant="h5" color="blue-gray">
                                Growth
                              </Typography> */}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <div className="mt-10 w-10/12 gap-1 mx-auto">
        <Typography variant="h6" className="mb-3 font-semibold text-left">
          SEMINARY FACULTY
        </Typography>

        <div class="grid  sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4 mb-6">
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105 "
            onClick={() => setopenPresident(!openPresident)}
            style={{height:openPresident?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              MCH. DR. IMMACULATE NHIGULA
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              President
            </Typography>
            <div className="float-right" onClick={() => setopenPresident(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openPresident}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={nhigula}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                Diploma in Education,
                <br />
                Bachelor of Arts in Bible & Theology,
                <br />
                MA & PhD
              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopenKimeme(!openKimeme)}
            style={{height:openKimeme?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              REV. PROF. JOSEPH KIMEME
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left   text-light-blue-500 w-32"
            >
              Vice President
            </Typography>
            <div className="float-right" onClick={() => setopenKimeme(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openKimeme}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={vicePresident}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                Bsc. Eng (UDSM),
                <br />
                MBA-Industrial Mgt (PSU-USA),
                <br />
                MA- Missions (GU),
                <br />
                PhD (SUA)
              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopenNyanda(!openNyanda)}
            style={{height:openNyanda?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              REV. DR. JACKSON NYANDA
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              Academic Dean
            </Typography>
            <div className="float-right" onClick={() => setopenNyanda(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openNyanda}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={nyanda}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                Dip Ed - UD,
                <br />
                MSc. (Biology) - UDSM,
                <br />
                MDiv. - Asia College of
                Theological Studies
                Korea,
                <br />
                PhD in Biblical Studies
                - PAThS Togo
              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopenMuibula(!openMuibula)}
            style={{height:openMuibula?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              MCH. WILLIMINA MUIMBULA
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              BM & Registrar
            </Typography>
            <div className="float-right" onClick={() => setopenMuibula(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openMuibula}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={muimbula}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                FTC in Civil Engineering
                - Arusha Tech,
                <br />
                BA in Bible & Theology
                -EAST Kenya,
                <br />
                MA in Education
                - GU USA,
                <br />
                MDiv. - GU USA
              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopenMajule(!openMajule)}
            style={{height:openMajule?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              REV. PROF. GEOFREY
              MAJULE
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              Staff
            </Typography>
            <div className="float-right" onClick={() => setopenMajule(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openMajule}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={`${require("../assets/img/majuli.png")}`}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                Diploma in Bible &
                Theology - CBC Dodoma,
                <br />
                BA in Religious Studies
                - GU USA,
                <br />
                M. Div - ITS USA,
                <br />
                DMin - Asbury
                Theological
                Seminary USA
              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopenMajembe(!openMajembe)}
            style={{height:openMajembe?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              REV. PROF. PASTORY
              MAJEMBE
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              Staff
            </Typography>
            <div className="float-right" onClick={() => setopenMajembe(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openMajembe}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={`${require("../assets/img/majembe.png")}`}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                Diploma in Bible
                &Theology,
                <br />
                BA in Bible & Theology,
                <br />
                Masters of Divinity,
                <br />
                Masters of Theology,
                <br />
                Doctors of Ministry

              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopenKibga(!openKibga)}
            style={{height:openKibga?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              DR. ELIA KIBGA
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              Staff
            </Typography>
            <div className="float-right" onClick={() => setopenKibga(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openKibga}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={Kibga}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                PhD Ed (Curriculum Studies),
                <br />
                MED (Science Ed),
                <br />
                MA (Biblical Studies),
                <br />
                BSC.ED; DIP (science Ed),
                <br />
                DIP (ICT and Pedagogy),
                <br />
                DIP (School Management),
                <br />
                DIP (Human Resources
                Management)

              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopenhamuli(!openhamuli)}
            style={{height:openhamuli?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              REV. DR. JOEL HAMULI
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              Staff
            </Typography>
            <div className="float-right" onClick={() => setopenhamuli(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={openhamuli}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={`${require("../assets/img//hamfuli.png")}`}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-xs text-left  font-bold"
              >
                BA. Economy (UDSM),
                <br />
                BTh. (EAST-NAIROBI),
                <br />
                MA. Biblical Studies
                (Wheaton - USA)
                <br />
                DMin. (ORU - USA)
              </Typography>
            </Collapse>
          </div>
          <div className="p-8 bg-white/75  w-full shadow-lg transform hover:scale-105"
            onClick={() => setopennguyaine(!opennguyaine)}
            style={{height:opennguyaine?"100%":"176px"}}
          >
            <Typography
              color="gray"
              className="mt-2  uppercase text-sm text-left  font-bold"
            >
              REV. DR. GERALD OLE -
NGUYAINE
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="capitalize text-sm text-left  text-light-blue-500 w-32"
            >
              Staff
            </Typography>
            <div className="float-right" onClick={() => setopennguyaine(true)}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize text-sm text-left bg-light-blue-500 p-[0.5] px-1 text-white w-24 mt-2 rounded-md cursor-pointer"
              >
                more details
              </Typography>
            </div>
            <Collapse open={opennguyaine}>
              <figure className="relative h-64 w-full mt-5">
                <img
                  className="h-full w-full object-fill "
                  src={`${require("../assets/img/nguyaine.png")}`}
                  alt="nature image"
                />
              </figure>
              <Typography
                color="gray"
                className="mt-2  text-base text-left  font-bold"
              >
                
              </Typography>
            </Collapse>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaffPage;
