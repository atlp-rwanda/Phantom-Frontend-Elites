import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDrivers } from "../../../redux/actions/driversAction";
import DriversList from "./DriversList";

const DriversTable = ({ tableTitle, fetchDrivers, drivers }) => {
  // Use effect function  to render operators
  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <>
      <div className="bg-gray-100 rounded shadow-sm mx-[10%] pb-4">
        <h1 className="text-center text-xl text-primary font-bold py-4">
          {tableTitle}
        </h1>
        <div className="text-left mx-8 text-sm leading-6 tracking-wider flex justify-center">
          <table className="w-auto rounded-t-lg overflow-hidden">
            <thead className="bg-primary font-bold">
              <tr>
                <th className="text-white px-2">No</th>
                <th className="text-white px-2">FirstName</th>
                <th className="text-white px-2">LastName</th>
                <th className="text-white px-2">Email</th>
                <th className="text-white px-2">Road</th>
                <th className="text-white px-2">Bus</th>
                <th className="text-white px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <DriversList
                drivers={drivers.filter((driver) => driver.roleId === 3)}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  drivers: state.drivers.drivers,
});

// validations for props
DriversTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  fetchDrivers: PropTypes.func.isRequired,
  drivers: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchDrivers })(DriversTable);
