import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
   const [fName, setFName] = useState("");
   const [lName, setLName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("student");
   const [phone, setPhone] = useState("");
   const [location, setLocation] = useState("");
   const navigate = useNavigate();

   async function handleRegister() {
      try {
         await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/`, {
            fName: fName,
            lName: lName,
            email: email,
            password: password,
            role: role,
            phone: phone,
            location: location
         });
         toast.success("Registration successful! Please login.");
         navigate("/login");
      } catch (error) {
         console.error(error);
         toast.error("Registration failed. Please try again.");
      }
   }

   return (
      <div className="w-full h-full pt-[100px] pb-[50px]  bg-linear-to-b from-green-100 to-white flex flex-col justify-center items-center gap-4">
         <h1 className="font-bold text-2xl text-blue-400 text-shadow-md mb-2 md:text-3xl">PartTime<span className="text-lime-400">Buddy</span></h1>

         <div className="w-[90%] border border-slate-200 p-5 rounded-lg flex flex-col justify-center items-center gap-4 md:w-[500px]">
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="First Name"
               value={fName}
               onChange={(e) => setFName(e.target.value)}
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="Last Name"
               value={lName}
               onChange={(e) => setLName(e.target.value)}
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <select
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               value={role}
               onChange={(e) => setRole(e.target.value)}
            >
               <option value="student">Student</option>
               <option value="employer">Employer</option>
            </select>
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="Phone"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
            />
            <input
               className="bg-white border border-amber-100 p-2 rounded-md w-full"
               type="text"
               placeholder="Location"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
            />

            <button
               className="bg-blue-400 text-white p-2 rounded-md w-full hover:bg-blue-600 transition-colors"
               onClick={handleRegister}
            >Register</button>
         </div>
         <hr className="border border-slate-400 w-[90%] md:w-[500px]" />
         <span className="">Already have an account? <Link to="/login" className="font-semibold text-blue-400">Login</Link></span>
      </div>
   );
}
export default RegisterPage;