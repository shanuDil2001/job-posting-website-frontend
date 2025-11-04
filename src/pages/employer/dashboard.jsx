import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      async function fetchJobs() {
         try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/jobs`, {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
               }
            });
            setJobs(response.data.jobs);
            console.log(response.data.jobs);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      }

      fetchJobs();
   }, []);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-screen">
            <h1 className="text-xl font-semibold text-gray-600">Loading...</h1>
         </div>
      );
   }

   if (error) {
      return (
         <div className="flex justify-center items-center h-screen">
            <h1 className="text-red-500 text-lg font-semibold">Error: {error}</h1>
         </div>
      );
   }

   return (
      <div className="w-[90%] h-[calc(100vh-65px)]">
         <button
            onClick={() => {
               navigate("/dashboard/new-job");
            }}
            className="fixed w-[150px] h-[50px] bg-green-200 bottom-5 right-5 flex justify-center items-center rounded-md shadow-md hover:bg-green-300 cursor-pointer font-semibold">
            New Job
         </button>
         <div className="w-full bg-white shadow-md border border-gray-200 mt-6">
            <table className="w-full text-sm text-gray-700">
               <thead className="bg-green-400 text-white">
                  <tr>
                     <th className="py-3 px-4 text-left">#</th>
                     <th className="py-3 px-4 text-left">Title</th>
                     <th className="py-3 px-4 text-left">Type</th>
                     <th className="py-3 px-4 text-left">Location</th>
                     <th className="py-3 px-4 text-left">Status</th>
                     <th className="py-3 px-4 text-left">Date</th>
                     <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {jobs.length === 0 ? (
                     <tr>
                        <td colSpan="6" className="text-center py-6 text-gray-500">
                           No jobs available.
                        </td>
                     </tr>
                  ) : (
                     jobs.map((job, index) => (
                        <tr
                           key={job._id || index}
                           className="border-b hover:bg-gray-50 transition-colors duration-150"
                        >
                           <td className="py-3 px-4">{index + 1}</td>
                           <td className="py-3 px-4 font-medium">{job.title}</td>
                           <td className="py-3 px-4">{job.type}</td>
                           <td className="py-3 px-4">{job.location}</td>
                           <td className="py-3 px-4">
                              <span
                                 className={`px-3 py-1 rounded-full text-xs font-semibold ${job.status === "Open"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                              >
                                 {job.status}
                              </span>
                           </td>
                           <td className="py-3 px-4">
                              {new Date(job.createdAt).toLocaleDateString()}
                           </td>
                           <td className="py-3 px-4">
                              <button className="me-2 px-3 py-1 bg-green-400 text-white rounded-md hover:bg-green-600 cursor-pointer">
                                 Edit
                              </button>
                              <button className="px-3 py-1 bg-red-400 text-white rounded-md hover:bg-red-600 cursor-pointer">
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Dashboard;
