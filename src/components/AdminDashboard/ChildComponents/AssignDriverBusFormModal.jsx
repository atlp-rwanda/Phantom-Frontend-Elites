import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { showAssignModalAC } from "../../../redux/actions/showModal";
import { assignDriverBus } from "../../../redux/actions/assignDriverBusAction";
import { fetchEmployees } from "../../../redux/actions/employeesAction";

const AssignDriverBusFormModal = ({ plateNo }) => {
  const { isModalOpen, isAssignModalOpen } = useSelector(
    (state) => state.showModalReducer
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showAssignModalAC(isModalOpen));
  };
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const [values, setValues] = useState({
    plateNo: plateNo,
    driverId: "Select a driver",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const assignedData = { ...values };
    dispatch(assignDriverBus(assignedData));
    dispatch(showAssignModalAC(!isAssignModalOpen));
  };

  const { employees } = useSelector((state) => state.employeesReducer);
  const drivers = employees.filter((driver) => driver.roleId === 3);

  return (
    <div className="assignModalBackground">
      <div className="bg-grey-lighter flex flex-col">
        <div className="w-[450px] mx-auto mt-0 flex flex-col items-center justify-center  px-2">
          {/* Registration form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white px-[40px] py-4 rounded shadow-md text-black w-full"
          >
            <div className="flex-col">
              <div className="flex justify-end">
                <button onClick={handleCloseModal}>
                  <FontAwesomeIcon
                    className="text-2xl text-primary"
                    icon={faXmark}
                  />
                </button>
              </div>
              <div className="mb-6">
                <h1 className="text-center text-xl font-bold">
                  Assign Driver to Bus
                </h1>
              </div>
            </div>
            <label>Plate No</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="plateNo"
              placeholder="first name to be updated"
              value={values.plateNo}
              onChange={handleChange}
            />
            <label>Driver</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-6 mt-2"
              name="driverId"
              value={values.driverId}
              onChange={handleChange}
            >
              <option disabled value="Select a driver">
                Select a driver
              </option>
              {drivers.map((driver) => {
                return (
                  <option key={driver.id} value={driver.id}>
                    {driver.firstName} {driver.lastName}
                  </option>
                );
              })}
            </select>
            <div className="text-center">
              <button
                type="submit"
                className="mx-auto py-[5px] px-14 rounded bg-primary text-white font-bold hover:bg-gray-700 focus:outline-none my-1"
              >
                Assign Bus
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AssignDriverBusFormModal.propTypes = {
  plateNo: PropTypes.string.isRequired,
};

export default AssignDriverBusFormModal;
