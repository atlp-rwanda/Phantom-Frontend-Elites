// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// imported components
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";

import OperatorDashboard from "./components/AdminDashboard/OperatorDashboard";
import DriverDashboard from "./components/AdminDashboard/DriverDashboard";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <Router>
      <div className="font-roboto">
        <Navbar />
        <ToastContainer />
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UpdateProfile />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/operators" element={<OperatorDashboard />} />
            <Route path="/drivers" element={<DriverDashboard />} />
            <Route path="/operators" element={<OperatorDashboard />} />
            <Route path="/drivers" element={<DriverDashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </React.StrictMode>
      </div>
    </Router>
  );
};

export default App;
