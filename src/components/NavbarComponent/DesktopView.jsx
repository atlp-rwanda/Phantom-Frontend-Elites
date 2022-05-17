import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink as Link } from "react-router-dom";
import SelectLang from "../SelectLang";

const DesktopView = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul
        test-data="desktopViewComponent"
        className="DESKTOP-MENU hidden space-x-8 lg:flex"
      >
        <li
          className="text-black font-medium hover:bg-primary hover:text-white px-5 py-2 mx-4 my-6 md:my-0 rounded-md text-md list-none"
          aria-current="page"
        >
          <Link exact="true" activeclassname="active" to="/">
            Home
          </Link>
        </li>
        <li className="text-black font-medium hover:bg-primary hover:text-white px-5 mx-4 my-6 md:my-0 py-2 rounded-md text-md list-none">
          <Link exact="true" activeclassname="active" to="/contact">
            Contact
          </Link>
        </li>
        <li className="text-black font-medium hover:bg-primary hover:text-white px-5 mx-4 my-6 md:my-0 py-2 rounded-md text-md list-none">
          <Link exact="true" activeclassname="active" to="/login">
            Login
          </Link>
        </li>
        <li className="text-primary font-medium hover:bg-primary hover:text-white hover:font-bold px-5 mx-4 my-6 md:my-0 py-2 rounded-md text-md list-none">
          <Link exact="true" activeclassname="active" to="/about">
            About
          </Link>
        </li>
        {/* Dropdown */}
        <div className="relative inline-block text-left mx-4 my-6 md:my-0">
          <SelectLang />
        </div>
      </ul>
    </>
  );
};

export default DesktopView;
