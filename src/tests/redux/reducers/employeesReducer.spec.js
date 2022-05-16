import employeesReducer from "../../../redux/reducers/employeesReducer";

describe("Employees Reducer", () => {
  describe("Employee Post Reducer", () => {
    it("Should return default state", () => {
      const initialState = undefined;
      const action = {};
      const newState = employeesReducer(initialState, action);
      expect(newState).toEqual({
        employees: [],
        errors: "",
        isPending: true,
        message: "",
      });
    });
  });
});
