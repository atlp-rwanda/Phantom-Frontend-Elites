import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink as Link } from "react-router-dom";
import SelectLang from "../SelectLang";

const MobileView = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul
        test-data="mobileViewComponent"
        className="MENU-LINK-MOBILE-OPEN flex flex-col items-start justify-between min-h-[250px] bg-white"
      >
        <li>
          <Link to="/">
            <h1 className="text-black font-bold text-[40px] lg:px-4 px-2 lg:mx-8 mx-0 my-0 rounded-md text-md list-none">
              Phantom
            </h1>
          </Link>
        </li>

        <li
          className="w-[100px] text-primary font-medium px-2 py-2 mx-2 my-2 rounded-md text-md list-none"
          aria-current="page"
        >
          <Link to="/">{t("navbar.home")}</Link>
        </li>
        <li className="text-primary font-medium hover:bg-primary hover:text-white hover:w-[100px] px-2 py-2 mx-2 my-2 rounded-md text-md list-none">
          <Link to="/contact">{t("navbar.contact")}</Link>
        </li>
        <li className=" text-primary font-medium hover:bg-primary hover:text-white hover:w-[100px] px-2 py-2 mx-2 my-2 rounded-md text-md list-none">
          <Link to="/login">{t("navbar.login")}</Link>
        </li>
        <li className="text-primary font-medium hover:bg-primary hover:text-white hover:w-[100px] px-2 mx-2 py-2 my-2 rounded-md text-md list-none">
          <Link to="/about">{t("navbar.about")}</Link>
        </li>
        {/* Dropdown */}
        <div className="relative inline-block text-left mx-0 px-2 my-4 md:my-0">
          <SelectLang />
        </div>
      </ul>
    </>
  );
};

export default MobileView;
