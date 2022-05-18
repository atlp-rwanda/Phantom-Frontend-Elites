import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./main.css";
import "react-phone-number-input/style.css";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://phantom-backend-elites.herokuapp.com/api/v1";

// creation of container
const container = document.getElementById("root");

// App render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
