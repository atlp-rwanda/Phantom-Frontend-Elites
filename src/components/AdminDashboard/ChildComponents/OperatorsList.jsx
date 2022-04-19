import React from "react";
import Actionbutton from "./Actionbutton";
import PropTypes from "prop-types";

const OperatorsList = ({ operators }) => {
  // num definition to increment the Sn column
  let num = 1;

  // function to map through all operators
  const operatorsList = operators.map((operator) => {
    return (
      <tr key={operator.id}>
        <th className="text-black font-medium pl-2 pr-6">{num++}</th>
        <th className="text-black font-medium pl-2 pr-6">
          {operator.firstName}
        </th>
        <th className="text-black font-medium pl-2 pr-6 pt-[8px]">
          {operator.lastName}
        </th>
        <th className="text-black font-medium pl-2 pr-6 pt-[8px]">
          {operator.email}
        </th>
        <th className="text-black pl-2 pt-[8px]">
          <Actionbutton action={"Update"} btn={"updatebtn"} />{" "}
          <Actionbutton action={"Delete"} btn={"deletebtn"} />
        </th>
      </tr>
    );
  });

  return <>{operatorsList}</>;
};

OperatorsList.propTypes = {
  operators: PropTypes.array.isRequired,
};

export default OperatorsList;
