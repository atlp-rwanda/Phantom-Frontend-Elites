import {
  REGISTER,
  FETCH_EMPLOYEES,
  REGISTER_EMPLOYEES_FAIL,
  DELETE_OPERATOR,
  UPDATE_OPERATOR,
  UPDATE_OPERATOR_FAIL,
} from "./actionTypes";

// get all action creator
export const fetchEmployees = () => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/users")
    .then((res) => res.json())
    .then((employees) =>
      dispatch({
        type: FETCH_EMPLOYEES,
        payload: employees,
      })
    );
};
// register action creator
export const register = (employeeData) => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeeData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.data) {
        dispatch({
          type: REGISTER,
          payload: data.data,
          message: data.message,
        });
      } else {
        dispatch({
          type: REGISTER_EMPLOYEES_FAIL,
          payload: data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// delete action creator
export const deleteEmployee = (id) => (dispatch) => {
  fetch(`https://phantom-backend-elites.herokuapp.com/api/v1/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: DELETE_OPERATOR,
        payload: id,
        message: data.message,
      });
    });
};

// update action creator
export const updateEmployee = (id, updatedData) => (dispatch) => {
  fetch(
    `https://phantom-backend-elites.herokuapp.com/api/v1/users/profiles/${id}`,
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
          type: UPDATE_OPERATOR,
          payload: id,
          message: data.message,
          newData: data.data,
        });
      } else {
        dispatch({
          type: UPDATE_OPERATOR_FAIL,
          payload: data.error,
        });
      }
    });
};
