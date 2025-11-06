import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Jobs() {
   const navigate = useNavigate();

   return (
      <div className="w-[80%] min-h-[calc((100vh)-(65px))] pt-[85px] pb-5 flex flex-col justify-center items-center md:w-[60%] md:gap-5">
         <p className="text-center md:text-lg text-slate-700">Sign in to unlock more job opportunities tailored for you!</p>
         <button
            onClick={() => navigate("/login")}
            className="bg-green-200 text-green-600 font-semibold py-3 rounded-md shadow-sm hover:bg-blue-400 hover:text-white px-10 flex justify-center items-center gap-3"
         >
            Login <FaArrowCircleRight />
         </button>
      </div>
   );
}

export default Jobs;
