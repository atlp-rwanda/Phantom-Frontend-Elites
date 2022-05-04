import React from "react";
import { shallow } from "enzyme";
import App from "../../src/App";

describe("App Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
