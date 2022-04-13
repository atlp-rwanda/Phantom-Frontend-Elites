import {
  faBus,
  faBusSimple,
  faGear,
  faHouseUser,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="border-2 border-white shadow-lg flex-col bg-white h-screen pr-10">
        <div className="mb-[100px]">
          <h1 className="text-[#363740] text-[40px] font-bold pl-4">Phantom</h1>
        </div>

        <div className="text-[#A4A6B3] text-lg flex-col pl-4">
          <div className="hover:text-primary mb-4">
            <FontAwesomeIcon icon={faHouseUser} className="pr-2" />
            <Link className="" to="">
              Dashboard
            </Link>
          </div>
          <div className="hover:text-primary mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2" />
            <Link to="">Manage Drivers</Link>
          </div>
          <div className="hover:text-primary mb-4">
            <FontAwesomeIcon icon={faGear} className="pr-2" />
            <Link to="">Manage Operators</Link>
          </div>
          <div className="hover:text-primary mb-4">
            <FontAwesomeIcon icon={faBus} className="pr-2" />
            <Link to="">Manage Buses</Link>
          </div>
          <div className="hover:text-primary mb-4">
            <FontAwesomeIcon icon={faRoad} className="pr-2" />
            <Link to="">Manage Roads</Link>
          </div>
          <div className="hover:text-primary">
            <FontAwesomeIcon icon={faBusSimple} className="pr-2" />
            <Link to="">Bus Booking</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
