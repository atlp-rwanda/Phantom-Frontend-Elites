import React, { useState } from "react"; // import state
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [languageOptions, setLanguageOptions] = useState(false);
  const handleClick = () => {
    setLanguageOptions(!languageOptions);
  };
  return (
    <div className="py-2 px-14 flex items-center justify-between border-b border-gray-400 bg-white">
      <Link to="">
        <h1 className="text-black font-bold text-[30px]">Phantom</h1>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="text-3xl cursor-pointer block">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] bg-white">
              <li>
                <Link to="">
                  <h1 className="text-black font-bold text-[30px] px-5 py-2 mx-4 my-6 md:my-0 rounded-md text-md list-none">
                    Phantom
                  </h1>
                </Link>
              </li>
              <li
                className="bg-primary text-white font-medium px-5 py-2 mx-4 my-6 md:my-0 rounded-md text-md list-none"
                aria-current="page"
              >
                <Link to="/">Home</Link>
              </li>
              <li className="text-primary font-medium hover:bg-primary hover:text-white px-5 mx-4 my-4 md:my-0 py-2 m-3 rounded-md text-md list-none">
                <Link to="/">Contact</Link>
              </li>
              <li className="text-black font-medium hover:bg-primary hover:text-white px-5 mx-4 my-4 md:my-0 py-2 rounded-md text-md list-none">
                <Link to="/">Login</Link>
              </li>
              <li className="text-black font-medium hover:bg-primary hover:text-white px-5 mx-4 my-4 md:my-0 py-2 rounded-md text-md list-none">
                <Link to="/">Register</Link>
              </li>
              {/* Dropdown */}
              <div className="relative inline-block text-left mx-4 my-4 md:my-0">
                <div>
                  <button
                    onClick={handleClick}
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

                {languageOptions && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-[132px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <li
                        className="text-primary block px-4 py-2 text-sm hover:bg-gray-200"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        <Link to="/">English</Link>
                      </li>
                      <li
                        className="text-primary block px-4 py-2 text-sm hover:bg-gray-200"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        <Link to="/">French</Link>
                      </li>
                      <li
                        className="text-primary block px-4 py-2 text-sm hover:bg-gray-200"
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
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li
            className="bg-primary text-white font-medium px-5 py-2 mx-4 my-6 md:my-0 rounded-md text-md list-none"
            aria-current="page"
          >
            <Link to="/">Home</Link>
          </li>
          <li className="text-black font-medium hover:bg-primary hover:text-white px-5 mx-4 my-6 md:my-0 py-2 rounded-md text-md list-none">
            <Link to="/">Contact</Link>
          </li>
          <li className="text-black font-medium hover:bg-primary hover:text-white px-5 mx-4 my-6 md:my-0 py-2 rounded-md text-md list-none">
            <Link to="/">Login</Link>
          </li>
          <li className="text-black font-medium hover:bg-primary hover:text-white px-5 mx-4 my-6 md:my-0 py-2 rounded-md text-md list-none">
            <Link to="/">Register</Link>
          </li>
          {/* Dropdown */}
          <div className="relative inline-block text-left mx-4 my-6 md:my-0">
            <div>
              <button
                onClick={handleClick}
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
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;
      }
    `}</style>
    </div>
  );
}
