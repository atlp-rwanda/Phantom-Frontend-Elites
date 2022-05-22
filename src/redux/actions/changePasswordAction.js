import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  LOADING_ACTION,
} from "./actionTypes";

// Change password action creator
export const changePassword = (id, credentials, navigate) => (dispatch) => {
  dispatch({
    type: LOADING_ACTION,
    payload: true,
  });
  fetch(
    `https://phantom-backend-elites.herokuapp.com/api/v1/changepassword/${id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        dispatch({
          type: CHANGE_PASSWORD_SUCCESS,
          payload: id,
          message: data.message,
        });
        dispatch({
          type: LOADING_ACTION,
          payload: false,
        });
        navigate("/login");
      } else {
        dispatch({
          type: CHANGE_PASSWORD_FAIL,
          payload: data.error,
        });
        dispatch({
          type: LOADING_ACTION,
          payload: false,
        });
      }
    });
};