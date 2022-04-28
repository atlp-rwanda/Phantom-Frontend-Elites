import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authreducer from "./authReducer";
import errorReducer from "./errorReducer"


/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  counterReducer,
  authreducer,
  errorReducer,
});

export default allReducers;
