import React from "react";
import PropTypes from "prop-types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TotalWidget = ({ title, total, link }) => {
  return (
    <>
      <div className="flex justify-center text-center flex-col shadow-md lg:gap-6 gap-2 bg-white rounded-2xl lg:h-36 lg:w-44 h-30 w-36  m-1 p-4">
        <div className="text-sm text-[#736EAA] font-semibold">{title}</div>
        <div className="text-xl text-[#736EAA] font-semibold">{total}</div>
        <Link to={`${link}`} className="bg-[#3C3868] self-center hover:bg-[#736EAA] w-24 text-white text-sm font-semibold py-1 px-2 rounded">
          More <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </>
  );
};

TotalWidget.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  link:PropTypes.string.isRequired,
};

export default TotalWidget;
