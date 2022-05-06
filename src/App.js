// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imported components
import ResetLink from "./components/ResetLink";
import ChangePassword from "./components/ChangePassword";
import { ToastContainer } from "react-toastify";
import "./main.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import About from "./components/About";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reset-link" element={<ResetLink />} />
            <Route path="/reset-password" element={<ChangePassword />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </React.StrictMode>
      </Router>
    </>
  );
};

export default App;
