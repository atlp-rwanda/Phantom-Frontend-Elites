import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchBuses } from "../../../redux/actions/busesAction";
import BusesList from "./BusesList";
import Table from "../../../skeleton/Table";

const BusesTable = ({ tableTitle }) => {
  const { isPending } = useSelector((state) => state.busesReducer);
  const dispatch = useDispatch();
  // Use effect function  to render operators
  useEffect(() => {
    dispatch(fetchBuses());
  }, []);

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
          <div className="text-left mx-8 text-sm leading-6 tracking-wider flex justify-center">
            <table className="w-auto rounded-t-lg overflow-hidden">
              <thead className="bg-primary font-bold">
                <tr>
                  <th className="text-white w-[10px]">No</th>
                  <th className="text-white w-[260px]">Bus Brand</th>
                  <th className="text-white w-[220px]">Plate No</th>
                  <th className="text-white w-[310px]">Assigned Driver</th>
                  <th className="text-white w-[230px]">No of Seats</th>
                  <th className="text-white w-[220px]">Status</th>
                  <th className="text-white w-[230px]">Actions</th>
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
