import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../../redux/actions/employeesAction";
import DriversList from "./DriversList";
import Table from "../../../skeleton/Table";

const DriversTable = ({ tableTitle }) => {
  const { employees, isPending } = useSelector(
    (state) => state.employeesReducer
  );
  const dispatch = useDispatch();
  // Use effect function  to render operators
  useEffect(() => {
    dispatch(fetchEmployees());
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
                  <th className="text-white w-[100px]">FirstName</th>
                  <th className="text-white w-[100px]">LastName</th>
                  <th className="text-white w-[100px]">Email</th>
                  <th className="text-white w-[200px]">Road</th>
                  <th className="text-white w-[50px]">Bus</th>
                  <th className="text-white w-[255px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                <DriversList
                  drivers={employees.filter(
                    (employee) => employee.roleId === 3
                  )}
                />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

// validations for props
DriversTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
};

export default DriversTable;
