import {
  faBus,
  faGear,
  faHouseUser,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink as Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="hidden border-2 border-white shadow-lg lg:flex flex-col bg-white h-screen pr-10">
        <div className="mb-[80px]">
          <h1 className="text-[#3c3868] text-[40px] font-bold pl-4">
            <Link className="cursor-pointer" to="/">
              Phantom
            </Link>
          </h1>
        </div>

        <div className="text-[#3c3868] font-semibold text-lg flex-col pl-4">
          <div className="hover:text-gray-600 mb-4" activeclassname="active">
            <FontAwesomeIcon
              icon={faHouseUser}
              className="pr-2 text-[#3c3868]"
            />
            <Link className="text-[#3c3868]" to="/Dashboard">
              Dashboard
            </Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2 text-[#3c3868]" />
            <Link to="/drivers">Manage Drivers</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2 text-[#3c3868]" />
            <Link to="/operators">Manage Operators</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faBus} className="pr-2 text-[#3c3868]" />
            <Link to="/buses">Manage Buses</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faRoad} className="pr-2 text-[#3c3868]" />
            <Link to="/roads">Manage Roads</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2 text-[#3c3868]" />
            <Link to="/roles">Manage Roles</Link>
          </div>
          <div className="hover:text-gray-600">
            <FontAwesomeIcon icon={faGear} className="pr-2 text-[#3c3868]" />
            <Link to="/permissions">Manage Permission</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
