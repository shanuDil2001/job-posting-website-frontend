import JobCard from "../components/student/jobCard";

function Jobs() {
   

   return (
      <div className="w-[80%] h-full pt-[85px] pb-5 flex flex-col items-center md:w-[60%] md:flex md:flex-col md:items-center md:gap-5">
         <JobCard />
         <JobCard />
         <JobCard />
      </div>
   );
}
export default Jobs;