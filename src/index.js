import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://phantom-backend-elites.herokuapp.com/api/v1";


import "./main.css";
import "./langConfig";
import App from "./App";
import PageLoadSpinner from "./skeleton/PageLoadSpinner";
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

