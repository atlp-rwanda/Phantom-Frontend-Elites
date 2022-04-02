import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const DashboardNav = ({ navbarTitle }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white  border-gray-400 shadow-md py-4 px-8">
        <div>
          <h1 className="text-xl font-bold text-[#3C3868]">{navbarTitle}</h1>
        </div>

        <div className="flex">
          <div className="border-2 border-[#A4A6B3] rounded mr-8 py-[1.5px]">
            <FontAwesomeIcon
              className="text-[#A4A6B3] text-lg pl-2"
              icon={faSearch}
            />
            <input className="outline-none px-4 text-[#A4A6B3]" type="text" />
          </div>
          <div className="mr-8">
            <FontAwesomeIcon
              className="text-2xl text-[#3C3868] cursor-pointer"
              icon={faBell}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="text-2xl text-[#3C3868] cursor-pointer"
              icon={faCircleUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardNav.propTypes = {
  navbarTitle: PropTypes.string.isRequired,
};

export default DashboardNav;