import React, { useState } from "react"; // import state
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [languageOptions, setLanguageOptions] = useState(false);
  const handleClick = () => {
    setLanguageOptions(!languageOptions);
  };
  return (
    <div
      test-data="navbarComponent"
      className="lg:px-[100px] px-[8px] flex items-center justify-between border-b border-gray-400 shadow-md bg-white"
    >
      <Link to="">
        <h1 className="text-primary font-bold text-[40px] ">Phantom</h1>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="text-3xl cursor-pointer block">
              <FontAwesomeIcon test-data="icon" icon={faBars} />
            </span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 lg:px-7 py-4"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 lg:mr-4 mr-2 text-primary"
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
            <MobileView
              handleClick={handleClick}
              languageOptions={languageOptions}
            />
          </div>
        </section>
        <DesktopView
          handleClick={handleClick}
          languageOptions={languageOptions}
        />
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
};
export default Navbar;
