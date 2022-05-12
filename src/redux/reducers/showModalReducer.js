import {
  SHOW_DRIVER_MODAL,
  SHOW_MODAL,
  SHOW_OPERATOR_MODAL,
} from "../actions/actionTypes";

const initialState = {
  isModalOpen: false,
  isOperatorModalOpen: false,
  isDriverModalOpen: false,
};

export const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isModalOpen: action.payload,
        isOperatorModalOpen: false,
        isDriverModalOpen: false,
      };
    case SHOW_OPERATOR_MODAL:
      return {
        isOperatorModalOpen: action.payload,
        isModalOpen: false,
        isDriverModalOpen: false,
      };
    case SHOW_DRIVER_MODAL:
      return {
        isDriverModalOpen: action.payload,
        isModalOpen: false,
        isOperatorModalOpen: false,
      };
    default:
      return state;
  }
};

export default showModalReducer;
