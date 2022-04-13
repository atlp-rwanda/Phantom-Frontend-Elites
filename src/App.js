// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imported components
import Home from "./components/Home";
import About from "./components/About";
import Operators from "./components/AdminDashboard/Operators";
import OperatorRegistrationModel from "./components/AdminDashboard/OperatorRegistrationModel";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <Router>
      <div className="font-roboto">
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/operators" element={<Operators />} />
            <Route path="/modal" element={<OperatorRegistrationModel />} />
          </Routes>
        </React.StrictMode>
      </div>
    </Router>
  );
};

export default App;
