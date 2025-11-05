import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/student/jobCard";
import toast from "react-hot-toast";

function Jobs() {
   const [jobs, setJobs] = useState([]);
   const [filteredJobs, setFilteredJobs] = useState([]);
   const [loading, setLoading] = useState(true);
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedDate, setSelectedDate] = useState("");

   useEffect(() => {
      async function fetchJobs() {
         try {
            const response = await axios.get(
               `${import.meta.env.VITE_BASE_URL}/api/jobs/open-jobs`
            );
            const jobData = response.data.jobs || [];
            setJobs(jobData);
            setFilteredJobs(jobData);
         } catch (error) {
            console.error(error);
            toast.error("Failed to load jobs");
         } finally {
            setLoading(false);
         }
      }

      fetchJobs();
   }, []);

   useEffect(() => {
      let filtered = jobs;

      if (searchTerm.trim() !== "") {
         filtered = filtered.filter((job) =>
            job.location?.toLowerCase().includes(searchTerm.toLowerCase())
         );
      }

      if (selectedDate) {
         filtered = filtered.filter((job) => {
            const jobDate = new Date(job.jobDate).toISOString().split("T")[0];
            return jobDate === selectedDate;
         });
      }

      setFilteredJobs(filtered);
   }, [searchTerm, selectedDate, jobs]);

   return (
      <div className="w-[80%] min-h-[calc((100vh)-(65px))] pt-[85px] pb-5 flex flex-col items-center md:w-[60%] md:gap-5">
         <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-5">
            <input
               type="text"
               placeholder="Search by location..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full md:w-[48%] p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
               type="date"
               value={selectedDate}
               onChange={(e) => setSelectedDate(e.target.value)}
               className="w-full md:w-[48%] p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
         </div>

         {loading ? (
            <p className="text-gray-500">Loading jobs...</p>
         ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
               <JobCard key={index} jobInfo={job} />
            ))
         ) : (
            <p className="text-gray-400">
               No jobs found
               {searchTerm && ` for location "${searchTerm}"`}
               {selectedDate && ` on ${selectedDate}`}
            </p>
         )}
      </div>
   );
}

export default Jobs;
