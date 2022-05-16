import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateOperatorForm from "./UpdateOperatorForm";
import { deleteEmployee } from "../../../redux/actions/employeesAction";
import { showOperatorModalAC } from "../../../redux/actions/showModal";

const OperatorsList = () => {
  const { employees } = useSelector((state) => state.employeesReducer);
  const { isOperatorModalOpen } = useSelector(
    (state) => state.showModalReducer
  );
  const dispatch = useDispatch();

  const [id, setId] = useState();
  // handle click function
  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };
  const handleUpdate = (id) => {
    setId(id);
  };
  const toggleOperatorModal = () => {
    dispatch(showOperatorModalAC(!isOperatorModalOpen));
  };
  // num definition to increment the Sn column
  let num = 1;

  const operators = employees.filter((operator) => operator.roleId === 2);

  // function to map through all operators
  const operatorsList = operators.map((operator) => {
    return (
      <tr key={operator.id}>
        <th className="text-black font-medium px-2">{num++}</th>
        <th className="text-black font-medium px-2">{operator.firstName}</th>
        <th className="text-black font-medium px-2 pt-[8px]">
          {operator.lastName}
        </th>
        <th className="text-black font-medium px-2 pt-[8px]">
          {operator.email}
        </th>
        <th className="text-black pt-[8px] px-2">
          <button
            className="updatebtn mr-2"
            onClick={() => {
              toggleOperatorModal();
              handleUpdate(operator.id);
            }}
          >
            Update
          </button>
          <button
            className="deletebtn mr-2"
            onClick={() => {
              handleDelete(operator.id);
            }}
          >
            Delete
          </button>
        </th>
      </tr>
    );
  });

  return (
    <>
      {isOperatorModalOpen && <UpdateOperatorForm id={id} />}
      {operatorsList}
    </>
  );
};

export default OperatorsList;
