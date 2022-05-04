import React from "react";
import { shallow } from "enzyme";
import DesktopView from "../../components/NavbarComponent/DesktopView";

const setUp = (props = {}) => {
  const setComponent = shallow(<DesktopView {...props} />);
  return setComponent;
};

const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[test-data='${attribute}']`);
  return wrapper;
};

describe("Desktop view Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttribute(component, "desktopViewComponent");
    expect(wrapper.length).toBe(1);
  });
});

describe("Desktop view component with props", () => {
  let component;
  beforeEach(() => {
    const props = {
      languageOptions: true,
    };
    component = setUp(props);
  });
  it("Should render without errors when we have props", () => {
    const wrapper = findByTestAttribute(component, "desktopViewComponent");
    expect(wrapper.length).toBe(1);
  });
});

describe("Desktop view component with props", () => {
  let component;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      languageOptions: false,
      handleClick: mockFunc,
    };
    component = setUp(props);
  });
  it("Should emit callback on click event", () => {
    const wrapper = findByTestAttribute(component, "buttonComponent");
    wrapper.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
