import { toast } from "react-toastify";
import {
  FETCH_ROLES,
  CREATE_ROLES,
  HANDLE_ROLES_ERRORS,
  DELETE_ROLES,
  UPDATE_ROLES,
} from "../actions/actionTypes";

const initialState = {
  roles: [],
  message: "",
  roleExistsError: "",
  isPending: true,
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES:
      return {
        ...state,
        roles: action.payload,
        isPending: false,
      };
    case CREATE_ROLES:
      return {
        ...state,
        roles: [...state.roles, action.payload],
        message: toast.success("Role created successfully", {
          position: "top-center",
        }),
        roleExistsError: "",
      };
    case HANDLE_ROLES_ERRORS:
      return {
        ...state,
        roleExistsError: action.payload,
      };
    case DELETE_ROLES:
      return {
        ...state,
        roles: state.roles.filter((role) => role.id !== action.payload),
        message: toast.success("Role deleted successfully", {
          position: "top-center",
        }),
      };
    case UPDATE_ROLES: {
      const updatedRoles = state.roles.map((role) => {
        if (role.id === action.payload) {
          console.log("ROLE ID", role.id, "Payload", action.payload);
          return action.newData;
        }
        return role;
      });
      return {
        ...state,
        roles: updatedRoles,
        message: toast.success("Role successfully Updated", {
          position: "top-center",
        }),
      };
    }
    default:
      return state;
  }
};

export default roleReducer;
