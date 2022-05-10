import React from "react";
import { shallow } from "enzyme";
import ContactSuccess from "../../components/ContactSuccess";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("ContactSuccess Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<ContactSuccess />);
    expect(wrapper.length).toBe(1);
  });
});
