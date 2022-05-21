import {
  ASSIGN_BUS_SUCCESS,
  ASSIGN_BUS_FAIL,
  FETCH_DRIVERS_ASSIGNED_BUSES,
} from "./actionTypes";

// get all action creator
export const fetchDriversAssigned = () => (dispatch) => {
  fetch(
    "https://phantom-backend-elites.herokuapp.com/api/v1/drivers/assigned-buses"
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_DRIVERS_ASSIGNED_BUSES,
        payload: data,
      });
    });
};

// Assign driver bus action creator
export const assignDriverBus = (assignData) => (dispatch) => {
  fetch(
    "https://phantom-backend-elites.herokuapp.com/api/v1/drivers/assign-bus",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assignData),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.result) {
        dispatch({
          type: ASSIGN_BUS_SUCCESS,
          plateNo: data.result.plateNo,
          driverFirstname: data.result.drivers.firstName,
          driverLastname: data.result.drivers.lastName,
          message: data.message,
        });
      } else {
        dispatch({
          type: ASSIGN_BUS_FAIL,
          payload: data.error,
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
