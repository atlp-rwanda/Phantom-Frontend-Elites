import React from "react";
import { shallow } from "enzyme";
import Spinner from "../../skeleton/Spinner";

describe("Spinner Loader Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.length).toBe(1);
  });
});
