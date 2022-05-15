import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import showModalReducer from "./showModalReducer";
import busesReducer from "./busesReducer";
import authreducer from "./authReducer";
import errorReducer from "./errorReducer";
import changePasswordReducer from "./changePasswordReducer";
import assignDriverBusReducer from "./assignDriverBusReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  employeesReducer,
  showModalReducer,
  busesReducer,
  authreducer,
  errorReducer,
  changePasswordReducer,
  assignDriverBusReducer,
});

export default allReducers;
