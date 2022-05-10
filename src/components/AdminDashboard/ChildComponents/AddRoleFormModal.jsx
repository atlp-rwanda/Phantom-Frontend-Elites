import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createRole } from "../../../redux/actions/roleActions";
import roleFormValidations from "../../../validations/roleForm";
import { showModalActionCreator } from "../../../redux/actions/showModal";
import { useDispatch, useSelector } from "react-redux";
// import roleReducer from "./../../../redux/reducers/roleReducer";

const AddRoleFormModal = ({ name, handleOutsideClickCloseModal, modalRef }) => {
  // STATES WE NEED useSelector HELPS TO GET STATES FROM STORE OUT OF THE BOX
  const { roleExistsError, isModalOpen } = useSelector(
    (state) => state.roleReducer
  );
  // PIPELINE DISPATCH TO REDUCER
  const dispatch = useDispatch();

  // DISPATCHING ACTION
  const createRoles = (data) => dispatch(createRole(data));
  const showModal = (value) => dispatch(showModalActionCreator(value));

  const handleCloseModal = () => showModal(isModalOpen);
  const [values, setValues] = useState({ name: "" });

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
    setErrors(roleFormValidations(values));
    const role = {
      name: values.name,
    };
    createRoles(role);
    setValues({
      name: "",
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
              {roleExistsError && (
                <div className="text-red-800 text-sm -mt-2 my-4 font-bold">
                  {roleExistsError}
                </div>
              )}
            </div>
            <label htmlFor="Full name">Role Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="name"
              placeholder="Type role name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-800 text-sm -mt-4">{errors.name}</div>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="mx-auto py-[5px] px-14 rounded bg-primary text-white font-bold hover:bg-gray-700 focus:outline-none my-1"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddRoleFormModal.propTypes = {
  name: PropTypes.string.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
};

export default AddRoleFormModal;
