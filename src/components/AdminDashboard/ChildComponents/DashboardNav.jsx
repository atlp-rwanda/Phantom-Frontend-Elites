import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AvatarDropdown from "../../AvatarDropdown";
import MobileSideBar from "./MobileSideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/actions/profileAction";

const DashboardNav = ({
  navbarTitle,
  handleOutsideClick,
  modalRef,
  open,
  setOpen,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const dispatch = useDispatch();
  const profile = useSelector((state)=> state.profileReducer.profile);
  const storedInfo = localStorage.getItem("token");
  const userInfo = JSON.parse(storedInfo)?.user.user;

  let id
  userInfo? {id} = userInfo : id = null;

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [])


  return (
    <>
      <div
        onClick={handleOutsideClick}
        ref={modalRef}
        className="flex justify-between items-center bg-white border-b-2 border-[#3C3868] shadow-lg py-4 px-8"
      >
        <div className="block lg:hidden">
          {!openMenu ? (
            <FontAwesomeIcon
              className="text-3xl flex items-center cursor-pointer"
              icon={faBars}
              onClick={handleOpenMenu}
            />
          ) : (
            <FontAwesomeIcon
              className="text-3xl flex items-center cursor-pointer"
              icon={faXmark}
              onClick={handleOpenMenu}
            />
          )}
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#3C3868]">{navbarTitle}</h1>
        </div>

        <div className="flex">
          <div className="mr-8">
            <FontAwesomeIcon
              className="text-3xl text-[#3C3868] cursor-pointer"
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
      {openMenu && (
        <div>
          <MobileSideBar />
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