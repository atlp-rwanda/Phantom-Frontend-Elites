import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const PageLoadSpinner = () => {
  return (
    <div className="h-screen flex justify-center pt-[50vh]">
      <FontAwesomeIcon
        className="spinner text-gray-600 text-6xl"
        icon={faSpinner}
      />
    </div>
  );
};

export default PageLoadSpinner;
