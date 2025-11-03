import { Route, Routes } from "react-router-dom";
import Jobs from "./pages/jobs";
import About from "./pages/about";
import CommonLayout from "./pages/commonLayout";
import Home from "./pages/home";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import { Toaster } from "react-hot-toast";
import StudentLayout from "./pages/student/studentLayout";

function App() {

  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/home" element={<StudentLayout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App
