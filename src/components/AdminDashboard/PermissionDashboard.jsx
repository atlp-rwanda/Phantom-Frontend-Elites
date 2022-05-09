import React from "react";
import AddPermission from "./ChildComponents/AddPermission";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";
import PermissionsTable from "./ChildComponents/PermissionsTable";

const PermissionDashboard = () => {
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
            <DashboardNav navbarTitle="Manage Roles" />
          </div>
          <div className="mt-8 mb-4 mx-[10%]">
            <AddPermission name={"Permission"} />
          </div>
          <div>
            <PermissionsTable tableTitle={"Permissions"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PermissionDashboard;
