import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function Header() {
   const [open, setOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <header className="fixed shadow-lg w-full h-[65px] bg-slate-100 text-slate-500 font-semibold flex justify-between md:flex md:justify-between md:items-center">
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

                  <button className="mt-20 shadow w-[90%] p-2 text-center bg-red-300 text-blue-600 font-semibold rounded-md hover:bg-slate-500 hover:text-slate-200">Log Out</button>
               </nav>
            )
         }

         <div className="hidden md:block">
            <button className="px-2" onClick={() => { setOpen(true) }}>
               <img className="w-[50px] h-[50px]" src="/49.png" alt="profile-pic" />
            </button>
            <Modal open={open} onClose={() => { setOpen(false) }} center={false}
               styles={{
                  modal: {
                     top: '65px',
                     right: '0px',
                     position: 'absolute',
                     transform: 'none',
                     padding: '10px',
                     width: '120px'
                  },
               }}
            >
               <button className="mt-10 shadow w-full p-2 text-center bg-red-300 text-blue-600 font-semibold rounded-md hover:bg-slate-500 hover:text-slate-200">Logout</button>
            </Modal>
         </div>

         <button className="me-3 md:hidden" onClick={() => setIsMenuOpen(true)}>
            <GiHamburgerMenu className="text-2xl text-slate-950" />
         </button>
      </header >
   );
}
export default Header;