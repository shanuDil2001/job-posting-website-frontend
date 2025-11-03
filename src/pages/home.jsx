import SearchBar from "../components/searchBar";
import Stats from "../components/stats";

function Home() {
   return (
      <div className="w-full h-full pt-[65px] border-2 border-red-600">
         <SearchBar />
         <Stats />
      </div>
   );
}
export default Home;