import { toast } from "react-toastify";
import { ASSIGN_BUS_SUCCESS, ASSIGN_BUS_FAIL } from "../actions/actionTypes";
const initialState = {
  plateNo: "",
  driverFirstname: "",
  driverLastname: "",
  message: "",
  errors: "",
};

const busesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN_BUS_SUCCESS: {
      return {
        ...state,
        plateNo: action.plateNo,
        driverFirstname: action.driverFirstname,
        driverLastname: action.driverLastname,
        message: toast.success(`${action.message}`, {
          position: "top-center",
        }),
      };
    }
    case ASSIGN_BUS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default busesReducer;
