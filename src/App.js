// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// imported components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import OperatorDashboard from "./components/AdminDashboard/OperatorDashboard";
import DriverDashboard from "./components/AdminDashboard/DriverDashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UpdateProfile from "./components/UpdateProfile";
import Dashboard from "./components/AdminDashboard/Dashboard";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <Router>
      <div className="font-roboto">
        <ToastContainer />
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/operators" element={<OperatorDashboard />} />
            <Route path="/drivers" element={<DriverDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UpdateProfile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </React.StrictMode>
      </div>
    </Router>
  );
};

export default App;
