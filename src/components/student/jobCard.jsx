function JobCard(props) {
   const job = props.jobInfo;

   return (
      <div className="w-full bg-white rounded-md shadow-md border border-green-200 p-5 my-2">
         <div className="flex md:flex-row md:justify-start md:items-center md:mb-1 relative">
            <h2 className="text-xl font-bold text-blue-400 text-shadow-sm mb-2">{job.title}</h2>
            <span
               className={`text-sm text-center font-medium px-3 py-1 rounded-full absolute right-0 ${job.status === "Open"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
            >
               {job.status}
            </span>
         </div>

         <p className="text-gray-500 mt-2 border border-orange-100 p-2 rounded-md">{job.description}</p>

         <div className="mt-2 text-gray-800 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-1">
               <p><span className="font-semibold">Location:</span> {job.location}</p>
               <p><span className="font-semibold">Date:</span> {new Date(job.jobDate).toISOString().split("T")[0]}</p>
            </div>
            <div className="flex flex-col gap-1">
               <p><span className="font-semibold">Contact:</span> {job.contact}</p>
               <p><span className="font-semibold">Salary:</span> {job.salary}</p>
            </div>
         </div>
      </div>
   );
}
export default JobCard;