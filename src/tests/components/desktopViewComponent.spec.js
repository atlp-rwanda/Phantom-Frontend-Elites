import React from "react";
import { shallow } from "enzyme";
import DesktopView from "../../components/NavbarComponent/DesktopView";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

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
