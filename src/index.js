import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./main.css";
import store from "./store";

// creation of container
const container = document.getElementById("root");

// creation of a root
const root = ReactDOMClient.createRoot(container);

// App render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
