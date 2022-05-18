import {
  SHOW_DRIVER_MODAL,
  SHOW_MODAL,
  SHOW_OPERATOR_MODAL,
  SHOW_BUS_MODAL,
  SHOW_ASSIGN_MODAL,
} from "../actions/actionTypes";

const initialState = {
  isModalOpen: false,
  isOperatorModalOpen: false,
  isDriverModalOpen: false,
  isBusModalOpen: false,
  isAssignModalOpen: false,
};

export const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isModalOpen: action.payload,
        isOperatorModalOpen: false,
        isDriverModalOpen: false,
        isBusModalOpen: false,
        isAssignModalOpen: false,
      };
    case SHOW_OPERATOR_MODAL:
      return {
        isOperatorModalOpen: action.payload,
        isModalOpen: false,
        isDriverModalOpen: false,
        isBusModalOpen: false,
        isAssignModalOpen: false,
      };
    case SHOW_DRIVER_MODAL:
      return {
        isDriverModalOpen: action.payload,
        isModalOpen: false,
        isOperatorModalOpen: false,
        isBusModalOpen: false,
        isAssignModalOpen: false,
      };
    case SHOW_BUS_MODAL:
      return {
        isBusModalOpen: action.payload,
        isModalOpen: false,
        isOperatorModalOpen: false,
        isDriverModalOpen: false,
        isAssignModalOpen: false,
      };
    case SHOW_ASSIGN_MODAL:
      return {
        isAssignModalOpen: action.payload,
        isModalOpen: false,
        isOperatorModalOpen: false,
        isDriverModalOpen: false,
        isBusModalOpen: false,
      };
    default:
      return state;
  }
};

export default showModalReducer;