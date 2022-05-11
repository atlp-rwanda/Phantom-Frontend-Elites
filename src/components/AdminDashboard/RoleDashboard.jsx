import React, { useEffect} from "react";
import { useNavigate } from "react-router"
import AddRole from "./ChildComponents/AddRole";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";
import RolesTable from "./ChildComponents/RolesTable";

const RoleDashboard = () => {
  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === null) navigate("/login");
  }, []);

  if (isAuthenticated !== null) {
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
            <AddRole name={"Role"} />
          </div>
          <div>
            <RolesTable tableTitle={"Roles"} />
          </div>
        </div>
      </div>
    </>
  );
  }return null;
};

export default RoleDashboard;
