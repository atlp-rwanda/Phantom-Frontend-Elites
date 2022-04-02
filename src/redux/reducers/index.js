import { combineReducers } from "redux";
import showModalReducer from "./showModalReducer";
import profileReducer from "./profileReducer"
import authreducer from "./authReducer";
import errorReducer from "./errorReducer"
import employeesReducer from "./employeesReducer";
/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  showModalReducer,
  profileReducer,
  authreducer,
  errorReducer,
  employeesReducer,
});

export default allReducers;
