import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchEmployees } from "../../../redux/actions/employeesAction";
import DriversList from "./DriversList";
import Table from "../../../skeleton/Table";

const DriversTable = ({ tableTitle, fetchEmployees, employees, isPending }) => {
  // Use effect function  to render operators
  useEffect(() => {
    fetchEmployees();
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
                  <th className="text-white w-[10px]">No</th>
                  <th className="text-white w-[100px]">FirstName</th>
                  <th className="text-white w-[100px]">LastName</th>
                  <th className="text-white w-[100px]">Email</th>
                  <th className="text-white w-[200px]">Road</th>
                  <th className="text-white w-[100px]">Bus</th>
                  <th className="text-white w-[205px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                <DriversList
                  employees={employees.filter(
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

const mapStateToProps = (state) => ({
  employees: state.employeesReducer.employees,
  isPending: state.employeesReducer.isPending,
});

// validations for props
DriversTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  fetchEmployees: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { fetchEmployees })(DriversTable);
