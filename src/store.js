import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./redux/reducers/index";
import thunk from "redux-thunk";

/* =============================================
Created store for all app states and takes an
overall reducer functions and a second argument
to help in  Redux DevTools extension
============================================== */
const middleware = [thunk];

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
