import {
  faBus,
  faGear,
  faHouseUser,
  faRoad,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink as Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("hello");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="border-2 border-white shadow-lg flex-col bg-white h-screen pr-10">
        <div className="mb-[80px]">
          <h1 className="text-[#363740] text-[40px] font-bold pl-4">
            <Link className="cursor-pointer" to="/">
              Phantom
            </Link>
          </h1>
        </div>

        <div className="text-gray-900 text-lg flex-col pl-4">
          <div className="hover:text-gray-600 mb-4" activeclassname="active">
            <FontAwesomeIcon
              icon={faHouseUser}
              className="pr-2 text-[#736EAA] "
            />
            <Link className="text-[#736EAA]" to="/dashboard">
              Dashboard
            </Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2" />
            <Link to="/drivers">Manage Drivers</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2" />
            <Link to="/operators">Manage Operators</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faBus} className="pr-2" />
            <Link to="/buses">Manage Buses</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faRoad} className="pr-2" />
            <Link to="/roads">Manage Roads</Link>
          </div>
          <div className="hover:text-gray-600 mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2" />
            <Link to="/roles">Manage Roles</Link>
          </div>
          <div className="hover:text-gray-600">
            <FontAwesomeIcon icon={faGear} className="pr-2" />
            <Link to="/permissions">Manage Permission</Link>
          </div>
          <div className="hover:text-primary mt-[30vh]">
            <FontAwesomeIcon icon={faUser} className="pr-2" />
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
