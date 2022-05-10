import {
  SHOW_ROLE_MODAL,
  SHOW_MODAL,
  SHOW_PERMISSION_MODAL,
} from "../actions/actionTypes";

const initialState = {
  isModalOpen: false,
  isRoleModalOpen: false,
  isPermissionModalOpen: false,
};

export const showRolePermissionModalReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isModalOpen: action.payload,
        isRoleModalOpen: false,
        isPermissionModalOpen: false,
      };
    case SHOW_PERMISSION_MODAL:
      return {
        isPermissionModalOpen: action.payload,
        isModalOpen: false,
        isRoleModalOpen: false,
      };
    case SHOW_ROLE_MODAL:
      return {
        isRoleModalOpen: action.payload,
        isModalOpen: false,
        isPermissionModalOpen: false,
      };
    default:
      return state;
  }
};

export default showRolePermissionModalReducer;
