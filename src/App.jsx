import { Route, Routes } from "react-router-dom";
import Jobs from "./pages/jobs";
import About from "./pages/about";
import CommonLayout from "./pages/commonLayout";
import Home from "./pages/home";

function App() {

  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
