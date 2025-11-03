import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function CommonLayout() {
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
export default CommonLayout;