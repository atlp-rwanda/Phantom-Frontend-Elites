// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// imported components
import ResetLink from "./components/ResetLink";
import ChangePassword from "./components/ChangePassword";
import Home from "./components/Home";
import About from "./components/About";
import UpdateProfile from "./components/UpdateProfile"
import Login from "./components/Login";
import OperatorDashboard from "./components/AdminDashboard/OperatorDashboard";
import DriverDashboard from "./components/AdminDashboard/DriverDashboard";
import Contact from "./components/Contact"
import Dashboard from "./components/AdminDashboard/Dashboard";
import ManageBuses from "./components/AdminDashboard/ManageBuses";
import PaginatedBoard from "./components/AdminDashboard/PaginatedBoard";
import OperatorsMainDashboard from "./components/OperatorsMainDashboard/OperatorsMainDashboard";
import ChangeMyPassword from "./components/AdminDashboard/ChildComponents/ChangeMyPassword";
import RoleDashboard from "./components/AdminDashboard/RoleDashboard";


/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <div className="font-roboto">
        <ToastContainer />
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reset-link" element={<ResetLink />} />
            <Route path="/reset-password" element={<ChangePassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UpdateProfile />} />
            <Route path="/operators" element={<OperatorDashboard />} />
            <Route path="/drivers" element={<DriverDashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/operators" element={<OperatorDashboard />} />
            <Route path="/drivers" element={<DriverDashboard />} />
            <Route path="/buses" element={<ManageBuses />} />
            <Route path="/changepassword" element={<ChangeMyPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UpdateProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/paginatedlist" element={<PaginatedBoard />} />
            <Route path="/operators-dashboard" element={<OperatorsMainDashboard />} />
            <Route path="/roles" element={<RoleDashboard />} />
          </Routes>
        </React.StrictMode>
      </div>
    </Router>
  );
};

export default App;
