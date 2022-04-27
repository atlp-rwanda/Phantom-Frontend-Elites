import { toast } from "react-toastify";
import {
  REGISTER,
  FETCH_EMPLOYEES,
  REGISTER_EMPLOYEES_FAIL,
} from "../actions/actionTypes";
const initialState = {
  employees: [],
  message: "",
  errors: "",
  isPending: true,
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        isPending: false,
      };
    case REGISTER:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        message: toast.success("Successfully Registered", {
          position: "top-center",
        }),
        errors: "",
      };
    case REGISTER_EMPLOYEES_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
