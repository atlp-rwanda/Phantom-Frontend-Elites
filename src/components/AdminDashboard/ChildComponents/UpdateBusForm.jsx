import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import busesFormValidations from "../../../validations/busForm";
import { showBusModalAC } from "../../../redux/actions/showModal";
import { updateBus } from "../../../redux/actions/busesAction";

const UpdateBusForm = ({ plateNo, name }) => {
  const { buses } = useSelector((state) => state.busesReducer);
  const { isBusModalOpen } = useSelector((state) => state.showModalReducer);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showBusModalAC(!isBusModalOpen));
  };
  const bus = buses.find((bus) => bus.plateNo === plateNo);

  // const operator = operators[id-1]
  const [values, setValues] = useState({
    brand: bus.brand,
    plateNo: bus.plateNo,
    seats: bus.seats,
    status: bus.status,
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(busesFormValidations(values));
    const busData = { ...values };
    dispatch(updateBus(plateNo, busData));
    setValues({
      brand: "",
      plateNo: "",
      seats: "",
      status: "inactive",
    });
    dispatch(showBusModalAC(!isBusModalOpen));
  };

  const modalRef = useRef();

  /** callback func for closing the modal
   * when a user presses escape keyboard key **/
  const escKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        dispatch(showBusModalAC(!isBusModalOpen));
      }
    },
    [isBusModalOpen]
  );

  // useEffect func to run the escKey Press func

  useEffect(() => {
    document.addEventListener("keydown", escKeyPress);
    return () => document.removeEventListener("keydown", escKeyPress);
  }, [escKeyPress]);

  return (
    <div className="updateModalBackground" ref={modalRef}>
      <div className="bg-grey-lighter flex flex-col">
        <div className="w-[450px] mx-auto mt-0 flex flex-col items-center justify-center  px-2">
          {/* Registration form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white px-[40px] py-4 rounded shadow-md text-black w-full"
          >
            <div className="flex-col">
              <div className="flex justify-end">
                <button onClick={handleCloseModal}>
                  <FontAwesomeIcon
                    className="text-2xl text-primary"
                    icon={faXmark}
                  />
                </button>
              </div>
              <div className="mb-6">
                <h1 className="text-center text-xl font-bold">Update {name}</h1>
              </div>
            </div>
            <label>New Brand Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="brand"
              placeholder="Brand name to be updated"
              value={values.brand}
              onChange={handleChange}
            />
            {errors.brand && (
              <div className="text-red-800 text-sm -mt-4">{errors.brand}</div>
            )}
            <label>New plate number</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="plateNo"
              placeholder="Plate number to be updated"
              value={values.plateNo}
              onChange={handleChange}
            />
            {errors.plateNo && (
              <div className="text-red-800 text-sm -mt-4">{errors.plateNo}</div>
            )}
            <label>New seats</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="seats"
              placeholder="Number of seats to be updated"
              value={values.seats}
              onChange={handleChange}
            />
            {errors.seats && (
              <div className="text-red-800 text-sm -mt-4">{errors.seats}</div>
            )}
            <label>New status of the bus</label>
            <select
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="status"
              value={values.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className="text-center">
              <button
                type="submit"
                className="mx-auto py-[5px] px-14 rounded bg-primary text-white font-bold hover:bg-gray-700 focus:outline-none my-1"
              >
                Update Bus
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateBusForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleOutsideClickCloseModal: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
  plateNo: PropTypes.number.isRequired,
};

export default UpdateBusForm;
