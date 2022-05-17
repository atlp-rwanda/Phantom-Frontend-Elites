import {
  SHOW_DRIVER_MODAL,
  SHOW_MODAL,
  SHOW_OPERATOR_MODAL,
  SHOW_PROFILE_MODAL,
} from "../actions/actionTypes";

const initialState = {
  isModalOpen: false,
  isOperatorModalOpen: false,
  isDriverModalOpen: false,
  isProfileModalOpen: false,
};

export const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isModalOpen: action.payload,
        isOperatorModalOpen: false,
        isDriverModalOpen: false,
        isProfileModalOpen: false,
      };
    case SHOW_OPERATOR_MODAL:
      return {
        isOperatorModalOpen: action.payload,
        isModalOpen: false,
        isDriverModalOpen: false,
        isProfileModalOpen: false,
      };
    case SHOW_DRIVER_MODAL:
      return {
        isDriverModalOpen: action.payload,
        isModalOpen: false,
        isOperatorModalOpen: false,
        isProfileModalOpen: false,
      };
    case SHOW_PROFILE_MODAL:
      return {
        isProfileModalOpen: action.payload,
        isDriverModalOpen: false,
        isModalOpen: false,
        isOperatorModalOpen: false,
      }  
    default:
      return state;
  }
};

export default showModalReducer;
