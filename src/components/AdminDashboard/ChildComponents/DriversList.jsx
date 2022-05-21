import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import UpdateDriverForm from "./UpdateDriverForm";
import { deleteEmployee } from "../../../redux/actions/employeesAction";
import { showDriverModalAC } from "../../../redux/actions/showModal";
import { fetchDriversAssigned } from "../../../redux/actions/assignDriverBusAction";

const DriversList = ({ drivers }) => {
  const { isDriverModalOpen } = useSelector((state) => state.showModalReducer);
  const dispatch = useDispatch();

  const [id, setId] = useState();
  // handle delete function
  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };
  const handleUpdate = (id) => {
    setId(id);
  };
  useEffect(() => {
    dispatch(fetchDriversAssigned());
  }, []);
  const toggleOperatorModal = () => {
    dispatch(showDriverModalAC(!isDriverModalOpen));
  };

  // num definition to increment the Sn column
  let num = 1;
  // function to map through all drivers
  const driversList = drivers.map((driver) => {
    return (
      <>
        <tr key={driver.id}>
          <th className="text-black font-medium px-2">{num++}</th>
          <th className="text-black font-medium px-2">{driver.firstName}</th>
          <th className="text-black font-medium px-2 pt-[8px]">
            {driver.lastName}
          </th>
          <th className="text-black font-medium px-2 pt-[8px]">
            {driver.email}
          </th>
          <th className="text-black pt-[8px] px-2">
            <button
              className="updatebtn mr-2"
              onClick={() => {
                toggleOperatorModal();
                handleUpdate(driver.id);
              }}
            >
              Update
            </button>
            <button
              className="deletebtn mr-2"
              onClick={() => {
                handleDelete(driver.id);
              }}
            >
              Delete
            </button>
          </th>
        </tr>
      </>
    );
  });
  return (
    <>
      {isDriverModalOpen && <UpdateDriverForm id={id} />}
      {driversList}
    </>
  );
};

// Prop validations
DriversList.propTypes = {
  drivers: PropTypes.array.isRequired,
};

export default DriversList;