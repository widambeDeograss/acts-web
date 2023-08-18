import React, { useState } from "react";
import { Typography, Select, Radio, Option } from "@material-tailwind/react";
import { data } from "autoprefixer";
import swal from "sweetalert";

const mastersp = [
  { id: 1, course: "Masters of Divinity in Biblical Studies" },
  { id: 2, course: "Masters of Divinity in Ministerial Studies" },
  { id: 3, course: "Masters of Arts in Leadership" },
  { id: 4, course: "Masters of Arts in Intercultural Studies" },
  { id: 5, course: "Masters of Arts in Education" },
  { id: 6, course: "Masters of Arts in Biblical Theology" },
];

function ApplicantAcademicForm() {
  const [isPastor, setisPastor] = useState(true);
  const [EducatorsList, setEducatorsList] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [major, setmajor] = useState("");
  const [Sdate, setSdate] = useState("");
  const [Edate, seEdate] = useState("");
  const [Degrees, setDegrees] = useState("");
  const [Residential, setResidential] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = () => {
    const dataobj = {
      name: name,
      city: city,
      dates: `${Sdate} - ${Edate}`,
      major: major,
      Degrees: Degrees,
      
      // non_residetial_student:Residential,
    };
    EducatorsList.push(dataobj);
    seEdate("");
    setname("");
    setDegrees("");
    setSdate("");
    setcity("");
    setmajor("");
    console.log(dataobj);
  };

  const handleSubmitAcademicInfo = () => {
    const dataobj = {
      educatorsList:EducatorsList,
      take_masters: open,
      marsters_course: selectedCourse,
      residetial_student: Residential,

    }
    localStorage.setItem("applicant_education_data", JSON.stringify(dataobj));
    swal({  
      title: "",  
      text: "Education details added succesfully view your application summary and send!",  
      icon: "success",  
      button: "OK",  
    });
    
    
  }

  return (
    <div>
      <Typography className="font-bold text-left mt-10 ">
        ACADEMIC INFORMATION
      </Typography>
      <Typography
        className="font-light
       text-left "
      >
        An official transcript is required from each school where degree work
        was done after grade 12.
      </Typography>

      <form action="" className="mt-4">
        <div>
          <div className="mb-3">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name of School
            </label>
            <input
              type="text"
              id="first_name"
              name="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder=""
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              City/state/country
            </label>
            <input
              type="text"
              id="first_name"
              name="address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder=""
              value={city}
              onChange={(e) => setcity(e.target.value)}
              required
            />
          </div>

          <div class="grid gap-6 mb-6 lg:grid-cols-2 w-full">
            <div className="mb-3">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Start date
              </label>
              <input
                type="date"
                id="first_name"
                name="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                value={Sdate}
                onChange={(e) => setSdate(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                end date
              </label>
              <input
                type="date"
                id="first_name"
                name="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                value={Edate}
                onChange={(e) => seEdate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Major
            </label>
            <input
              type="text"
              id="first_name"
              name="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder=""
              value={major}
              onChange={(e) => setmajor(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Degrees
            </label>
            <input
              type="text"
              id="first_name"
              name="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder=""
              value={Degrees}
              onChange={(e) => setDegrees(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          onClick={() => handleSubmit()}
          class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  "
        >
          Add information
        </button>
        <div>
          <Typography className="font-semibold text-left mt-8">
            Program of Study:{" "}
          </Typography>
          <div className="flex gap-3">
            <Radio
              id="masters"
              name="program"
              label="Masters Programs"
              onClick={() => setOpen(true)}
            />
            <Radio
              id="phd"
              name="program"
              label=" PhD Program"
              onClick={() => setOpen(false)}
            />
          </div>

          {open && (
            <div className="mt-10 mb-10">
              <Typography className="font-semibold text-left mb-2">
                What is the program you want to enroll? (For Masters Program
                Applicants Only):{" "}
              </Typography>

              <select
                id="countries"
                name="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-purple-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Program</option>
                {mastersp.map((course) => (
                  <option key={course.id} value={course.course}>
                    {course.course}
                  </option>
                ))}
              </select>

              <Typography className="font-semibold text-left mb-2 mt-6">
                What is the mode of study you want to use? (Masters Programs
                Applicants only):{" "}
              </Typography>
              <div className="flex gap-3">
                <Radio
                  id="masters"
                  name="Residential"
                  label="Residential"
                  onClick={() => setResidential(true)}
                />
                <Radio
                  id="phd"
                  name="Residential"
                  label="Non Residential"
                  onClick={() => setResidential(false)}
                />
              </div>
            </div>
          )}
        </div>
       
      </form>

      <table className="w-full  overflow-x-scroll table-auto mt-8">
        <thead>
          <tr>
            {[
              "School Name",
              "City/state/country",
              "Dates attended",
              "Major",
              "Degrees",
            ].map((el) => (
              <th key={el} className="border-b border-blue-gray-50 py-3  ">
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
          {EducatorsList.map(({ name, city, dates, major, Degrees }, key) => {
            const className = `py-3  ${
              key === EducatorsList.length - 1
                ? ""
                : "border-b border-blue-gray-50"
            }`;

            return (
              <tr key={name}>
                <td className={className}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography className="text-xs text-center font-semibold text-blue-gray-600">
                    {city}
                  </Typography>
                </td>

                <td className={className}>
                  <Typography
                    variant="small"
                    className="mb-1  text-xs font-medium text-blue-gray-600"
                  >
                    {dates}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography
                    variant="small"
                    className="mb-1  text-xs font-medium text-blue-gray-600"
                  >
                    {major}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography
                    variant="small"
                    className="mb-1  text-xs font-medium text-blue-gray-600"
                  >
                    {Degrees}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <button
          onClick={() => handleSubmitAcademicInfo()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 float-left mt-10 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit information
        </button>
    </div>
  );
}

export default ApplicantAcademicForm;
