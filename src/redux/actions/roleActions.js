import {
  FETCH_ROLES,
  CREATE_ROLES,
  HANDLE_ROLES_ERRORS,
  DELETE_ROLES,
  UPDATE_ROLES,
  UPDATE_ROLE_FAIL,
} from "./actionTypes";

// ACTION CREATORS
export const fetchRoles = () => async (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/roles")
    .then((res) => res.json())
    .then((roles) => {
      dispatch({
        type: FETCH_ROLES,
        payload: roles,
      });
    });
};

export const createRole = (roleData) => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/roles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(roleData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.data) {
        dispatch({
          type: CREATE_ROLES,
          payload: data.data,
        });
      } else {
        dispatch({
          type: HANDLE_ROLES_ERRORS,
          payload: data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// DELETE ACTION
export const deleteRole = (id) => (dispatch) => {
  fetch(`https://phantom-backend-elites.herokuapp.com/api/v1/roles/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: DELETE_ROLES, payload: id, message: data.message })
    )
    .catch((err) => {
      console.log(err.message);
    });
};

// UPDATE ROLE ACTION CREATOR
export const updateRole = (id, updatedData) => (dispatch) => {
  fetch(`https://phantom-backend-elites.herokuapp.com/api/v1/roles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data) {
        dispatch({
          type: UPDATE_ROLES,
          payload: id,
          message: data.message,
          newData: data.data,
        });
      } else {
        dispatch({
          type: UPDATE_ROLE_FAIL,
          payload: data.error,
        });
      }
    });
};
