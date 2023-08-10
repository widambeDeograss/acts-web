import React, { useState } from "react";
import { Typography, Select, Radio } from "@material-tailwind/react";
import { data } from "autoprefixer";

function ApplicantAcademicForm() {
  const [isPastor, setisPastor] = useState(true);
  const [EducatorsList, setEducatorsList] = useState([]);
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [major, setmajor] = useState("");
  const [Sdate, setSdate] = useState("");
  const [Edate, seEdate] = useState("");
  const [Degrees, setDegrees] = useState("")

  const handleSubmit = (e) => {
      const dataobj = {
        name:name,
        city:city,
        dates:`${Sdate} - ${Edate}`,
        major:major,
        Degrees:Degrees,
      }
        EducatorsList.push(dataobj);
        seEdate("");
        setname("");
        setDegrees("");
        setSdate("");
        setcity("");
        setmajor("");
    
  }

  return (
    <div>
      <Typography className="font-bold text-left mt-10 ">ACADEMIC INFORMATION</Typography>
      <Typography
        className="font-light
       text-left "
      >
        An official transcript is required from each school where degree work was done after grade 12.
      </Typography>
   
      <form action="" className="mt-4" >
       
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
                onChange={(e) => setname(e.target.value) }
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
                onChange={(e) => setcity(e.target.value) }
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
                onChange={(e) => setSdate(e.target.value) }
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
                onChange={(e) => seEdate(e.target.value) }
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
                onChange={(e) =>setmajor(e.target.value) }
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
                onChange={(e) => setDegrees(e.target.value) }
                required
              />
            </div>
          </div>

          <div>
            
          </div>
     
        <button
          onClick={() => handleSubmit()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
      <table className="w-full  overflow-x-scroll table-auto mt-8">
        <thead>
          <tr>
            {["School Name", "City/state/country", "Dates attended", "Major", "Degrees"].map((el) => (
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

      
    </div>
  );
}

export default ApplicantAcademicForm;
