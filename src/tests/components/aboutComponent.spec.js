import React from "react";
import { shallow } from "enzyme";
import About from "../../components/About";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("About Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<About />);
    const wrapper = component.find('[test-data="aboutComponent"]');
    expect(wrapper.length).toBe(1);
  });
});
