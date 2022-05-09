import React from "react";
import AddOperator from "./ChildComponents/AddOperator";
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
            <AddOperator name={"Operator"} />
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
