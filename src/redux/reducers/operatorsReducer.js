import { REGISTER, FETCH_OPERATORS } from "../actions/actionTypes";
const initialState = {
  operators: [],
  operator: {},
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
        operator: [...state.operators, action.payload],
      };
    default:
      return state;
  }
};

export default operatorsReducer;
