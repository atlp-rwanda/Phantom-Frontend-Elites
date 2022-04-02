import React from "react";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3721e7a... Modified tests
    <div
      test-data="footerComponent"
      className="grid grid-rows-2 text-white py-2 lg:px-24 px-6 ] bg-primary"
    >
<<<<<<< HEAD
      <div className="grid lg:grid-cols-4 row-span-3">
        <div className="mt-[40px]">
          <Link to="/">
=======
    <div className="grid grid-rows-2 text-white py-2 lg:px-24 px-6 ] bg-primary">
=======
>>>>>>> 3721e7a... Modified tests
      <div className="grid lg:grid-cols-4 row-span-3">
        <div className="mt-[40px]">
<<<<<<< HEAD
          <Link to="">
>>>>>>> 74302ef... Tests modified
=======
          <Link to="/">
>>>>>>> 55abcb6... Added final touches
            <h1 className="font-bold text-[35px]">Phantom</h1>
          </Link>
        </div>

        <div className="mt-[50px]">
          <h2 className="text-lg pb-4">Company</h2>
          <Link to="/about" target="_blank">
            <h2 className="text-sm text-[#9CA3AF] hover:text-white">
              About Us
            </h2>
          </Link>
        </div>

        <div className="mt-[50px]">
          <h2 className="text-lg pb-4">Contact Center</h2>
          <Link to="">
            <h2 className="text-sm text-[#9CA3AF] hover:text-white">
              Contact Us
            </h2>
          </Link>
        </div>

        <div className="mt-[50px]">
          <h2 className="text-lg pb-4">Stay in touch</h2>
          <div className="flex border-2 lg:w-[280px] w-[300px] border-gray-400 p-2 rounded-md">
            <input
              className=" appearance-none bg-transparent focus:outline-none lg:w-[150px]"
              type="text"
              placeholder="Your email"
            />
            <span className="pl-4 text-[#9CA3AF] hover:text-gray-300">
              <Link to="">SUBSCRIBE</Link>
            </span>
          </div>
          <div className="text-[#9CA3AF] mt-4">
            <Link to="">
              <FontAwesomeIcon
                className="pr-4 hover:text-gray-300"
                icon={faTwitter}
              />
            </Link>
            <Link to="">
              <FontAwesomeIcon
                className="px-4 hover:text-gray-300"
                icon={faLinkedinIn}
              />
            </Link>
            <Link to="">
              <FontAwesomeIcon
                className="px-4 hover:text-gray-300"
                icon={faFacebookF}
              />
            </Link>
            <Link to="">
              <FontAwesomeIcon
                className="px-4 hover:text-gray-300"
                icon={faInstagram}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="row-span-1 pt-[40px] pb-8">
        <p className="lg:text-center text-[#9CA3AF]">&copy; Phantom 2022</p>
      </div>
    </div>
  );
};

export default Footer;
