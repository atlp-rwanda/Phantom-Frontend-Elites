import { toast } from "react-toastify";
import {
  REGISTER_BUS,
  FETCH_BUSES,
  REGISTER_BUS_FAIL,
  DELETE_BUS,
  UPDATE_BUS,
  UPDATE_BUS_FAIL,
} from "../actions/actionTypes";
const initialState = {
  buses: [],
  message: "",
  errors: "",
  isPending: true,
};

const busesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSES:
      return {
        ...state,
        buses: action.payload,
        isPending: false,
      };
    case REGISTER_BUS:
      return {
        ...state,
        buses: [...state.buses, action.payload],
        message: toast.success("Bus successfully Added", {
          position: "top-center",
        }),
        errors: "",
      };
    case UPDATE_BUS: {
      const updatedBuses = state.buses.map((bus) => {
        if (bus.plateNo === action.payload) {
          return action.newData;
        }
        return bus;
      });
      return {
        ...state,
        buses: updatedBuses,
        message: toast.success("Successfully Updated", {
          position: "top-center",
        }),
      };
    }
    case REGISTER_BUS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case UPDATE_BUS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_BUS:
      return {
        ...state,
        buses: state.buses.filter((bus) => {
          return bus.plateNo !== action.payload;
        }),
        message: toast.success(`${action.message}`, {
          position: "top-center",
        }),
      };
    default:
      return state;
  }
};

export default busesReducer;