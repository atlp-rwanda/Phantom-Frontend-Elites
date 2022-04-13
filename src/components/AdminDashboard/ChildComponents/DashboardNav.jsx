/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const DashboardNav = ({ navbarTitle }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-white border-b-2 border-gray-400 shadow-lg py-4 px-8">
        <div>
          <h1 className="text-xl font-bold text-primary">{navbarTitle}</h1>
        </div>

        <div className="flex">
          <div className="border-2 border-[#A4A6B3] rounded mr-8 py-[1.5px]">
            <FontAwesomeIcon
              className="text-[#A4A6B3] text-lg pl-2"
              icon={faSearch}
            />
            <input className="outline-none px-4" type="text" />
          </div>
          <div className="mr-8">
            <FontAwesomeIcon className="text-2xl" icon={faBell} />
          </div>
          <div>
            <FontAwesomeIcon className="text-2xl" icon={faCircleUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
