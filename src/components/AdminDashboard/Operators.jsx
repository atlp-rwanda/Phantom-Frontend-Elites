import React from "react";
import Button from "./ChildComponents/Button";
import DashboardNav from "./ChildComponents/DashboardNav";
import Sidebar from "./ChildComponents/Sidebar";
import Table from "./ChildComponents/Table";

const Operators = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-2">
          <div>
            <Sidebar />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <DashboardNav navbarTitle="Manage Operators" />
          </div>
          <div className="mt-8 mb-4 mx-8">
            <Button name={"Operator"} />
          </div>
          <div>
            <Table tableTitle={"Operators"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Operators;
