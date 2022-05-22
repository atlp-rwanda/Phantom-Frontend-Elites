import React, { useCallback, useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router"
import AddRole from "./ChildComponents/AddRole";
import DashboardNav from "./ChildComponents/DashboardNav";
import DashboardSidebar from "./ChildComponents/DashboardSidebar";
import RolesTable from "./ChildComponents/RolesTable";

const RoleDashboard = () => {
  const isAuthenticated = localStorage.getItem("token");
  
  const storedInfo = localStorage.getItem("token");
  const userInfo = JSON.parse(storedInfo)?.user.user;


  let role
  userInfo? {role} = userInfo : role = null

  const navigate = useNavigate();

  useEffect(() => {
    if ((!isAuthenticated) || (role!==1)) navigate("/login");
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
    <>
      <div className="flex">
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
            navbarTitle="Manage Roles"
          />
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
