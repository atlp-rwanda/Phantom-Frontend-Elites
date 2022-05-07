import React from "react";
import { shallow } from "enzyme";
import SelectLang from "../../components/SelectLang";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("About Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<SelectLang />);
    expect(wrapper.length).toBe(1);
  });
});
