import {
  faBus,
  faGear,
  faHouseUser,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink as Link } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <>
      <div className="border-2 border-white shadow-lg flex-col bg-white h-screen pr-10">
        <div className="mb-[80px]">
          <h1 className="text-[#363740] text-[40px] font-bold pl-4">Phantom</h1>
        </div>

        <div className="text-gray-500 text-lg flex-col pl-4">
          <div className="hover:text-primary mt-32 mb-4" activeclassname="active">
            <FontAwesomeIcon icon={faHouseUser} className="pr-2" />
            <Link className="/" to="/admin">
              Dashboard
            </Link>
          </div>
          <div className="hover:text-primary mt-8 mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2" />
            <Link to="/drivers">Manage Profile</Link>
          </div>
          <div className="hover:text-primary mt-8 mb-4">
            <FontAwesomeIcon icon={faBus} className="pr-2" />
            <Link to="/buses">Journey</Link>
          </div>
         
         
          <div className="hover:text-primary mt-8 mb-2">
            <FontAwesomeIcon icon={faUser} className="pr-2" />
            <Link to="/permissions">Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;