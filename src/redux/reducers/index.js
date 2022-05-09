import { combineReducers } from "redux";
import authreducer from "./authReducer";
import errorReducer from "./errorReducer"
import contactReducer from "./contactReducer"

import employeesReducer from "./employeesReducer";
import showModalReducer from "./showModalReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  contactReducer,
  authreducer,
  errorReducer,
  employeesReducer,
  showModalReducer,
});

export default allReducers;
