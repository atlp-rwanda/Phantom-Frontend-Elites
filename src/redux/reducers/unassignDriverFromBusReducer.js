import { toast } from "react-toastify";
import { UNASSIGN_DRIVER_FROM_BUS } from "../actions/actionTypes";
const initialState = {
  firstname: "",
  lastname: "",
  message: "",
  errors: "",
};

const unassignDriverFromBusReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNASSIGN_DRIVER_FROM_BUS:
      return {
        ...state,
        firstname: action.firstname,
        lastname: action.lastname,
        message: toast.success(`${action.payload}`, {
          position: "top-center",
        }),
        errors: "",
      };
    default:
      return state;
  }
};

export default unassignDriverFromBusReducer;
