import React from "react";
import { shallow } from "enzyme";
import PageLoadSpinner from "../../skeleton/PageLoadSpinner";

describe("PageLoadSpinner Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<PageLoadSpinner />);
    expect(wrapper.length).toBe(1);
  });
});
