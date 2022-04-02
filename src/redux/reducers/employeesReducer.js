import { toast } from "react-toastify";
import {
  REGISTER,
  FETCH_EMPLOYEES,
  REGISTER_EMPLOYEES_FAIL,
  DELETE_OPERATOR,
  UPDATE_OPERATOR,
  UPDATE_OPERATOR_FAIL,
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
    case UPDATE_OPERATOR: {
      const updatedEmployees = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return action.newData;
        }
        return employee;
      });
      return {
        ...state,
        employees: updatedEmployees,
        message: toast.success("Successfully Updated", {
          position: "top-center",
        }),
      };
    }
    case REGISTER_EMPLOYEES_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case UPDATE_OPERATOR_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_OPERATOR:
      return {
        ...state,
        employees: state.employees.filter((employee) => {
          return employee.id !== action.payload;
        }),
        message: toast.success(`${action.message}`, {
          position: "top-center",
        }),
      };
    default:
      return state;
  }
};

export default employeesReducer;
