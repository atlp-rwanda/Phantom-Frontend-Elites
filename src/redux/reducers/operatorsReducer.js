import { toast } from "react-toastify";
import {
  REGISTER,
  FETCH_OPERATORS,
  REGISTER_OPERATOR_FAIL,
} from "../actions/actionTypes";
const initialState = {
  operators: [],
  message: "",
  errors: "",
};

const operatorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OPERATORS:
      return {
        ...state,
        operators: action.payload,
      };
    case REGISTER:
      return {
        ...state,
        operators: [...state.operators, action.payload],
        message: toast.success("Successfully Registered", {
          position: "top-center",
        }),
      };
    case REGISTER_OPERATOR_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default operatorsReducer;
