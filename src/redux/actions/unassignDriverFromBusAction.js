import { UNASSIGN_DRIVER_FROM_BUS } from "./actionTypes";

// delete action creator
export const unassign = (driverId) => (dispatch) => {
  fetch(
    `https://phantom-backend-elites.herokuapp.com/api/v1/drivers/unassign-bus/${driverId}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: UNASSIGN_DRIVER_FROM_BUS,
        firstname: data.result.firstName,
        lastname: data.result.lastName,
        payload: data.message,
      });
    })
    .catch((err) => console.log(err));
};
