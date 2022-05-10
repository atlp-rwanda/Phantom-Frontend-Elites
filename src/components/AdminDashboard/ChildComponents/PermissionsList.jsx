import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deletePermission } from "../../../redux/actions/permissionActions";
import UpdatePermissionForm from "./updatePermissionForm";
import { showPermissionModalAC } from "./../../../redux/actions/showRolePermissionModalAction";

const PermissionsList = () => {
  const permissions = useSelector(
    (state) => state.permissionReducer.permissions
  );

  console.log("....................");
  console.log(permissions);
  console.log("-----------------");
  const { isPermissionModalOpen } = useSelector(
    (state) => state.showRolePermissionModalReducer
  );

  const dispatch = useDispatch();

  const [id, setId] = useState();

  const handleUpdate = (id) => {
    setId(id);
  };
  const togglePermissionModal = () => {
    dispatch(showPermissionModalAC(!isPermissionModalOpen));
  };

  let num = 1;
  const deledePermissions = (value) => {
    dispatch(deletePermission(value));
  };

  const handleClick = (id) => {
    deledePermissions(id);
  };
  const permissionsList = permissions.map((permission) => {
    return (
      <>
        <tr key={permission.id}>
          <th className="text-black font-medium pl-2 pr-6">{num++}</th>
          <th className="text-black font-medium pl-2 pr-6">
            {permission.name}
          </th>
          <th className="text-black pl-2 pt-[8px]">
            <button
              className="roleUpdateBtn mr-2"
              onClick={() => {
                togglePermissionModal();
                handleUpdate(permission.id);
              }}
            >
              Update
            </button>
            <button
              className="roleDeleteBtn mr-2"
              onClick={() => handleClick(permission.id)}
            >
              Delete
            </button>
          </th>
        </tr>
      </>
    );
  });
  return (
    <>
      {isPermissionModalOpen && <UpdatePermissionForm id={id} />}
      {permissionsList}
    </>
  );
};

PermissionsList.propTypes = {
  permissions: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default PermissionsList;
