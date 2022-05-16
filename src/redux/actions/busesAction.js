import {
  REGISTER_BUS,
  FETCH_BUSES,
  REGISTER_BUS_FAIL,
  DELETE_BUS,
  UPDATE_BUS,
  UPDATE_BUS_FAIL,
} from "./actionTypes";

// get all action creator
export const fetchBuses = () => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/buses")
    .then((res) => res.json())
    .then((buses) =>
      dispatch({
        type: FETCH_BUSES,
        payload: buses,
      })
    );
};
// register action creator
export const registerBuses = (busData) => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/buses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(busData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.bus) {
        dispatch({
          type: REGISTER_BUS,
          payload: data.bus,
          message: data.message,
        });
      } else {
        dispatch({
          type: REGISTER_BUS_FAIL,
          payload: data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// delete action creator
export const deleteBus = (plateNo) => (dispatch) => {
  fetch(
    `https://phantom-backend-elites.herokuapp.com/api/v1/buses/${plateNo}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: DELETE_BUS,
        payload: plateNo,
        message: data.message,
      });
    });
};

// update action creator
export const updateBus = (plateNo, updatedData) => (dispatch) => {
  fetch(
    `https://phantom-backend-elites.herokuapp.com/api/v1/buses/${plateNo}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.bus) {
        dispatch({
          type: UPDATE_BUS,
          payload: plateNo,
          message: data.message,
          newData: data.bus,
        });
      } else {
        dispatch({
          type: UPDATE_BUS_FAIL,
          payload: data.error,
        });
      }
    });
};
