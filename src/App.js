// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imported components
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </React.StrictMode>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
