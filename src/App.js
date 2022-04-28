// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imported components
import ResetLink from "./components/ResetLink";
import ChangePassword from "./components/ChangePassword";
import { ToastContainer } from "react-toastify";
import "./main";
import "react-toastify/dist/ReactToastify.css";

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
            <Route path="/" element={<ResetLink />} />
            <Route path="/reset-password" element={<ChangePassword />} />
          </Routes>
        </React.StrictMode>
      </Router>
    </>
  );
};

export default App;
