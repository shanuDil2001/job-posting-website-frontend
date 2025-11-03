import { useState } from "react";
import { FaHandPointer } from "react-icons/fa";

function SearchBar() {
   const [location, setLocation] = useState("");
   const [jobTitle, setJobTitle] = useState("");

   return (
      <div className="w-full h-screen bg-linear-to-b from-white to-green-100 flex flex-col justify-center items-center md:h-[450px] md:bg-amber-00">
         <div className="flex flex-col justify-center items-center w-[60%] mb-8">
            <h1 className="font-bold text-3xl text-blue-400 text-shadow-md mb-8 md:text-5xl">PartTime<span className="text-lime-400">Buddy</span></h1>
            <p className="text-center font-extralight md:text-lg">PartTimeBuddy connects students with flexible part-time job opportunities. Developed as a university project, our platform helps students balance studies with work while providing employers access to motivated and capable talent.</p>
         </div>
         <div className="w-[60%] flex flex-col items-center md:flex-row md:gap-2 md:items-center md:w-[80%]">
            <input
               className="bg-slate-100 p-2 rounded-md mb-4 border border-gray-400 w-full shadow-md md:mb-0 md:w-1/2"
               type="text"
               placeholder="I'm looking for... (Eg: Job Title)"
               onChange={(event) => {
                  setJobTitle(event.target.value);
               }}
            />

            <select
               className="w-full p-2 bg-white border border-gray-300 rounded-lg text-gray-700 mb-4 shadow-md md:mb-0 md:w-1/4"
               defaultValue="Select Location"
               onChange={(event) => {
                  setLocation(event.target.value);
               }}
            >
               <option disabled value="Select Location">Select Location</option>
               <option value="Kandy">Kandy</option>
               <option value="Galle">Galle</option>
               <option value="Jaffna">Jaffna</option>
            </select>


            <button
               className="flex justify-center items-center gap-2 w-[50%] bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 transition-colors shadow-md md:w-1/4"
               type="submit"
               onClick={() => {
                  console.log(location);
                  console.log(jobTitle);
               }}
            >Search <FaHandPointer /></button>
         </div>
      </div>
   );
}
export default SearchBar;