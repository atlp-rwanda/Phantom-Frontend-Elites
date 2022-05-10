import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import permissionFormValidations from "../../../validations/permissionFrom";
import { showPermissionModalAC } from "../../../redux/actions/showRolePermissionModalAction";
import { updatePermission } from "../../../redux/actions/permissionActions";

const UpdatePermissionForm = ({
  id,
  name,
  roleId,
  handleOutsideClickCloseModal,
  modalRef,
}) => {
  const { permissions } = useSelector((state) => state.permissionReducer);
  const { isPermissionModalOpen } = useSelector(
    (state) => state.showRolePermissionModalReducer
  );
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showPermissionModalAC(!isPermissionModalOpen));
  };
  const permission = permissions.find((permission) => permission.id === id);

  const [values, setValues] = useState({
    name: permission.name,
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
    setErrors(permissionFormValidations(values));
    const permission = { ...values };
    dispatch(updatePermission(id, permission));
    setValues({
      name: "",
      roleId: "",
    });
    dispatch(showPermissionModalAC(!isPermissionModalOpen));
  };

  return (
    <div
      className="updateModalBkgnd"
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
            </div>
            <label>New permission name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="name"
              placeholder="Permission name to be updated"
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
                Update Permission
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdatePermissionForm.propTypes = {
  name: PropTypes.string.isRequired,
  roleId: PropTypes.string.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default UpdatePermissionForm;
