import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import UpdateDriverForm from "./UpdateDriverForm";
import AssignDriverBusFormModal from "./AssignDriverBusFormModal";
import { deleteEmployee } from "../../../redux/actions/employeesAction";
import {
  showDriverModalAC,
  showAssignModalAC,
} from "../../../redux/actions/showModal";
import { fetchBuses } from "../../../redux/actions/busesAction";

const DriversList = ({ drivers }) => {
  const { isDriverModalOpen, isAssignModalOpen } = useSelector(
    (state) => state.showModalReducer
  );
  console.log("Reducer", isAssignModalOpen);
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [driverId, setDriverId] = useState();
  // handle delete function
  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };
  const handleUpdate = (id) => {
    setId(id);
  };
  const handleAssign = (driverId) => {
    setDriverId(driverId);
  };
  const { buses } = useSelector((state) => state.busesReducer);
  useEffect(() => {
    dispatch(fetchBuses());
  }, []);
  const toggleOperatorModal = () => {
    dispatch(showDriverModalAC(!isDriverModalOpen));
  };

  const toggleAssignModal = () => {
    dispatch(showAssignModalAC(!isAssignModalOpen));
  };
  // num definition to increment the Sn column
  let num = 1;

  const busesObj = Object.entries(buses);
  console.log("Object", busesObj);
  // function to map through all drivers
  const driversList = drivers.map((driver) => {
    return (
      <>
        <tr key={driver.id}>
          <th className="text-black font-medium pr-6">{num++}</th>
          <th className="text-black font-medium pr-6">{driver.firstName}</th>
          <th className="text-black font-medium pr-6 pt-[8px]">
            {driver.lastName}
          </th>
          <th className="text-black font-medium pr-6 pt-[8px]">
            {driver.email}
          </th>
          <th className="text-black font-medium pr-6 pt-[8px]">
            {busesObj.filter((bus) => bus.driverId === driver.id)}
          </th>
          <th className="text-black pt-[8px]">
            <button
              title="Assign Bus"
              className="assignbtn mr-2"
              onClick={() => {
                toggleAssignModal();
                handleAssign(driver.id);
              }}
            >
              Assign
            </button>
            <button title="Unassign Bus" className="unassignbtn mr-2">
              Unassign
            </button>
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
      {isAssignModalOpen && <AssignDriverBusFormModal driverId={driverId} />}
      {driversList}
    </>
  );
};

// Prop validations
DriversList.propTypes = {
  drivers: PropTypes.array.isRequired,
};

export default DriversList;
