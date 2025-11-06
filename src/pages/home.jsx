import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import axios from "axios";
import JobCard from "../components/student/jobCard";

function Home() {
   const navigate = useNavigate();
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function fetchJobs() {
         try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/jobs/open-jobs`);
            const jobData = response.data.jobs || [];
            jobData.length = 3;
            setJobs(jobData);
         } catch (error) {
            console.error(error);
            toast.error("Failed to load jobs");
         } finally {
            setLoading(false);
         }
      }
      fetchJobs();
   }, [loading]);

   const faqs = [
      {
         question: "How do I apply for a job?",
         answer:
            "You can browse available jobs on the Jobs page and click the 'Apply Now' button on the job you’re interested in.",
      },
      {
         question: "Is this platform free to use?",
         answer:
            "Yes! Both students and employers can use this platform for free. We aim to make job hunting simple and accessible.",
      },
      {
         question: "How can I post a job?",
         answer:
            "Employers can sign up and post new job listings through their dashboard once logged in.",
      },
   ];

   const [openIndex, setOpenIndex] = useState(null);
   const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <div className="w-full h-full pt-[65px] flex flex-col items-center">

         <section className="min-h-screen bg-linear-to-b from-yellow-100 to-green-100 text-white py-15 px-6 text-center flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center w-[60%] mb-8">
               <img className="w-[400px]" src="src/assets/background.png" alt="" />
               <h1 className="font-bold text-3xl text-blue-400 text-shadow-md mb-8 md:text-5xl">PartTime<span className="text-lime-400">Buddy</span></h1>
               <p className="text-center md:text-lg text-slate-500">PartTimeBuddy connects students with flexible part-time job opportunities. Developed as a university project, our platform helps students balance studies with work while providing employers access to motivated and capable talent.</p>
            </div>
            <button
               onClick={() => navigate("/login")}
               className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md shadow-sm hover:bg-green-400 hover:text-white"
            >
               Explore Jobs
            </button>
         </section>

         <hr className="w-[80%] border border-slate-500" />

         <section className="w-full h-full flex flex-col items-center bg-linear-to-b from-green-100 to-orange-100">
            <h2 className="mt-4 text-3xl font-bold text-center mb-5 text-green-400 text-shadow-md">
               Featured Jobs
            </h2>

            <div className="w-[70%] flex flex-col gap-3">
               {jobs.map((job, index) => (
                  <JobCard key={index} jobInfo={job} />
               ))}
            </div>

            <div className="text-center mt-10">
               <button
                  onClick={() => navigate("/login")}
                  className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md shadow-sm hover:bg-green-400 hover:text-white mb-10"
               >
                  View All Jobs
               </button>
            </div>
         </section>

         <hr className="w-[80%] border border-slate-500" />

         <section className="w-full h-full flex flex-col items-center bg-linear-to-b from-orange-100 to-green-100 pb-10">
            <h2 className="my-5 text-3xl font-bold text-center mb-5 text-green-400 text-shadow-md">
               Frequently Asked Questions
            </h2>

            <div className="space-y-4 w-[70%]">
               {faqs.map((faq, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-lg shadow border border-green-200 p-5"
                  >
                     <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left"
                     >
                        <span className="font-semibold text-lg">{faq.question}</span>
                        {openIndex === index ? (
                           <FaChevronUp className="text-green-600" />
                        ) : (
                           <FaChevronDown className="text-green-600" />
                        )}
                     </button>

                     {openIndex === index && (
                        <p className="mt-3 text-gray-600 border-t pt-3">{faq.answer}</p>
                     )}
                  </div>
               ))}
            </div>
         </section>

      </div>
   );
}

export default Home;
