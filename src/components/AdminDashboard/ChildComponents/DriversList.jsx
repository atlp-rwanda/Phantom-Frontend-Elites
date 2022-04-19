import React from "react";
import PropTypes from "prop-types";
import Actionbutton from "./Actionbutton";

const DriversList = ({ drivers }) => {
  // num definition to increment the Sn column
  let num = 1;

  // function to map through all drivers
  const driversList = drivers.map((driver) => {
    return (
      <tr key={driver.id}>
        <th className="text-black font-medium pl-2 pr-6">{num++}</th>
        <th className="text-black font-medium pl-2 pr-6">{driver.firstName}</th>
        <th className="text-black font-medium pl-2 pr-6 pt-[8px]">
          {driver.lastName}
        </th>
        <th className="text-black font-medium pl-2 pr-6 pt-[8px]">
          {driver.email}
        </th>
        <th className="text-black font-medium pl-2 pr-6 pt-[8px]">
          Kimironko - Downtown
        </th>
        <th className="text-black font-medium pl-2 pr-6 pt-[8px]">RAE569H</th>
        <th className="text-black pl-2 pt-[8px]">
          <Actionbutton action={"Assign"} btn={"assignbtn"} />{" "}
          <Actionbutton action={"Update"} btn={"updatebtn"} />{" "}
          <Actionbutton action={"Delete"} btn={"deletebtn"} />
        </th>
      </tr>
    );
  });
  return <>{driversList}</>;
};

// Prop validations
DriversList.propTypes = {
  drivers: PropTypes.array.isRequired,
};

export default DriversList;
