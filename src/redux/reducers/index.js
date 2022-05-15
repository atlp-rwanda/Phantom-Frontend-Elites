import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import showModalReducer from "./showModalReducer";
import busesReducer from "./busesReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  employeesReducer,
  showModalReducer,
  busesReducer,
});

export default allReducers;
