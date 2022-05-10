import {
  SHOW_DRIVER_MODAL,
  SHOW_MODAL,
  SHOW_OPERATOR_MODAL,
} from "./actionTypes";

export const showModalActionCreator = (value) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: value,
  });
};

export const showOperatorModalAC = (value) => (dispatch) => {
  dispatch({
    type: SHOW_OPERATOR_MODAL,
    payload: value,
  });
};

export const showDriverModalAC = (value) => (dispatch) => {
  dispatch({
    type: SHOW_DRIVER_MODAL,
    payload: value,
  });
};
