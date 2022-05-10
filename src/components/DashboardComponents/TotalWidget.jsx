import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TotalWidget = ({ title, amount }) => {
  return (
    <>
      <div className="flex justify-center text-center flex-col shadow-md gap-6 bg-white rounded-2xl h-36 w-44  m-1">
        <div className="text-sm text-[#736EAA] font-semibold">{title}</div>
        <div className="text-xl text-[#736EAA] font-semibold">{amount}</div>
        <button class="bg-[#3C3868] self-center hover:bg-[#736EAA] w-24 text-white text-sm font-semibold py-1 px-2 rounded">
          More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

export default TotalWidget;
