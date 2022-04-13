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
            <DashboardNav />
          </div>
          <div className="flex justify-end mx-[140px] mt-16 mb-4">
            <Button />
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Operators;
