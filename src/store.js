import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./redux/reducers/index";

/* =============================================
Created store for all app states and takes an
overall reducer functions and a second argument
to help in  Redux DevTools extension
============================================== */
const middleware = [thunk];

const store = createStore(allReducers, compose(applyMiddleware(...middleware)));

export default store;
