import React, { useState } from "react";
import { Typography, Select, Radio } from "@material-tailwind/react";
import { data } from "autoprefixer";
import swal from "sweetalert";

function ApplicantReferenceForm(props) {
  const [isPastor, setisPastor] = useState(true);
  const [PasstorsList, setPasstorsList] = useState([]);
  const [EducatorsList, setEducatorsList] = useState([]);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const AddReference = () => {
    const dataobj = {
      name:name,
      address:address,
      phone:phone
    };

    if (isPastor) {
      PasstorsList.push(dataobj);
      setaddress("")
      setname("")
      setphone("")
    }else{
      props.onAddReferences({employer_references:dataobj})
      EducatorsList.push(dataobj);
      setaddress("")
      setname("")
      setphone("")
    }
  }

  const handleSubmit = (e) => {
     
      if (PasstorsList.length === 0 && EducatorsList.length === 0 ) {
        swal({  
          title: "",  
          text: "Please! fill the Reference information first",  
          icon: "warning",  
          button: "OK",  
        });
      }
      localStorage.setItem('referee_pastors_list', JSON.stringify(PasstorsList));
      localStorage.setItem('referee_employers_list', JSON.stringify(EducatorsList));
      swal({  
        title: "",  
        text: "Reference details added succesfully to proceed. Click NEXT!",  
        icon: "success",  
        button: "OK",  
      });
      // window.location.reload()
  }

  return (
    <div>
      <Typography className="font-bold text-left mt-10 ">REFERENCE</Typography>
      <Typography
        className="font-light
       text-left "
      >
        List the names and addresses of your pastor and educator pf at least one
        year's acquaintance who are not family members and can verify your
        ability to pursue a graduate(post-baccalaureate) degree.
      </Typography>
      <div className="flex flex-row mt-3">
        <Typography className="font-semibold text-left mt-3">
          List of names of pastors and educators/ employers:{" "}
        </Typography>
        <div className="flex flex-wrap gap-3">
          <Radio
            id="pastor"
            name="type"
            label="Pastor"
            onClick={() => setisPastor(true)}
          />
          <Radio
            id="educator"
            name="type"
            label="Educator/employer"
            onClick={() => setisPastor(false)}
          />
        </div>
      </div>
      <form action="" className="mt-4" >
        {(isPastor && (
          <div>
            <div className="mb-3">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pastor|Church leader name
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
                Address
              </label>
              <input
                type="text"
                id="first_name"
                name="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                value={address}
                onChange={(e) => setaddress(e.target.value) }
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="tel"
                id="first_name"
                maxLength={12}
                name="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder="ex. 255765678912"
                value={phone}
                onChange={(e) => setphone(e.target.value) }
                required
              />
            </div>
          </div>
        )) || (
          <div>
            <div className="mb-3">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Educator|Employer name
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
                Address
              </label>
              <input
                type="text"
                id="first_name"
                name="address"
                value={address}
                onChange={(e) => setaddress(e.target.value) }
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder=""
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="tel"
                id="first_name"
                name="phone"
                value={phone}
                onChange={(e) => setphone(e.target.value) }
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder="ex. 255765678912"
                required
              />
            </div>
          </div>
        )}
         <button
          onClick={() => AddReference()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5 "
        >
          Add Reference Information
        </button>
      </form>
      <table className="w-full  overflow-x-scroll table-auto mt-8">
        <thead>
          <tr>
            {["Pastors Name", "Address", "Phone"].map((el) => (
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
          {PasstorsList.map(({ name, address, phone }, key) => {
            const className = `py-3  ${
              key === PasstorsList.length - 1
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
                    {address}
                  </Typography>
                </td>

                <td className={className}>
                  <Typography
                    variant="small"
                    className="mb-1  text-xs font-medium text-blue-gray-600"
                  >
                    {phone}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="w-full  overflow-x-scroll table-auto mt-8">
        <thead>
          <tr>
            {["Educator|Employer name", "Address", "Phone"].map((el) => (
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
          {EducatorsList.map(({ name, address, phone }, key) => {
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
                    {address}
                  </Typography>
                </td>

                <td className={className}>
                  <Typography
                    variant="small"
                    className="mb-1  text-xs font-medium text-blue-gray-600"
                  >
                    {phone}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
          onClick={() => handleSubmit()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-20"
        >
          Submit Reference Information
        </button>
    </div>
  );
}

export default ApplicantReferenceForm;
