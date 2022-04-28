// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imported components
import Home from "./components/Home";
import About from "./components/About";
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
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UpdateProfile />} />
         </Routes>
        </React.StrictMode>
      </div>
    </Router>
  );
};

export default App;
