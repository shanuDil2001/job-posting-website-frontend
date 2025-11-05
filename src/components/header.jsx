import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();

   return (
      <header className="fixed shadow-lg w-full h-[65px] bg-slate-100 text-slate-500 font-semibold flex justify-between z-10 md:flex md:justify-between md:items-center">
         <Link to="/" className="text-xl">
            <img className="w-[180px] h-[60px] object-cover" src="/logo.png" />
         </Link>

         {
            isMenuOpen && (
               <nav className="fixed top-0 left-0 w-screen h-screen z-10 bg-linear-to-b from-green-100 to-white flex flex-col justify-start items-center gap-3 md:hidden">
                  <button
                     onClick={() => setIsMenuOpen(false)}
                     className="w-[50px] bg-slate-300 p-2 absolute top-5 -right-2.5 rounded-xl">
                     <FaTimes className="text-2xl text-red-500" />
                  </button>

                  <a href="/" className="mt-20  shadow w-[90%] p-2 text-center rounded-md">Home</a>
                  <a href="/jobs" className="mt-1  shadow w-[90%] p-2 text-center rounded-md">Jobs</a>
                  <a href="/about" className="mt-1  shadow w-[90%] p-2 text-center rounded-md">About</a>
                  <button
                     onClick={() => navigate("/login")}
                     className="bg-slate-200  shadow text-blue-600 font-semibold w-[90%] px-4 py-2 rounded hover:bg-gray-200">Login</button>
               </nav>
            )
         }

         <nav className="space-x-5 hidden md:w-[calc((100%)-(180px))] md:flex md:justify-center md:items-center">
            <Link to="/" className="text-blue-600 font-semibold hover:text-slate-600">Home</Link>
            <Link to="/jobs" className="text-blue-600 font-semibold hover:text-slate-600">Jobs</Link>
            <Link to="/about" className="text-blue-600 font-semibold hover:text-slate-600">About</Link>
         </nav>

         <button
            onClick={() => navigate("/login")}
            className="hidden md:block md:w-[100px] bg-slate-300 text-blue-600 font-semibold px-4 py-2 rounded hover:bg-slate-500 hover:text-slate-200 me-5">Login</button>

         <button className="me-3 md:hidden" onClick={() => setIsMenuOpen(true)}>
            <GiHamburgerMenu className="text-2xl text-slate-950" />
         </button>
      </header >
   );
}
export default Header;