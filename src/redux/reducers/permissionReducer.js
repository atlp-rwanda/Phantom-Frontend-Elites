import { toast } from "react-toastify";
import {
  FETCH_PERMISSIONS,
  CREATE_PERMISSIONS,
  HANDLE_PERMISSIONS_ERRORS,
  DELETE_PERMISSIONS,
  UPDATE_PERMISSIONS,
} from "../actions/actionTypes";

const initialState = {
  permissions: [],
  message: "",
  permissionExistsError: "",
  isPending: true,
};

const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERMISSIONS:
      return {
        ...state,
        permissions: action.payload,
        isPending: false,
      };
    case CREATE_PERMISSIONS:
      return {
        ...state,
        permissions: [...state.permissions, action.payload],
        message: toast.success("Permission created", {
          position: "top-center",
        }),
        permissionExistsError: "",
      };
    case HANDLE_PERMISSIONS_ERRORS:
      return {
        ...state,
        permissionExistsError: action.payload,
      };
    case DELETE_PERMISSIONS:
      return {
        ...state,
        permissions: state.permissions.filter(
          (permission) => permission.id !== action.payload
        ),
        message: toast.success("Permissions deleted", {
          position: "top-center",
        }),
      };
    case UPDATE_PERMISSIONS: {
      const updatedPermissions = state.permissions.map((permission) => {
        if (permission.id === action.payload) {
          return action.newData;
        }
        return permission;
      });
      return {
        ...state,
        permissions: updatedPermissions,
        message: toast.success("Permission updated", {
          position: "top-center",
        }),
      };
    }
    default:
      return state;
  }
};

export default permissionReducer;
