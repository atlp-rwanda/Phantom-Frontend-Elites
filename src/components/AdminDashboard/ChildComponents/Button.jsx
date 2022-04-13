/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import OperatorRegistrationModel from "../OperatorRegistrationModel";

const Button = ({ name }) => {
  const [openModel, setOpenModel] = useState(false);
  // const [name, setName] = useState('');

  return (
    <div className="flex justify-end">
      <button
        onClick={() => setOpenModel(true)}
        className="border border-white rounded bg-[#363740] py-[3px]"
      >
        <FontAwesomeIcon className="text-white pr-2 pl-2" icon={faCirclePlus} />
        <Link className="pr-2 text-white border-transparent" to="">
          {name}
        </Link>
      </button>

      {openModel && <OperatorRegistrationModel closeModel={setOpenModel} />}
    </div>
  );
};

export default Button;
