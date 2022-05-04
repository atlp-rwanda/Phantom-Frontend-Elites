import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/NavbarComponent/Navbar";

// set up for the components
const setUp = (props = {}) => {
  const setComponent = shallow(<Navbar {...props} />);
  return setComponent;
};

// set up for the test attributes
const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[test-data='${attribute}']`);
  return wrapper;
};

describe("Navbar Component", () => {
  describe("Should render", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should render without errors", () => {
      const wrapper = findByTestAttribute(component, "navbarComponent");
      expect(wrapper.length).toBe(1);
    });
    it("Should contain an icon", () => {
      const icon = findByTestAttribute(component, "icon");
      expect(icon.length).toBe(1);
    });
  });

  describe("Should render with props", () => {
    let component;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        languageOptions: false,
        setIsNavOpen: mockFunc(),
      };
      component = setUp(props);
    });
    it("Should emit callback on click event of button one component", () => {
      const wrapper = findByTestAttribute(component, "buttonComponent");
      wrapper.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should emit callback on click of button two component", () => {
      const wrapper = findByTestAttribute(component, "buttonTwoComponent");
      wrapper.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
