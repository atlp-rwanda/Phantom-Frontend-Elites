import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <div className="flex justify-center mt-10 ml-10">
      <FontAwesomeIcon className="spinner text-3xl" icon={faSpinner} />
    </div>
  );
};

export default Spinner;
