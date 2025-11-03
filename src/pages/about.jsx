function About() {
   return (
      <div className="w-full md:h-[calc((100vh)-(80px))] pt-[65px]">
         <div className="w-[80%] mx-auto flex flex-col justify-center items-start mb-8 md:mb-16 md:w-[60%] md:flex-row md:justify-center md:items-center md:mt-8">
            <div className="md:min-w-[200px] md:h-full md:flex md:justify-center md:items-center md:mr-4 md:rounded-lg md:border md:border-green-300 md:shadow-md md:p-4">
               <h2 className="font-semibold text-2xl text-blue-400 text-shadow-md py-4 md:text-2xl md:my-0">About Us</h2>
            </div>
            <p className="">
               PartTimeBuddy connects students with flexible part-time job opportunities. Developed as a university project, our platform helps students balance their academic life with valuable work experience while giving employers access to talented, motivated, and reliable young professionals.
            </p>
         </div>
         <div className="w-[80%] mx-auto flex flex-col justify-center items-start mb-8 md:mb-16 md:w-[60%] md:flex-row md:justify-center md:items-center">
            <div className="md:min-w-[200px] md:h-full md:flex md:justify-center md:items-center md:mr-4 md:rounded-lg md:border md:border-green-300 md:shadow-md md:p-4">
               <h2 className="font-semibold text-2xl text-blue-400 text-shadow-md py-4 md:text-2xl md:my-0">Our Mission</h2>
            </div>
            <p className="">
               To empower university students by providing accessible, flexible, and meaningful part-time job opportunities that enhance their professional growth, support their education, and build career confidence. We aim to make part-time employment easy, fair, and rewarding for both students and employers.
            </p>
         </div>
         <div className="w-[80%] mx-auto flex flex-col justify-center items-start mb-8 md:mb-16 md:w-[60%] md:flex-row md:justify-center md:items-center">
            <div className="md:min-w-[200px] md:h-full md:flex md:justify-center md:items-center md:mr-4 md:rounded-lg md:border md:border-green-300 md:shadow-md md:p-4">
               <h2 className="font-semibold text-2xl text-blue-400 text-shadow-md py-4 md:text-2xl md:my-0">Our Vision</h2>
            </div>
            <p className="">
               To become the leading platform in Sri Lanka (and beyond) that transforms how students and employers connect - creating a future where every student can easily find work that fits their skills, schedule, and goals.
            </p>
         </div>
      </div>
   );
}
export default About;