import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchDriversAssigned } from "../../../redux/actions/assignDriverBusAction";
import PaginatedList from "./PaginatedList";
import Table from "../../../skeleton/Table";

const PaginatedTable = () => {
  const { driversAssigned, isPending } = useSelector(
    (state) => state.assignDriverBusReducer
  );
  const dispatch = useDispatch();
  // Use effect function  to render drivers assigned
  useEffect(() => {
    dispatch(fetchDriversAssigned());
  }, []);

  return (
    <>
      <div className="bg-gray-100 rounded shadow-sm mx-0 lg:mx-[10%] pb-4">
        <h1 className="text-center text-xl text-primary font-bold py-4">
          List of Drivers Assigned
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
                  <th className="text-white px-2 py-[4px] w-[10px]">No</th>
                  <th className="text-white px-2 py-[4px] w-[180px]">
                    First Name
                  </th>
                  <th className="text-white px-2 py-[4px] w-[180px]">
                    Last Name
                  </th>
                  <th className="text-white px-2 py-[4px] w-[200px]">Email</th>
                  <th className="text-white px-2 py-[4px] w-[150px]">
                    Assigned Bus
                  </th>
                  <th className="text-white px-2 py-[4px] w-[230px]">
                    Company
                  </th>
                </tr>
              </thead>
              <tbody>
                <PaginatedList driversAssigned={driversAssigned} />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

// validations for props
PaginatedTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
};

export default PaginatedTable;