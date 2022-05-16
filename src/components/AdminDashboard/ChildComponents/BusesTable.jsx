import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchBuses } from "../../../redux/actions/busesAction";
import BusesList from "./BusesList";
import Table from "../../../skeleton/Table";
import { unassign } from "../../../redux/actions/unassignDriverFromBusAction";

const BusesTable = ({ tableTitle }) => {
  const { isPending } = useSelector((state) => state.busesReducer);
  const { driverFirstname, driverLastname } = useSelector(
    (state) => state.assignDriverBusReducer
  );
  const dispatch = useDispatch();
  const { firstname, lastname } = useSelector(
    (state) => state.unassignDriverFromBusReducer
  );
  // Use effect function  to render operators
  useEffect(() => {
    dispatch(fetchBuses());
    dispatch(unassign);
  }, [driverFirstname, driverLastname, firstname, lastname]);

  return (
    <>
      <div className="bg-gray-100 rounded shadow-sm mx-0 lg:mx-[10%] pb-4">
        <h1 className="text-center text-xl text-primary font-bold py-4">
          {tableTitle}
        </h1>

        {isPending ? (
          <div className="flex justify-center">
            <Table />
          </div>
        ) : (
          <div className="text-left lg:mx-8 mx-auto text-sm lg:leading-6 lg:tracking-wider lg:overflow-hidden flex lg:justify-center lg:w-auto w-[95vw] overflow-x-scroll">
            <table className="rounded-t-lg overflow-hidden">
              <thead className="bg-primary font-bold">
                <tr>
                  <th className="text-white px-2 py-[4px] w-[10px]">No</th>
                  <th className="text-white px-2 py-[4px] w-[160px]">
                    Bus Brand
                  </th>
                  <th className="text-white px-2 py-[4px] w-[160px]">
                    Plate No
                  </th>
                  <th className="text-white px-2 py-[4px] w-[310px]">
                    Assigned Driver
                  </th>
                  <th className="text-white px-2 py-[4px] w-[160px]">
                    No of Seats
                  </th>
                  <th className="text-white px-2 py-[4px] w-[120px]">Status</th>
                  <th className="text-white px-2 py-[4px] w-[560px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <BusesList />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

// validations for props
BusesTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
};

export default BusesTable;
