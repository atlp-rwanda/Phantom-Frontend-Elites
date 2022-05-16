import React, { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AddBusFormModal from "./AddBusFormModal";
import { useDispatch, useSelector } from "react-redux";
import { showModalActionCreator } from "../../../redux/actions/showModal";

// Add buses function component
const AddBus = ({ name }) => {
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
        <AddBusFormModal
          name={name}
          handleOutsideClickCloseModal={handleOutsideClickCloseModal}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

// Validations for props received
AddBus.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AddBus;
