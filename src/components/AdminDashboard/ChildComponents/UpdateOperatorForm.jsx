import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateEmployee } from "../../../redux/actions/employeesAction";
import employeeFormValidations from "../../../validations/employeeForm";
import { showOperatorModalAC } from "../../../redux/actions/showModal";

const UpdateOperatorForm = ({
  employees,
  name,
  isOperatorModalOpen,
  showOperatorModalAC: showModal,
  updateEmployee,
  handleOutsideClickCloseModal,
  modalRef,
  emailExistError,
}) => {
  const handleCloseModal = () => {
    showModal(!isOperatorModalOpen);
  };
  const operators = employees.filter((operator) => operator.roleId === 2);
  const id = operators.length - 1;
  console.log(operators, id);

  const [values, setValues] = useState({
    firstName: operators[id].firstName,
    lastName: operators[id].lastName,
    email: operators[id].email,
    gender: operators[id].gender,
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
      roleId: 2,
    };
    updateEmployee(user, operators.id);
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      gender: "Male",
    });

    // if (!Object.keys(errors).length === 0) {
    //   console.log(Object.keys(errors).length);
    //   showModal(!isModalOpen);
    // } else {
    //   showModal(isModalOpen);
    // }
  };

  return (
    <div
      className="updateModalBackground"
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
                <h1 className="text-center text-xl font-bold">Update {name}</h1>
              </div>
              {emailExistError && (
                <div className="text-red-800 text-sm -mt-2 my-4 font-bold">
                  {emailExistError}
                </div>
              )}
            </div>
            <label>New First Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="firstName"
              placeholder="first name to be updated"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="text-red-800 text-sm -mt-4">
                {errors.firstName}
              </div>
            )}
            <label>New Last Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="lastName"
              placeholder="last name to be updated"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="text-red-800 text-sm -mt-4">
                {errors.lastName}
              </div>
            )}
            <label>New Email</label>
            <input
              type="text"
              name="email"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="new email to be updated"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-800 text-sm -mt-4">{errors.email}</div>
            )}
            <label>New Gender</label>
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
                Update Operator
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
  employees: state.employeesReducer.employees,
  isOperatorModalOpen: state.showModalReducer.isOperatorModalOpen,
});
UpdateOperatorForm.propTypes = {
  showModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  updateEmployee: PropTypes.func.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
  emailExistError: PropTypes.string.isRequired,
  isOperatorModalOpen: PropTypes.bool.isRequired,
  showOperatorModalAC: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, {
  updateEmployee,
  showOperatorModalAC,
})(UpdateOperatorForm);
