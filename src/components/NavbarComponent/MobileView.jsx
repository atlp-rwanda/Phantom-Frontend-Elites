/* eslint-disable react/prop-types */
import React from "react";
import { NavLink as Link } from "react-router-dom";

const MobileView = (props) => {
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
          <Link to="/">Home</Link>
        </li>
        <li className="text-primary font-medium hover:bg-primary hover:text-white hover:w-[100px] px-2 py-2 mx-2 my-2 rounded-md text-md list-none">
          <Link to="/contact">Contact</Link>
        </li>
        <li className=" text-primary font-medium hover:bg-primary hover:text-white hover:w-[100px] px-2 py-2 mx-2 my-2 rounded-md text-md list-none">
          <Link to="/login">Login</Link>
        </li>
        <li className="text-primary font-medium hover:bg-primary hover:text-white hover:w-[100px] px-2 mx-2 py-2 my-2 rounded-md text-md list-none">
          <Link to="/about">About</Link>
        </li>
        {/* Dropdown */}
        <div className="relative inline-block text-left mx-0 px-2 my-4 md:my-0">
          <div>
            <button
              onClick={props.handleClick}
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-primary shadow-sm px-4 py-2 bg-white text-md font-medium text-black focus:bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-offset-gray-100 focus:ring-primary"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Language
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {props.languageOptions && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-[132px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1 z-50" role="none">
                <li
                  className="text-primary block px-4 py-2 text-sm hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  <Link to="">English</Link>
                </li>
                <li
                  className="text-primary block px-4 py-2 text-sm hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  <Link to="">French</Link>
                </li>
                <li
                  className="text-primary block px-4 py-2 text-sm hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  <Link to="">Kinyarwanda</Link>
                </li>
              </div>
            </div>
          )}
        </div>
      </ul>
    </>
  );
};

export default MobileView;
