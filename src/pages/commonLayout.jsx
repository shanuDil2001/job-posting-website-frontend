import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function CommonLayout() {
   return (
      <div className="w-full">
         <Header />
         <div className="w-full h-full flex justify-center bg-linear-to-t from-green-100 to-white">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}
export default CommonLayout;