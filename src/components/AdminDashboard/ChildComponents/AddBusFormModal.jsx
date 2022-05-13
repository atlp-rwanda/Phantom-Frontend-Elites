import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { registerBuses } from "../../../redux/actions/busesAction";
import busesFormValidations from "../../../validations/busForm";
import { showModalActionCreator } from "../../../redux/actions/showModal";

const AddBusFormModal = ({ name, handleOutsideClickCloseModal, modalRef }) => {
  const busExistError = useSelector((state) => state.busesReducer.errors);
  const { isModalOpen } = useSelector((state) => state.showModalReducer);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showModalActionCreator(!isModalOpen));
  };
  const [values, setValues] = useState({
    brand: "",
    plateNo: "",
    driver: null,
    seats: "",
    status: "inactive",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(busesFormValidations(values));
    const bus = {
      brand: values.brand,
      plateNo: values.plateNo,
      driverId: values?.null,
      seats: values.seats,
      status: values.status,
    };
    dispatch(registerBuses(bus));
    setValues({
      brand: "",
      plateNo: "",
      seats: "",
      status: "inactive",
    });
  };

  return (
    <div
      className="modelBackground"
      ref={modalRef}
      onClick={handleOutsideClickCloseModal}
    >
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
                  Register {name}
                </h1>
              </div>
              {busExistError && (
                <div className="text-red-800 text-sm -mt-2 my-4 font-bold">
                  {busExistError}
                </div>
              )}
            </div>
            <label htmlFor="Full name">Bus Brand</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="brand"
              placeholder="Brand name of the bus"
              value={values.brand}
              onChange={handleChange}
            />
            {errors.brand && (
              <div className="text-red-800 text-sm -mt-4">{errors.brand}</div>
            )}
            <label htmlFor="Full name">Plate No</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="plateNo"
              placeholder="Bus plate number"
              value={values.plateNo}
              onChange={handleChange}
            />
            {errors.plateNo && (
              <div className="text-red-800 text-sm -mt-4">{errors.plateNo}</div>
            )}
            <label htmlFor="email">No of Bus seats</label>
            <input
              type="text"
              name="seats"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="Number of seats in the bus"
              value={values.seats}
              onChange={handleChange}
            />
            {errors.seats && (
              <div className="text-red-800 text-sm -mt-4">{errors.seats}</div>
            )}
            <label htmlFor="Full name">Bus Status</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="status"
              value={values.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className="text-center">
              <button
                type="submit"
                className="mx-auto py-[5px] px-14 rounded bg-primary text-white font-bold hover:bg-gray-700 focus:outline-none my-1"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddBusFormModal.propTypes = {
  name: PropTypes.string.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
};

export default AddBusFormModal;
