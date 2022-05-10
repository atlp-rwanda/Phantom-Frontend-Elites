import React from "react";
import { shallow } from "enzyme";

import About from "../components/About";
// import Home from "../components/Home";

describe("Counter", () => {
  test("snapshot renders", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.length).toBe(1);
  });
});
