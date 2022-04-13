import React, { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import OperatorRegistrationModel from "../OperatorRegistrationModel";

const Button = () => {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="flex justify-end">
      <button
        onClick={() => setOpenModel(true)}
        className="border border-white rounded bg-[#363740] py-[3px]"
      >
        <FontAwesomeIcon className="text-white pr-2 pl-2" icon={faCirclePlus} />
        <Link className="pr-2 text-white border-transparent" to="">
          Operator
        </Link>
      </button>

      {openModel && <OperatorRegistrationModel closeModel={setOpenModel} />}
    </div>
  );
};

export default Button;
