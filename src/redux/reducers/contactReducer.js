import { toast } from "react-toastify";
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
        messages: [...state.messages, action.payload],
        sentStatus: toast.success("Your message was delivered!", {
          position: "top-center",
        }),
      };
    default:
      return state;
  }
};

export default employeesReducer;
