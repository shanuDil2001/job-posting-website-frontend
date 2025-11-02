function StatCard(props){
   return (
      <div className="w-[90%] h-[200px] bg-white border-2 border-gray-300 rounded-lg shadow-md flex flex-col justify-center items-center md:w-1/4">
         <h2 className="font-bold text-2xl mb-4">{props.title}</h2>
         <span className="text-5xl font-semibold text-blue-400 text-shadow-lg">{props.count}</span>
      </div>
   );
}
export default StatCard;