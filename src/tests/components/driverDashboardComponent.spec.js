import React from "react";
import { shallow } from "enzyme";
import DriverDashboard from "../../components/AdminDashboard/DriverDashboard";
import DashboardNav from "../../components/AdminDashboard/ChildComponents/DashboardNav";
import DashboardSidebar from "../../components/AdminDashboard/ChildComponents/DashboardSidebar";

describe("Operator Dashboard Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<DriverDashboard />);
    expect(wrapper.length).toBe(1);
  });
});

describe("DashboardNav for the Operator Dashboard Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<DashboardNav />);
    expect(wrapper.length).toBe(1);
  });
});

describe("DashboardSidebar for the Operator Dashboard Component", () => {
  it("Should render without errors", () => {
    const wrapper = shallow(<DashboardSidebar />);
    expect(wrapper.length).toBe(1);
  });
});
