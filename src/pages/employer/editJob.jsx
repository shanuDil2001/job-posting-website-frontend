import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function EditJob() {

   const navigate = useNavigate();
   const loc = useLocation();
   const jobId = loc.state.jobId;
   const [title, setTitle] = useState(loc.state.title);
   const [description, setDescription] = useState(loc.state.description);
   const [location, setLocation] = useState(loc.state.location);
   const [type, setType] = useState(loc.state.type);
   const [jobDate, setJobDate] = useState(loc.state.jobDate);
   const [contact, setContact] = useState(loc.state.contact);
   const [salary, setSalary] = useState(loc.state.salary);
   const [status, setStatus] = useState(loc.state.status);

   async function handleUpdate() {
      try {
         await axios.put(`${import.meta.env.VITE_BASE_URL}/api/jobs/${jobId}`, {
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
         toast.success("Job updated successfully!");
      } catch (error) {
         console.error(error);
         toast.error("Failed to update job. Please try again.");
      }
   }

   return (
      <div className="w-[90%] min-h-[calc(100vh-65px)] flex flex-col items-center my-10">
         <div className="w-full bg-white p-6 rounded-md shadow-md border border-green-200 md:w-[80%]">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400 text-center">Edit Job</h2>
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
                  defaultValue={type}
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
                  value={jobDate ? new Date(jobDate).toISOString().split("T")[0] : ""}
                  onChange={(e) => setJobDate(new Date(e.target.value).toISOString())}
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
               <select
                  defaultValue={status}
                  className="border border-gray-300 p-2 rounded-md w-full"
                  onChange={(e) => setStatus(e.target.value)}>
                  <option disabled value="Select Status">Select Status</option>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
               </select>
               <button
                  onClick={handleUpdate}
                  type="submit"
                  className="cursor-pointer bg-white border border-blue-400 text-blue-400 p-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white"
               >
                  Done
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
export default EditJob;