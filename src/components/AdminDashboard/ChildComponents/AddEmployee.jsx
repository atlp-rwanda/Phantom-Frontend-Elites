import React, { useState, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AddEmployeeFormModal from "./AddEmployeeFormModal";

// Add employee function component
const AddEmployee = ({ name }) => {
  // open model state
  const [showModal, setShowModal] = useState(false);

  /** ref function for closing the modal
   * when a user clicks outside the model **/

  const modalRef = useRef();
  const handleOutsideClickCloseModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  /** callback func for closing the modal
   * when a user presses escape keyboard key **/

  const escKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  // useEffect func to run the escKey Press func

  useEffect(() => {
    document.addEventListener("keydown", escKeyPress);
    return () => document.removeEventListener("keydown", escKeyPress);
  }, [escKeyPress]);

  return (
    <div className="flex justify-end">
      <button
        onClick={() => setShowModal(true)}
        className="border border-white rounded bg-[#363740] py-[3px]"
      >
        <FontAwesomeIcon className="text-white pr-2 pl-2" icon={faCirclePlus} />
        <Link className="pr-2 text-white border-transparent" to="">
          {name}
        </Link>
      </button>

      {showModal && (
        <AddEmployeeFormModal
          name={name}
          closeModal={setShowModal}
          handleOutsideClickCloseModal={handleOutsideClickCloseModal}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

// Validations for props received
AddEmployee.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AddEmployee;
