import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import roleFormValidations from "../../../validations/roleForm";
import { showRoleModalAC } from "../../../redux/actions/showRolePermissionModalAction";
import { updateRole } from "../../../redux/actions/roleActions";

const UpdateRoleForm = ({
  id,
  name,
  handleOutsideClickCloseModal,
  modalRef,
}) => {
  const { roles } = useSelector((state) => state.roleReducer);
  const { isRoleModalOpen } = useSelector(
    (state) => state.showRolePermissionModalReducer
  );
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showRoleModalAC(!isRoleModalOpen));
  };
  const role = roles.find((role) => role.id === id);

  const [values, setValues] = useState({
    name: role.name,
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
    setErrors(roleFormValidations(values));
    const role = { ...values };
    dispatch(updateRole(id, role));
    setValues({
      name: "",
    });
    dispatch(showRoleModalAC(!isRoleModalOpen));
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
            <label>New Role Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="name"
              placeholder="Role name to be updated"
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
                Update Role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateRoleForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default UpdateRoleForm;
