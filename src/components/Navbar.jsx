import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [languageOptions, setLanguageOptions] = useState(false);
  const handleClick = () => {
    setLanguageOptions(!languageOptions);
  };
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6  lg:px-8">
          {/* Navbar Brandname and links */}
          <div className="flex items-center justify-between sm:items-stretch sm:justify-star">
            {/* Brandname */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <h1 className="text-black font-bold text-[30px]">Phantom</h1>
              </Link>
            </div>
            {/* Navbar links and should move to the right */}
            <div className="flex sm:block sm:ml-6 justify-end">
              <div className="flex align-middle my-2">
                <li
                  className="bg-gray-700 text-white font-semibold px-5 py-2 mx-4 rounded-md text-md list-none"
                  aria-current="page"
                >
                  <Link to="/">Home</Link>
                </li>
                <li className="text-black font-semibold hover:bg-gray-700 hover:text-white px-5 mx-4 py-2 rounded-md text-md list-none">
                  <Link to="/">Contact</Link>
                </li>
                <li className="text-black font-semibold hover:bg-gray-700 hover:text-white px-5 mx-4 py-2 rounded-md text-md list-none">
                  <Link to="/">Login</Link>
                </li>
                <li className="text-black font-semibold hover:bg-gray-700 hover:text-white px-5 mx-4 py-2 rounded-md text-md list-none">
                  <Link to="/">Register</Link>
                </li>

                {/* Dropdown */}
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={handleClick}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-700"
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

                  {languageOptions && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <li
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          <Link to="/">English</Link>
                        </li>
                        <li
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          <Link to="/">French</Link>
                        </li>
                        <li
                          className="text-gray-700 block px-4 py-2 text-sm"
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
