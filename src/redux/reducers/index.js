import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import employeesReducer from "./employeesReducer";
import { showRolePermissionModalReducer } from "./showRolePermissionModalReducer";
import roleReducer from "./roleReducer";
import permissionReducer from "./permissionReducer";

/* ==================================================
allReducers which combines all slice reducer functions
 into a single reducer function to pass to the store
===================================================== */

const allReducers = combineReducers({
  counterReducer,
  employeesReducer,
  showRolePermissionModalReducer,
  roleReducer,
  permissionReducer,
});

export default allReducers;
