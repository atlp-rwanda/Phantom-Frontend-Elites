import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchPermissions } from "../../../redux/actions/permissionActions";
import PermissionsList from "./PermissionsList";
import Table from "../../../skeleton/Table";
import { useDispatch, useSelector } from "react-redux";

const PermissionsTable = ({ tableTitle }) => {
  const { isPending } = useSelector((state) => state.permissionReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPermissions());
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
                  <th className="text-white w-[300px]">Permission name</th>
                  <th className="text-white w-[300px]">Role</th>
                  <th className="text-white w-[150px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                <PermissionsList />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

PermissionsTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  fetchPermissions: PropTypes.func.isRequired,
  permissions: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default PermissionsTable;
