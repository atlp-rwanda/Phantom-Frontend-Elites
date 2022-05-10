import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import AddDriver from "./ChildComponents/AddDriver";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";
import DriversTable from "./ChildComponents/DriversTable";

const DriverDashboard = () => {
  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuthenticated===null) navigate("/login")
  },[])

  if(isAuthenticated!==null){
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
            <DashboardNav navbarTitle="Manage Drivers" />
          </div>
          <div className="mt-8 mb-4 mx-[10%]">
            <AddDriver name={"Driver"} />
          </div>
          <div>
            <DriversTable tableTitle={"Drivers"} />
          </div>
        </div>
      </div>
    </>
  );
}else{
  return null;
}
};

export default DriverDashboard;
