import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddEmployeeFormModal.css";
import { register } from "../../../redux/actions/employeesAction";
import employeeFormValidations from "../../../validations/employeeForm";
import { showModalActionCreator } from "../../../redux/actions/showModal";

const AddEmployeeFormModal = ({
  name,
  isModalOpen,
  showModalActionCreator: showModal,
  register,
  handleOutsideClickCloseModal,
  modalRef,
  emailExistError,
}) => {
  const handleCloseModal = () => {
    console.log("Toogle modal");
    showModal(!isModalOpen);
  };
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "Male",
    role: "2",
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
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      gender: values.gender,
      roleId: values.role,
    };
    register(user);
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      gender: "Male",
      role: "2",
    });

    if (!Object.keys(errors).length === 0) {
      console.log(Object.keys(errors).length);
      showModal(!isModalOpen);
    } else {
      showModal(isModalOpen);
    }
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
              name="firstname"
              placeholder="your first name"
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <div className="text-red-800 text-sm -mt-4">
                {errors.firstname}
              </div>
            )}
            <label htmlFor="Full name">Last Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="lastname"
              placeholder="your last name"
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <div className="text-red-800 text-sm -mt-4">
                {errors.lastname}
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
            <label htmlFor="role">Role Id</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="role"
              title="Choose 2 for driver and 3 for operator"
              value={values.role}
              onChange={handleChange}
            >
              {errors.role && (
                <div className="text-red-800 text-sm -mt-4">{errors.role}</div>
              )}
              <option value="2" title="Operator">
                2
              </option>
              <option value="3" title="Driver">
                3
              </option>
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

const mapStateToProps = (state) => ({
  emailExistError: state.employeesReducer.errors,
  isModalOpen: state.showModalReducer.isModalOpen,
});
AddEmployeeFormModal.propTypes = {
  showModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
  emailExistError: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  showModalActionCreator: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { register, showModalActionCreator })(
  AddEmployeeFormModal
);
