import React from "react";
import DashboardContainer from "../DashboardComponents/DashboardContainer";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-2">
          <div>
            <DashboardSidebar />
          </div>
        </div>
        <div className="flex-1 bg-[#F7F8FC]">
          <div>
            <DashboardNav navbarTitle="Dashboard" />
          </div>
          <DashboardContainer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
