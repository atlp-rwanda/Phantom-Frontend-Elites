import React from "react";
import AddEmployee from "./ChildComponents/AddEmployee";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";
import OperatorsTable from "./ChildComponents/OperatorsTable";

const OperatorDashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-2">
          <div>
            <DashboardSidebar />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <DashboardNav navbarTitle="Manage Operators" />
          </div>
          <div className="mt-8 mb-4 mx-[10%]">
            <AddEmployee name={"Operator"} />
          </div>
          <div>
            <OperatorsTable tableTitle={"Operators"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OperatorDashboard;
