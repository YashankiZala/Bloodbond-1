import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const Layout = () => {
    const [horiNavVisibility, setHoriNavVisibility] = useState(false);

    const handleBarClick = () => {
      setHoriNavVisibility(!horiNavVisibility);
    };
  
    const handleNavCross = () => {
      setHoriNavVisibility(false);
    };
  
  return (
    <>
      <Navbar horiNavVisibility={horiNavVisibility} handleBarClick={handleBarClick} handleNavCross={handleNavCross} />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;