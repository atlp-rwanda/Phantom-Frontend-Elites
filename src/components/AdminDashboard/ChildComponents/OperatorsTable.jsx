import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchOperators } from "../../../redux/actions/operatorsAction";
import OperatorsList from "./OperatorsList";

const OperatorsTable = ({ tableTitle, fetchOperators, operators }) => {
  // Use effect function  to render operators
  useEffect(() => {
    fetchOperators();
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
                <th className="text-white px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <OperatorsList
                operators={operators.filter(
                  (operator) => operator.roleId === 2
                )}
              />
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  operators: state.operatorsReducer.operators,
  errors: state.operatorsReducer.errors,
});

// validations for props
OperatorsTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  fetchOperators: PropTypes.func.isRequired,
  operators: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchOperators })(OperatorsTable);
