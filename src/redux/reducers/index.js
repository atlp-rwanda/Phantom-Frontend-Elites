import { combineReducers } from "redux";
import authreducer from "./authReducer";
import errorReducer from "./errorReducer"
import contactReducer from "./contactReducer"


/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  contactReducer,
  authreducer,
  errorReducer,
});

export default allReducers;
