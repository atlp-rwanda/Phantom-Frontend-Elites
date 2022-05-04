import React from "react";
import { shallow } from "enzyme";

import Search from "../components/Search";

describe("Search", () => {
  test("snapshot renders", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.length).toBe(1);
  });
});
