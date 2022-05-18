import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { register } from "../../../redux/actions/employeesAction";
import employeeFormValidations from "../../../validations/employeeForm";
import { showModalActionCreator } from "../../../redux/actions/showModal";

const AddDriverFormModal = ({
  name,
  handleOutsideClickCloseModal,
  modalRef,
}) => {
  const emailExistError = useSelector((state) => state.employeesReducer.errors);
  const { isModalOpen } = useSelector((state) => state.showModalReducer);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showModalActionCreator(!isModalOpen));
  };
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "Male",
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
    setErrors(employeeFormValidations(values));
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      gender: values.gender,
      roleId: 3,
    };
    dispatch(register(user));
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      gender: "Male",
    });
  };

  return (
    <div
      className="bg-[#e9e9e9] absolute flex justify-center lg:top-[12vh] pt-[10vh] lg:w-[68%] w-[100%] h-lg:[80vh] my-auto items-center top-0 lg:right-auto lg:left-auto lg:bottom-auto right-0 left-0 bottom-0"
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
              {emailExistError && (
                <div className="text-red-800 text-sm -mt-2 my-4 font-bold">
                  {emailExistError}
                </div>
              )}
            </div>
            <label htmlFor="Full name">First Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="firstName"
              placeholder="your first name"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="text-red-800 text-sm -mt-4">
                {errors.firstName}
              </div>
            )}
            <label htmlFor="Full name">Last Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="lastName"
              placeholder="your last name"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="text-red-800 text-sm -mt-4">
                {errors.lastName}
              </div>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="example@xxx.com"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-800 text-sm -mt-4">{errors.email}</div>
            )}
            <label htmlFor="Full name">Gender</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <div className="text-red-800 text-sm -mt-4">{errors.gender}</div>
            )}
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

AddDriverFormModal.propTypes = {
  name: PropTypes.string.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
};

export default AddDriverFormModal;
