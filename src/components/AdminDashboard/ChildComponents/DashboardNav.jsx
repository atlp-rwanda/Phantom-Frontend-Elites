import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../../../redux/actions/profileAction"
import AvatarDropdown from "../../AvatarDropdown";

const DashboardNav = ({
  navbarTitle,
  handleOutsideClick,
  modalRef,
  open,
  setOpen,
}) => {

  const dispatch = useDispatch();
  const profile = useSelector((state)=> state.profileReducer.profile);
  const storedInfo = localStorage.getItem("token");
  const userInfo = JSON.parse(storedInfo).user.user;

  const {id} = userInfo;

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [])


  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div
        onClick={handleOutsideClick}
        ref={modalRef}
        className="flex justify-between items-center bg-white border-b-2 border-gray-400 shadow-lg py-4 px-8"
      >
        <div>
          <h1 className="text-xl font-bold text-primary">{navbarTitle}</h1>
        </div>

        <div className="flex">
          <div className="border-2 border-[#A4A6B3] rounded mr-8 py-[1.5px]">
            <FontAwesomeIcon
              className="text-[#A4A6B3] text-lg pl-2"
              icon={faSearch}
            />
            <input className="outline-none px-4 text-[#A4A6B3]" type="text" />
          </div>
          <div className="mr-8">
            <FontAwesomeIcon
              className="text-3xl text-[#363740] cursor-pointer"
              icon={faBell}
            />
          </div>
          <div>
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover"
              src={profile.profilePic}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      {open && (
        <div className="">
          <AvatarDropdown handleLogout={handleLogout} />
        </div>
      )}
    </>
  );
};

DashboardNav.propTypes = {
  navbarTitle: PropTypes.string.isRequired,
  handleOutsideClick: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default DashboardNav;