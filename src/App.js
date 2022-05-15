// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// imported components
import Home from "./components/Home";
import About from "./components/About";
import OperatorDashboard from "./components/AdminDashboard/OperatorDashboard";
import DriverDashboard from "./components/AdminDashboard/DriverDashboard";
import ManageBuses from "./components/AdminDashboard/ManageBuses";
import ChangePassword from "./components/ChangePassword";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";

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
            <Route path="/operators" element={<OperatorDashboard />} />
            <Route path="/drivers" element={<DriverDashboard />} />
            <Route path="/buses" element={<ManageBuses />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UpdateProfile />} />
          </Routes>
        </React.StrictMode>
      </div>
    </Router>
  );
};

export default App;
