import { REGISTER, FETCH_OPERATORS } from "./actionTypes";

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
      res.json();
    })
    .then((operator) =>
      dispatch({
        type: REGISTER,
        payload: operator,
      })
    )
    .catch(() => {
      console.log("The fetch url is empty");
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
