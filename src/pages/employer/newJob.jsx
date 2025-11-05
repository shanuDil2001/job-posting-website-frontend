import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function NewJob() {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [location, setLocation] = useState("");
   const [type, setType] = useState("");
   const [jobDate, setJobDate] = useState("");
   const [contact, setContact] = useState("");
   const [salary, setSalary] = useState("");

   const navigate = useNavigate();

   async function handleSubmit() {
      try {
         await axios.post(`${import.meta.env.VITE_BASE_URL}/api/jobs`, {
            title: title,
            description: description,
            location: location,
            type: type,
            jobDate: jobDate,
            contact: contact,
            salary: salary
         }, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });
         navigate("/dashboard");
         toast.success("Job posted successfully!");
      } catch (error) {
         console.error(error);
         toast.error("Failed to post job. Please try again.");
      }
   }

   return (
      <div className="w-[90%] min-h-[calc(100vh-65px)] flex flex-col items-center my-10">
         <div className="w-full bg-white p-6 rounded-md shadow-md border border-green-200 md:w-[80%]">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400 text-center">Post a New Job</h2>
            <hr className="border border-green-200 w-full my-5" />
            <div className="flex flex-col gap-4">
               <input
                  type="text"
                  placeholder="Job Title"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
               <textarea
                  placeholder="Job Description"
                  className="border border-gray-300 p-2 rounded-md w-full h-32"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               ></textarea>
               <input
                  type="text"
                  placeholder="Location"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
               />
               <select
                  defaultValue={"Select Job Type"}
                  className="border border-gray-300 p-2 rounded-md w-full"
                  onChange={(e) => setType(e.target.value)}>
                  <option disabled value="Select Job Type">Select Job Type</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Full-Time">Full-Time</option>
               </select>
               <input
                  type="date"
                  placeholder="Job Date"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={jobDate}
                  onChange={(e) => setJobDate(e.target.value)}
               />
               <input
                  type="text"
                  placeholder="Contact Information"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
               />
               <input
                  type="text"
                  placeholder="Salary (optional)"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
               />
               <button
                  type="submit"
                  className="cursor-pointer bg-white border border-blue-400 text-blue-400 p-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white"
                  onClick={handleSubmit}
               >
                  Post Job
               </button>
            </div>
            <div className="flex flex-col">
               <hr className="border border-green-200 w-full my-5" />
               <button
                  onClick={() => { navigate(-1); }}
                  className="cursor-pointer bg-white border border-red-400 text-red-400 p-2 rounded-md font-semibold hover:bg-red-500 hover:text-white"
               >
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
}
export default NewJob;