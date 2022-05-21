import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import AddDriver from "./ChildComponents/AddDriver";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";
import DriversTable from "./ChildComponents/DriversTable";

const DriverDashboard = () => {

  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === null) navigate("/login");
  }, []);
  
  const [open, setOpen] = useState(false);

  const modalRef = useRef();

  /** Function to close the dropdown when
  a user clicks outside**/
  const handleOutsideClick = useCallback(
    (e) => {
      if (e.target.length !== 0 && open) {
        setOpen(!open);
      }
    },
    [open]
  );

  /** callback func for closing the modal
   * when a user presses escape keyboard key **/
  const escKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        setOpen(!open);
      }
    },
    [open]
  );

  // useEffect func to run the escKey Press func

  useEffect(() => {
    document.addEventListener("keydown", escKeyPress);
    return () => document.removeEventListener("keydown", escKeyPress);
  }, [escKeyPress]);

  if (isAuthenticated !== null) {
  return (
    <div onClick={handleOutsideClick} className="flex">
      <div className="flex-2">
        <div>
          <DashboardSidebar />
        </div>
      </div>
      <div className="flex-1">
        <div>
          <DashboardNav
            open={open}
            setOpen={setOpen}
            handleOutsideClick={handleOutsideClick}
            modalRef={modalRef}
            navbarTitle="Manage Drivers"
          />
        </div>
        <div className="mt-8 mb-4 mx-[10%]">
          <AddDriver name={"Driver"} />
        </div>
        <div>
          <DriversTable tableTitle={"Drivers"} />
        </div>
      </div>
    </div>
  );
  }else{
    return null;
  }
};

export default DriverDashboard;
