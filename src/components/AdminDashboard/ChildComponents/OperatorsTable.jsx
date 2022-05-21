import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../../redux/actions/employeesAction";
import OperatorsList from "./OperatorsList";
import Table from "../../../skeleton/Table";

const OperatorsTable = ({ tableTitle }) => {
  const { isPending } = useSelector((state) => state.employeesReducer);
  const dispatch = useDispatch();
  // Use effect function  to render operators
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <div className="bg-gray-100 rounded shadow-sm mx-0 lg:mx-[10%] pb-4 -z-50">
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
                  <th className="text-white px-2 py-[4px] w-[200px]">
                    FirstName
                  </th>
                  <th className="text-white px-2 py-[4px] w-[180px]">
                    LastName
                  </th>
                  <th className="text-white px-2 py-[4px] w-[200px]">Email</th>
                  <th className="text-white px-2 py-[4px] w-[200px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <OperatorsList />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

// validations for props
OperatorsTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
};

export default OperatorsTable;