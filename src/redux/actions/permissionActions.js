import {
  FETCH_PERMISSIONS,
  CREATE_PERMISSIONS,
  HANDLE_PERMISSIONS_ERRORS,
  DELETE_PERMISSIONS,
  UPDATE_PERMISSIONS,
  UPDATE_PERMISSION_FAIL,
} from "./actionTypes";

// ACTION CREATORS
export const fetchPermissions = () => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/permissions")
    .then((res) => {
      res.json();
    })
    .then((permissions) => {
      console.log("--ACTION", permissions);
      dispatch({
        type: FETCH_PERMISSIONS,
        payload: permissions,
      });
    });
};

export const createPermission = (permissionData) => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/permissions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(permissionData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.data) {
        dispatch({
          type: CREATE_PERMISSIONS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: HANDLE_PERMISSIONS_ERRORS,
          payload: data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// DELETE ACTION
export const deletePermission = (id) => (dispatch) => {
  fetch(
    `https://phantom-backend-elites.herokuapp.com/api/v1/permissions/${id}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: DELETE_PERMISSIONS, payload: id, message: data.message })
    )
    .catch((err) => {
      console.log(err.message);
    });
};

// UPDATE PERMISSION ACTION CREATOR
export const updatePermission = (id, updatedData) => (dispatch) => {
  fetch(
    `https://phantom-backend-elites.herokuapp.com/api/v1/permissions/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.data) {
        dispatch({
          type: UPDATE_PERMISSIONS,
          payload: id,
          message: data.message,
          newData: data.data,
        });
      } else {
        dispatch({
          type: UPDATE_PERMISSION_FAIL,
          payload: data.error,
        });
      }
    });
};
