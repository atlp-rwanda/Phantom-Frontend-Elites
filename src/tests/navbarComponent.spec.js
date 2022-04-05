import React from "react";
import { shallow } from "enzyme";
import Navbar from "../components/NavbarComponent/Navbar";
import MobileView from "../components/NavbarComponent/MobileView";
import DesktopView from "../components/NavbarComponent/DesktopView";

describe("Navbar Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<Navbar />);
    const wrapper = component.find('[test-data="navbarComponent"]');
    expect(wrapper.length).toBe(1);
  });
  it("Should contain an icon", () => {
    const component = shallow(<Navbar />);
    const wrapper = component.find('[test-data="icon"]');
    expect(wrapper.length).toBe(1);
  });
});

describe("Desktop view Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<DesktopView />);
    const wrapper = component.find('[test-data="desktopViewComponent"]');
    expect(wrapper.length).toBe(1);
  });
});

describe("Mobile view Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<MobileView />);
    const wrapper = component.find('[test-data="mobileViewComponent"]');
    expect(wrapper.length).toBe(1);
  });
});
