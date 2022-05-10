// import { toast } from "react-toastify";
import swal from "sweetalert";

import { SEND_MESSAGE } from "../actions/actionTypes";
const initialState = {
  messages: [],
  sentStatus: "",
  isPending: true,
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        message: swal(
          "Thanks!",
          "Your message was successfully sent!",
          "success"
        ),
      };
    default:
      return state;
  }
};

export default employeesReducer;
