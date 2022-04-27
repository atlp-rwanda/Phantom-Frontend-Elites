import { SHOW_MODAL } from "./actionTypes";

export const showModalActionCreator = (value) => (dispatch) => {
  console.log("action creator");
  dispatch({
    type: SHOW_MODAL,
    payload: value,
  });
};
