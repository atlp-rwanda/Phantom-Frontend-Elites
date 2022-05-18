import React, { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { faCirclePlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AddDriverFormModal from "./AddDriverFormModal";
import { useSelector, useDispatch } from "react-redux";
import { showModalActionCreator } from "../../../redux/actions/showModal";

// Add employee function component
const AddDriver = ({ name }) => {
  const { isModalOpen } = useSelector((state) => state.showModalReducer);
  const dispatch = useDispatch();
  /** ref function for closing the modal
   * when a user clicks outside the model **/
  const toggleModal = () => {
    dispatch(showModalActionCreator(!isModalOpen));
  };

  const modalRef = useRef();

  const handleOutsideClickCloseModal = (e) => {
    if (modalRef.current === e.target) {
      dispatch(showModalActionCreator(!isModalOpen));
    }
  };

  /** callback func for closing the modal
   * when a user presses escape keyboard key **/

  const escKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isModalOpen) {
        dispatch(showModalActionCreator(!isModalOpen));
      }
    },
    [isModalOpen]
  );

  // useEffect func to run the escKey Press func

  useEffect(() => {
    document.addEventListener("keydown", escKeyPress);
    return () => document.removeEventListener("keydown", escKeyPress);
  }, [escKeyPress]);

  return (
    <div className="flex justify-end">
      <button className="border border-white rounded bg-[#363740] hover:bg-primary mr-6 py-[3px]">
        <FontAwesomeIcon className="text-white pr-2 pl-2" icon={faEye} />
        <Link
          className="pr-2 text-white border-transparent"
          to="/paginatedlist"
        >
          View Drivers assigned to Buses
        </Link>
      </button>
      <button
        onClick={toggleModal}
        className="border border-white rounded bg-[#363740] hover:bg-primary py-[3px]"
      >
        <FontAwesomeIcon className="text-white pr-2 pl-2" icon={faCirclePlus} />
        <Link className="pr-2 text-white border-transparent" to="">
          {name}
        </Link>
      </button>

      {isModalOpen && (
        <AddDriverFormModal
          name={name}
          handleOutsideClickCloseModal={handleOutsideClickCloseModal}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};
// Validations for props received
AddDriver.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AddDriver;