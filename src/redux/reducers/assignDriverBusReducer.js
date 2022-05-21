import { toast } from "react-toastify";
import {
  ASSIGN_BUS_SUCCESS,
  ASSIGN_BUS_FAIL,
  FETCH_DRIVERS_ASSIGNED_BUSES,
} from "../actions/actionTypes";
const initialState = {
  driversAssigned: [],
  driverFirstname: "",
  driverLastname: "",
  message: "",
  errors: "",
  isPending: true,
};

const busesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS_ASSIGNED_BUSES:
      return {
        ...state,
        driversAssigned: action.payload,
        isPending: false,
      };
    case ASSIGN_BUS_SUCCESS: {
      return {
        ...state,
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
        errors: toast.error(`${action.payload}`, {
          position: "top-center",
        }),
      };
    default:
      return state;
  }
};

export default busesReducer;