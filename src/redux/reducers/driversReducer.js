import { REGISTER, FETCH_DRIVERS } from "../actions/actionTypes";
const initialState = {
  drivers: [],
  driver: {},
};

const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };
    case REGISTER:
      return {
        ...state,
        drivers: [...state.drivers, action.payload],
      };
    default:
      return state;
  }
};

export default driversReducer;
