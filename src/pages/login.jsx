import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   async function handleLogin() {
      try {
         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/login`, {
            email: email,
            password: password
         });
         toast.success(response.data.message);
         console.log(response.data);

         localStorage.setItem("token", response.data.token);

         if(response.data.role == "employer") {
            navigate("/dashboard");
         } else {
            navigate("/home");
         }
      } catch (error) {
         toast.error(error.response.data.message);
      }

   }

   return (
      <div className="w-full h-[calc((100vh)-(80px))] pt-[100px] pb-[50px]  bg-linear-to-b from-green-100 to-white flex flex-col justify-center items-center gap-4">
         <h1 className="font-bold text-2xl text-blue-400 text-shadow-md mb-2 md:text-3xl">PartTime<span className="text-lime-400">Buddy</span></h1>

         <div className="w-[90%] border border-slate-200 p-5 rounded-lg flex flex-col justify-center items-center gap-4 md:w-[500px]">
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

            <button
               onClick={handleLogin}
               className="bg-blue-400 text-white p-2 rounded-md w-full hover:bg-blue-600 transition-colors">Login</button>
         </div>
         <hr className="border border-slate-400 w-[90%] md:w-[500px]" />
         <span className="">Need an account? <Link to="/register" className="font-semibold text-blue-400">Register</Link></span>
      </div>
   );
}
import toast from "react-hot-toast";
export default LoginPage;