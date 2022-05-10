import {
  SHOW_ROLE_MODAL,
  SHOW_MODAL,
  SHOW_PERMISSION_MODAL,
} from "./actionTypes";

export const showModalActionCreator = (value) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: value,
  });
};

export const showPermissionModalAC = (value) => (dispatch) => {
  dispatch({
    type: SHOW_PERMISSION_MODAL,
    payload: value,
  });
};

export const showRoleModalAC = (value) => (dispatch) => {
  dispatch({
    type: SHOW_ROLE_MODAL,
    payload: value,
  });
};
