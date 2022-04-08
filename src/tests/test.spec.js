import reducers from "../redux/reducers";

test("reducers", () => {
  const state = reducers({ counterReducer: 1 }, { type: "RESET" });
  expect(state).toEqual({ counterReducer: 0 });
});

test("reducers", () => {
  const state = reducers({ counterReducer: 0 }, { type: "INCREMENT" });
  expect(state).toEqual({ counterReducer: 1 });
});

test("reducers", () => {
  const state = reducers({ counterReducer: 1 }, { type: "DECREMENT" });
  expect(state).toEqual({ counterReducer: 0 });
});
