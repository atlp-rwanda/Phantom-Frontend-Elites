import { REGISTER, FETCH_DRIVERS } from "./actionTypes";

export const registerDriversAction = {
  type: REGISTER,
};

export const register = (driverData) => (dispatch) => {
  fetch("http://localhost:7000/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(driverData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) =>
      dispatch({
        type: REGISTER,
        payload: data.data,
      })
    )
    .catch(() => {
      console.log("The fetch url is empty");
    });
};

export const fetchDrivers = () => (dispatch) => {
  fetch("http://localhost:7000/api/v1/users")
    .then((res) => {
      return res.json();
    })
    .then((drivers) => {
      dispatch({
        type: FETCH_DRIVERS,
        payload: drivers,
      });
    });
};
