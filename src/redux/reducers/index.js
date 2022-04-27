import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import employeesReducer from "./employeesReducer";
import { showModalReducer } from "./showModalReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  counterReducer,
  employeesReducer,
  showModalReducer,
});

export default allReducers;
