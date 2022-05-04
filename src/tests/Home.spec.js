import React from "react";
import { shallow } from "enzyme";

import Home from "../components/Home";

describe("Home", () => {
  test("snapshot renders", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.length).toBe(1);
  });
});
