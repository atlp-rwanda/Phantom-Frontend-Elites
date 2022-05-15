import { ASSIGN_BUS_SUCCESS, ASSIGN_BUS_FAIL } from "./actionTypes";

// Assign driver bus action creator
export const assignDriverBus = (assignData) => (dispatch) => {
  console.log("Assigned data ====", assignData);
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
      console.log("data in the action---", data);
      if (data) {
        console.log("DATA IN ACTION", data.result.plateNo);
        console.log("data in action", data.result.drivers.firstName);
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
