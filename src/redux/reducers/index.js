import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import employeesReducer from "./employeesReducer";
import showModalReducer from "./showModalReducer";
import authreducer from "./authReducer";
import errorReducer from "./errorReducer";
import { showRolePermissionModalReducer } from "./showRolePermissionModalReducer";
import roleReducer from "./roleReducer";
import permissionReducer from "./permissionReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  contactReducer,
  employeesReducer,
  showModalReducer,
  authreducer,
  errorReducer,
  showRolePermissionModalReducer,
  roleReducer,
  permissionReducer,
});

export default allReducers;
