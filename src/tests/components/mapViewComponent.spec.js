import React from "react";
import { shallow } from "enzyme";

import MapView from "../../components/MapView";

describe("MapView", () => {
  test("snapshot renders", () => {
    const wrapper = shallow(<MapView />);
    expect(wrapper.length).toBe(1);
  });
});
