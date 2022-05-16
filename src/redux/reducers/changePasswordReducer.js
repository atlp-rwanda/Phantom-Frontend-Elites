import { toast } from "react-toastify";
import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  LOADING_ACTION,
} from "../actions/actionTypes";
const initialState = {
  message: "",
  error: "",
  showLoading: false,
};

const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        message: toast.success(`${action.message}`, {
          position: "top-center",
        }),
        error: "",
      };
    }
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING_ACTION:
      return {
        ...state,
        showLoading: action.payload,
      };
    default:
      return state;
  }
};

export default changePasswordReducer;
