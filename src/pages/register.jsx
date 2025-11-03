import { Link } from "react-router-dom";

function RegisterPage() {

   return (
      <div className="w-full h-full pt-[100px] pb-[50px]  bg-linear-to-b from-green-100 to-white flex flex-col justify-center items-center gap-4">
         <h1 className="font-bold text-2xl text-blue-400 text-shadow-md mb-2 md:text-3xl">PartTime<span className="text-lime-400">Buddy</span></h1>

         <div className="w-[90%] border border-slate-200 p-5 rounded-lg flex flex-col justify-center items-center gap-4 md:w-[500px]">
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="First Name"
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="Last Name"
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="email"
               placeholder="Email"
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="password"
               placeholder="Password"
            />
            <select className="bg-white border border-amber-100 p-2 rounded-md w-full" defaultValue="student">
               <option value="student">Student</option>
               <option value="employer">Employer</option>
            </select>
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="Phone"
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="Location"
            />

            <button className="bg-blue-400 text-white p-2 rounded-md w-full hover:bg-blue-600 transition-colors">Register</button>
         </div>
         <hr className="border border-slate-400 w-[90%] md:w-[500px]"/>
         <span className="">Already have an account? <Link to="/login" className="font-semibold text-blue-400">Login</Link></span>
      </div>
   );
}
export default RegisterPage;