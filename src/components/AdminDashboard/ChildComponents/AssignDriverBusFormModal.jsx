import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { showAssignModalAC } from "../../../redux/actions/showModal";
import { fetchBuses } from "../../../redux/actions/busesAction";
import { assignDriverBus } from "../../../redux/actions/assignDriverBusAction";

const AssignDriverBusFormModal = ({ driverId }) => {
  const { isModalOpen } = useSelector((state) => state.showModalReducer);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showAssignModalAC(isModalOpen));
  };
  useEffect(() => {
    dispatch(fetchBuses());
  }, []);

  const [values, setValues] = useState({
    driverId: driverId,
    plateNo: "Select a Plate No",
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
  };

  const { buses } = useSelector((state) => state.busesReducer);

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
            <label>Driver</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="driverId"
              placeholder="first name to be updated"
              value={values.driverId}
              onChange={handleChange}
            />
            <label>Bus</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-6 mt-2"
              name="plateNo"
              value={values.plateNo}
              onChange={handleChange}
            >
              <option disabled value="Select a Plate No">
                Select a Plate No
              </option>
              {buses.map((bus) => {
                return (
                  <option key={bus.plateNo} value={bus.plateNo}>
                    {bus.plateNo}
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
  driverId: PropTypes.number.isRequired,
};

export default AssignDriverBusFormModal;
