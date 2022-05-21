import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import DashboardContainer from "./OperatorDashboardContainer";
import OperatorDashboardNav from "./OperatorDashboardNav";
import OperatorDashboardSidebar from "./OperatorDashboardSidebar"

const OperatorsMainDashboard = () => {

  const isAuthenticated = localStorage.getItem("token");
  const userInfo = JSON.parse(isAuthenticated)?.user.user;

  let role
  userInfo? {role} = userInfo : role = null

  const navigate = useNavigate();

  useEffect(() => {
    if ((isAuthenticated === null) || (role!==2)) navigate("/login");
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
    <div onClick={handleOutsideClick}>
      <div className="flex">
        <div className="flex-2">
          <div>
            <OperatorDashboardSidebar />
          </div>
        </div>
        <div className="flex-1 bg-[#F7F8FC]">
          <div>
            <OperatorDashboardNav
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
  }else{
    return null;
  }
};

export default OperatorsMainDashboard;
