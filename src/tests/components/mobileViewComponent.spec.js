import React from "react";
import { shallow } from "enzyme";
import MobileView from "../../components/NavbarComponent/MobileView";

const setUp = (props = {}) => {
  const setComponent = shallow(<MobileView {...props} />);
  return setComponent;
};

describe("Mobile view Component", () => {
  describe("Mobile view component rendered", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should render the mobile view component without errors", () => {
      const wrapper = component.find('[test-data="mobileViewComponent"]');
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Mobile view component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        languageOptions: true,
      };
      component = setUp(props);
    });
    it("Should render the mobile view component without errors with props passed", () => {
      const wrapper = component.find('[test-data="mobileViewComponent"]');
      expect(wrapper.length).toBe(1);
    });
  });
});
