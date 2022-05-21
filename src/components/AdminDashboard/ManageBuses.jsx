import React, { useCallback, useEffect, useRef, useState } from "react";
import AddBus from "./ChildComponents/AddBus";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";
import BusesTable from "./ChildComponents/BusesTable";

const ManageBuses = () => {
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

  return (
    <div onClick={handleOutsideClick} className="flex h-screen">
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
            navbarTitle="Manage Buses"
          />
        </div>
        <div className="mt-8 mb-4 mx-[10%]">
          <AddBus name={"Bus"} />
        </div>
        <div>
          <BusesTable tableTitle={"Buses"} />
        </div>
      </div>
    </div>
  );
};

export default ManageBuses;
