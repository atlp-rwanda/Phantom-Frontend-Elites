import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateBusForm from "./UpdateBusForm";
import { deleteBus } from "../../../redux/actions/busesAction";
import {
  showAssignModalAC,
  showBusModalAC,
} from "../../../redux/actions/showModal";
import AssignDriverBusFormModal from "./AssignDriverBusFormModal";
import { unassign } from "../../../redux/actions/unassignDriverFromBusAction";

const BusesList = () => {
  const { isAssignModalOpen } = useSelector((state) => state.showModalReducer);
  const { buses } = useSelector((state) => state.busesReducer);
  const { isBusModalOpen } = useSelector((state) => state.showModalReducer);
  const dispatch = useDispatch();
  const [plateNo, setPlateNo] = useState();
  // handle click function
  const handleDelete = (plateNo) => {
    dispatch(deleteBus(plateNo));
  };
  const handleUpdate = (plateNo) => {
    setPlateNo(plateNo);
  };
  const handleAssign = (plateNo) => {
    setPlateNo(plateNo);
  };
  const handleUnassign = (id) => {
    dispatch(unassign(id));
  };
  const toggleAssignModal = () => {
    dispatch(showAssignModalAC(!isAssignModalOpen));
  };
  // num
  const toggleBusModal = () => {
    dispatch(showBusModalAC(!isBusModalOpen));
  };
  // num definition to increment the Sn column
  let num = 1;

  // function to map through all buses
  const busList = buses.map((bus) => {
    return (
      <tr key={bus.plateNo}>
        <th className="text-black font-medium px-2">{num++}</th>
        <th className="text-black font-medium px-2">{bus.brand}</th>
        <th className="text-black font-medium px-2 pt-[8px]">{bus.plateNo}</th>
        <th className="text-black font-medium px-2 pt-[8px]">
          {bus.driverId !== null ? (
            `${bus.drivers.firstName} ${bus.drivers.lastName}`
          ) : (
            <p>-----</p>
          )}
        </th>
        <th className="text-black font-medium px-2 pt-[8px]">{bus.seats}</th>
        <th className="text-black font-medium px-2 pt-[8px]">{bus.status}</th>
        <th className="text-black pt-[8px] px-2">
          <button
            title="Assign Bus"
            className="assignbtn mr-2"
            onClick={() => {
              toggleAssignModal();
              handleAssign(bus.plateNo);
            }}
          >
            Assign
          </button>
          <button
            title="Unassign Bus"
            className="unassignbtn mr-2"
            onClick={() => {
              handleUnassign(bus.drivers.id);
            }}
          >
            Unassign
          </button>
          <button
            className="updatebtn mr-2"
            onClick={() => {
              toggleBusModal();
              handleUpdate(bus.plateNo);
            }}
          >
            Update
          </button>
          <button
            className="deletebtn mr-2"
            onClick={() => {
              handleDelete(bus.plateNo);
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
      {isBusModalOpen && <UpdateBusForm plateNo={plateNo} />}
      {isAssignModalOpen && <AssignDriverBusFormModal plateNo={plateNo} />}
      {busList}
    </>
  );
};

export default BusesList;
