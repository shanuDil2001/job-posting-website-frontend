import Footer from "../../components/footer";
import Header from "../../components/student/header";
import { Outlet } from "react-router-dom";

function StudentLayout() {
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
export default StudentLayout;