// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imported components
// import ResetLink from "./components/ResetLink";
import ChangePassword from "./components/ChangePassword";
// import Validation from "./components/Validation";
import "./main";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <div className="main">
      <Router>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<ChangePassword />} />
          </Routes>
        </React.StrictMode>
      </Router>
    </div>
  );
};

export default App;
