import StatCard from "./statCard";

function Stats() {
   return (
      <div className="w-full h-[700px] bg-linear-to-b from-green-100 to-white flex flex-col items-center justify-center gap-4 md:h-[250px] md:flex-row md:gap-8">
         <StatCard title="Jobs" count="500"/>
         <StatCard title="Categories" count="30"/>
         <StatCard title="Users" count="1500"/>
      </div>
   );
}
export default Stats;