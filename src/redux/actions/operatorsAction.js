import {
  REGISTER,
  FETCH_OPERATORS,
  REGISTER_OPERATOR_FAIL,
} from "./actionTypes";

export const registerOperatorsAction = {
  type: REGISTER,
};

export const register = (operatorData) => (dispatch) => {
  fetch("http://localhost:7000/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(operatorData),
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
          type: REGISTER_OPERATOR_FAIL,
          payload: data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const fetchOperators = () => (dispatch) => {
  fetch("http://localhost:7000/api/v1/users")
    .then((res) => res.json())
    .then((operators) =>
      dispatch({
        type: FETCH_OPERATORS,
        payload: operators,
      })
    );
};
