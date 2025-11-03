import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";
import Header from "../../components/employer/header";

function EmployerLayout() {
   return (
      <div className="w-full">
         <Header />
         <div className="w-full h-full">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}
export default EmployerLayout;