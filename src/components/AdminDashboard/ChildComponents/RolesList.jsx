import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteRole } from "../../../redux/actions/roleActions";
import UpdateRoleForm from "./updateRoleForm";
import { showRoleModalAC } from "./../../../redux/actions/showRolePermissionModalAction";

const RolesList = ({ roles }) => {
  const { isRoleModalOpen } = useSelector(
    (state) => state.showRolePermissionModalReducer
  );
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const handleUpdate = (id) => {
    setId(id);
  };
  const toggleRoleModal = () => {
    dispatch(showRoleModalAC(!isRoleModalOpen));
  };

  let num = 1;
  const deledeRoles = (value) => {
    dispatch(deleteRole(value));
  };

  const handleClick = (id) => {
    deledeRoles(id);
  };

  const rolesList = roles.map((role) => {
    return (
      <>
        <tr key={role.id}>
          <th className="text-black font-medium pl-2 pr-6">{num++}</th>
          <th className="text-black font-medium pl-2 pr-6">{role.name}</th>
          <th className="text-black pl-2 pt-[8px]">
            <button
              className="roleUpdateBtn mr-2"
              onClick={() => {
                toggleRoleModal();
                handleUpdate(role.id);
              }}
            >
              Update
            </button>
            <button
              className="roleDeleteBtn mr-2"
              onClick={() => handleClick(role.id)}
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
      {isRoleModalOpen && <UpdateRoleForm id={id} />}
      {rolesList}
    </>
  );
};

const mapStateToProps = (state) => ({
  roles: state.roleReducer.roles,
  isPending: state.roleReducer.isPending,
});

// Prop validations
RolesList.propTypes = {
  roles: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RolesList);
