import { SHOW_MODAL } from "../actions/actionTypes";

const initialState = {
  isModalOpen: false,
};

export const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
};
