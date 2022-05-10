import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import employeesReducer from "./employeesReducer";
import showModalReducer from "./showModalReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  contactReducer,
  employeesReducer,
  showModalReducer,
});

export default allReducers;
