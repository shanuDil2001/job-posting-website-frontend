import { FaRegCopyright } from "react-icons/fa";

function Footer() {
   return (
      <div className="w-full h-20 bg-slate-800 flex justify-center items-center">
         <span className="items-center w-[90%] text-center text-sm font-semibold text-slate-400"><FaRegCopyright className="inline-block"/> 2025 PartTimeBuddy.com (Pvt) Ltd. All Rights Reserved</span>
      </div>
   );
}
export default Footer;