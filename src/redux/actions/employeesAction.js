import {
  REGISTER,
  FETCH_EMPLOYEES,
  REGISTER_EMPLOYEES_FAIL,
} from "./actionTypes";

export const registerEmployeessAction = {
  type: REGISTER,
};

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
