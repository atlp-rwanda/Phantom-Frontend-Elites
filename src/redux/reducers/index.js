import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  contactReducer,
});

export default allReducers;
