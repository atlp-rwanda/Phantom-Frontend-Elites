import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./AddEmployeeFormModal.css";
import { register } from "../../../redux/actions/operatorsAction";

const AddEmployeeFormModal = ({
  name,
  closeModal,
  register,
  handleOutsideClickCloseModal,
  modalRef,
}) => {
  // field states
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [role, setRole] = useState("2");

  // handle submit func
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstname,
      lastName: lastname,
      email,
      gender,
      roleId: role,
    };
    register(user);
    setFirstname("");
    setLastname("");
    setEmail("");
    setGender("Select Gender");
    setRole("2");
  };

  return (
    <div
      className="modelBackground"
      ref={modalRef}
      onClick={handleOutsideClickCloseModal}
    >
      <div className="bg-grey-lighter flex flex-col">
        <div className="w-[450px] mx-auto mt-0 flex flex-col items-center justify-center  px-2">
          <div className="bg-white px-[40px] py-4 rounded shadow-md text-black w-full">
            <div className="flex-col">
              <div className="flex justify-end">
                <button onClick={() => closeModal(false)}>
                  <FontAwesomeIcon
                    className="text-2xl text-primary"
                    icon={faXmark}
                  />
                </button>
              </div>
              <div className="mb-4">
                <h1 className="text-center text-xl font-bold">
                  Register {name}
                </h1>
              </div>
            </div>
            <label htmlFor="Full name">First Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="Full name">Last Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="example@xxx.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Full name">Gender</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option disabled value="Select Gender">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label htmlFor="role">Role Id</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              title="Choose 2 for driver and 3 for operator"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
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
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddEmployeeFormModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.func.isRequired,
};

export default connect(null, { register })(AddEmployeeFormModal);
