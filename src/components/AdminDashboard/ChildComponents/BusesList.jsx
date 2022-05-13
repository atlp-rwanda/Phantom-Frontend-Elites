import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateBusForm from "./UpdateBusForm";
import { deleteBus } from "../../../redux/actions/busesAction";
import { showBusModalAC } from "../../../redux/actions/showModal";

const BusesList = () => {
  const { buses } = useSelector((state) => state.busesReducer);
  const { isBusModalOpen } = useSelector((state) => state.showModalReducer);
  const dispatch = useDispatch();

  const [plateNo, setPlateNo] = useState();
  // handle click function
  const handleDelete = (plateNo) => {
    dispatch(deleteBus(plateNo));
    console.log("plateNo to be deleted", plateNo);
  };
  const handleUpdate = (plateNo) => {
    setPlateNo(plateNo);
  };
  const toggleBusModal = () => {
    dispatch(showBusModalAC(!isBusModalOpen));
  };
  // num definition to increment the Sn column
  let num = 1;

  // function to map through all buses
  const busList = buses.map((bus) => {
    return (
      <tr key={bus.id}>
        <th className="text-black font-medium pr-6">{num++}</th>
        <th className="text-black font-medium pr-6">{bus.brand}</th>
        <th className="text-black font-medium pr-6 pt-[8px]">{bus.plateNo}</th>
        <th className="text-black font-medium pr-6 pt-[8px]">
          {bus.driverId !== null ? bus.driverId : <p>-----</p>}
        </th>
        <th className="text-black font-medium pr-6 pt-[8px]">{bus.seats}</th>
        <th className="text-black font-medium pr-6 pt-[8px]">{bus.status}</th>
        <th className="text-black pt-[8px]">
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
      {busList}
    </>
  );
};

export default BusesList;
