import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
