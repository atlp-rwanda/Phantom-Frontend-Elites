/* eslint-disable react/prop-types */
import React from "react";
import { NavLink as Link } from "react-router-dom";

const DesktopView = (props) => {
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
          <div>
            <button
<<<<<<< HEAD
<<<<<<< HEAD
              test-data="buttonComponent"
=======
>>>>>>> 74302ef... Tests modified
=======
              test-data="buttonComponent"
>>>>>>> 3721e7a... Modified tests
              onClick={props.handleClick}
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-white text-md font-medium text-black focus:bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-offset-gray-100 focus:ring-gray-700"
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
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <li
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  <Link to="/">English</Link>
                </li>
                <li
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  <Link to="/">French</Link>
                </li>
                <li
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  <Link to="/">Kinyarwanda</Link>
                </li>
              </div>
            </div>
          )}
        </div>
      </ul>
    </>
  );
};

export default DesktopView;
