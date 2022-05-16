import React from "react";
import PropTypes from "prop-types";

const PaginatedList = ({ driversAssigned }) => {
  // num definition to increment the Sn column
  let num = 1;
  // function to map through all drivers
  const driversAssignedList = driversAssigned.map((item) => {
    return (
      <>
        <tr key={item.plateNo}>
          <th className="text-black font-medium px-2">{num++}</th>
          <th className="text-black font-medium px-2">
            {item.drivers.firstName}
          </th>
          <th className="text-black font-medium px-2 pt-[8px]">
            {item.drivers.lastName}
          </th>
          <th className="text-black font-medium px-2 pt-[8px]">
            {item.drivers.email}
          </th>
          <th className="text-black font-medium px-2 pt-[8px]">
            {item.plateNo}
          </th>
          <th className="text-black font-medium pt-[8px] px-2">{item.brand}</th>
        </tr>
      </>
    );
  });
  return <>{driversAssignedList}</>;
};

// Prop validations
PaginatedList.propTypes = {
  driversAssigned: PropTypes.array.isRequired,
};

export default PaginatedList;
