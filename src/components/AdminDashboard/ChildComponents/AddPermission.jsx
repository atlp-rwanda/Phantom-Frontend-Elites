import React, { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AddPermissionFormModal from "./AddPermissionFormModal";
import { connect } from "react-redux";
import { showModalActionCreator } from "../../../redux/actions/showRolePermissionModalAction";

const AddPermission = ({
  name,
  roleId,
  isModalOpen,
  showModalActionCreator: showModal,
}) => {
  const toggleModal = () => {
    showModal(!isModalOpen);
  };

  const modalRef = useRef();

  const handleOutsideClickCloseModal = (e) => {
    if (modalRef.current === e.target) {
      showModal(!isModalOpen);
    }
  };

  const escKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isModalOpen) {
        showModal(!isModalOpen);
      }
    },
    [isModalOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", escKeyPress);
    return () => document.removeEventListener("keydown", escKeyPress);
  }, [escKeyPress]);

  return (
    <div className="flex justify-end">
      <button
        onClick={toggleModal}
        className="border border-white rounded bg-[#363740] py-[3px]"
      >
        <FontAwesomeIcon className="text-white pr-2 pl-2" icon={faCirclePlus} />
        <Link className="pr-2 text-white border-transparent" to="">
          {name}
        </Link>
      </button>

      {isModalOpen && (
        <AddPermissionFormModal
          name={name}
          handleOutsideClickCloseModal={handleOutsideClickCloseModal}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isModalOpen: state.showRolePermissionModalReducer.isModalOpen,
});

AddPermission.propTypes = {
  name: PropTypes.string.isRequired,
  roleId: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  showModalActionCreator: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { showModalActionCreator })(
  AddPermission
);
