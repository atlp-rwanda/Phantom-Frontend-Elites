import React, { useCallback, useEffect, useRef, useState } from "react";
import DashboardContainer from "../DashboardComponents/DashboardContainer";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";

const Dashboard = () => {
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
    <div onClick={handleOutsideClick}>
      <div className="flex">
        <div className="flex-2">
          <div>
            <DashboardSidebar />
          </div>
        </div>
        <div className="flex-1 bg-[#F7F8FC]">
          <div>
            <DashboardNav
              open={open}
              setOpen={setOpen}
              handleOutsideClick={handleOutsideClick}
              modalRef={modalRef}
              navbarTitle="Dashboard"
            />
          </div>
          <DashboardContainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;