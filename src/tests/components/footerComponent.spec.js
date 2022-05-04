import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer";

describe("Navbar Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<Footer />);
    const wrapper = component.find('[test-data="footerComponent"]');
    expect(wrapper.length).toBe(1);
  });
});
