import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createPermission } from "../../../redux/actions/permissionActions";
import permissionFormValidations from "../../../validations/permissionFrom";
import { showModalActionCreator } from "../../../redux/actions/showModal";
import { useDispatch, useSelector } from "react-redux";

const AddPermissionFormModal = ({
  name,
  roleId,
  handleOutsideClickCloseModal,
  modalRef,
}) => {
  const { permissionExistsError, isModalOpen } = useSelector(
    (state) => state.permissionReducer
  );
  const dispatch = useDispatch();

  // DISPATCHING ACTION
  const createPermissions = (data) => dispatch(createPermission(data));
  const showModal = (value) => dispatch(showModalActionCreator(value));

  const handleCloseModal = () => showModal(isModalOpen);
  const [values, setValues] = useState({ name: "", roleId: "" });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, roleId, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      [roleId]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(permissionFormValidations(values));
    const permission = {
      name: values.name,
      roleId: values.roleId,
    };
    createPermissions(permission);
    setValues({
      name: "",
      roleId: "",
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
              {permissionExistsError && (
                <div className="text-red-800 text-sm -mt-2 my-4 font-bold">
                  {permissionExistsError}
                </div>
              )}
            </div>
            <label htmlFor="Full name">Permission Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="name"
              placeholder="Type permission name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-800 text-sm -mt-4">{errors.name}</div>
            )}
            <label>
              Role:
              <select value={values.roleId} onChange={handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            {/* 
            <label htmlFor="Role name">Role Name</label>
            <select
              name="roleId"
              id=""
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              value={values.roleId}
              onChange={handleChange}
            >
              <option value="selectRole" disabled>
                Select role
              </option>
              <option value="admin">Admin</option>
              <option value="driver">Driver</option>
              <option value="operator">Operator</option>
            </select> */}
            {errors.roleId && (
              <div className="text-red-800 text-sm -mt-4">{errors.roleId}</div>
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

AddPermissionFormModal.propTypes = {
  name: PropTypes.string.isRequired,
  roleId: PropTypes.string.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
};

export default AddPermissionFormModal;
