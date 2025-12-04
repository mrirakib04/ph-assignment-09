import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-[1480px] mx-auto w-full h-screen flex flex-col items-center">
      <Navbar></Navbar>
      <div className="py-12 w-full"></div>
      <div className="flex-1 w-full">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
