import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./main.css";
import "react-phone-number-input/style.css";
import store from "./store";
import "./main.css";
import "./langConfig";
import App from "./App";
import PageLoadSpinner from "./skeleton/PageLoadSpinner";
import axios from "axios";

axios.defaults.baseURL = "https://phantom-backend-elites.herokuapp.com/api/v1";


// creation of container
const container = document.getElementById("root");

// App render
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<PageLoadSpinner />}>
      <App />
    </Suspense>
  </Provider>,
  container
);