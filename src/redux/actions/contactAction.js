import { SEND_MESSAGE } from "./actionTypes";

// send message action creator
export const sendMessage = (contactData) => (dispatch) => {
  fetch("https://phantom-backend-elites.herokuapp.com/api/v1/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data) {
        dispatch({
          type: SEND_MESSAGE,
          payload: data.data,
          message: data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
