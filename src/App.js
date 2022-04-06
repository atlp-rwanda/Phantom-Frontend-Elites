// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// imported components
import Home from "./components/Home";
import Login from "./components/Login";

// imported store file
import store from "./store";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <React.StrictMode>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />             
            </Routes>
          </React.StrictMode>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
