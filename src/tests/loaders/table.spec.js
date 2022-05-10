import React from "react";
import { shallow } from "enzyme";
import TableSkeleton from "../../skeleton/Table";

describe("Operator Dashboard Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<TableSkeleton />);
    expect(wrapper.length).toBe(1);
  });
});
