import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";
import Header from "../../components/employer/header";

function EmployerLayout() {
   return (
      <div className="w-full">
         <Header />
         <div className="w-full h-full flex justify-center bg-linear-to-t from-green-100 to-white pt-[65px]">
            <Outlet />
         </div>
      </div>
   );
}
export default EmployerLayout;