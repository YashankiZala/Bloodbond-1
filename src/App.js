import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./components/About";
import Donor from "./components/Donor";
import DonorDetails from "./components/DonorDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="donor" element={<Donor />} />
          <Route path="donordetails" element={<DonorDetails />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
