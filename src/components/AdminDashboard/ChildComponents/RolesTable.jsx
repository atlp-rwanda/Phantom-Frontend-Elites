import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRoles } from "../../../redux/actions/roleActions";
import RolesList from "./RolesList";
import Table from "../../../skeleton/Table";

const RolesTable = ({ tableTitle, fetchRoles, roles, isPending }) => {
  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <>
      <div className="bg-gray-100 rounded shadow-sm mx-[10%] pb-4">
        <h1 className="text-center text-xl text-primary font-bold py-4">
          {tableTitle}
        </h1>
        {isPending ? (
          <div className="flex justify-center">
            <Table />
          </div>
        ) : (
          <div className="text-left mx-8 text-sm leading-6 tracking-wider flex justify-center">
            <table className="w-auto rounded-t-lg overflow-hidden">
              <thead className="bg-primary font-bold">
                <tr>
                  <th className="text-white w-[10px] px-2 py-2">No</th>
                  <th className="text-white w-[300px]">Role name</th>
                  <th className="text-white w-[150px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                <RolesList roles={roles} />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  roles: state.roleReducer.roles,
  isPending: state.roleReducer.isPending,
});

RolesTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  fetchRoles: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { fetchRoles })(RolesTable);
