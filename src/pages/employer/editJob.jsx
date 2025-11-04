import { useNavigate } from "react-router-dom";

function EditJob() {
   const navigate = useNavigate();

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
               />
               <textarea
                  placeholder="Job Description"
                  className="border border-gray-300 p-2 rounded-md w-full h-32"
               ></textarea>
               <input
                  type="text"
                  placeholder="Location"
                  className="border border-gray-300 p-2 rounded-md w-full"
               />
               <select
                  defaultValue={"Select Job Type"}
                  className="border border-gray-300 p-2 rounded-md w-full">
                  <option disabled value="Select Job Type">Select Job Type</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Full-Time">Full-Time</option>
               </select>
               <input
                  type="date"
                  placeholder="Job Date"
                  className="border border-gray-300 p-2 rounded-md w-full"
               />
               <input
                  type="text"
                  placeholder="Contact Information"
                  className="border border-gray-300 p-2 rounded-md w-full"
               />
               <input
                  type="text"
                  placeholder="Salary (optional)"
                  className="border border-gray-300 p-2 rounded-md w-full"
               />
               <select
                  defaultValue={"Select Status"}
                  className="border border-gray-300 p-2 rounded-md w-full">
                  <option disabled value="Select Status">Select Status</option>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
               </select>
               <button
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