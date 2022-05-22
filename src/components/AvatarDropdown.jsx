import React from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import {
  faArrowRightFromBracket,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const AvatarDropdown = ({ handleLogout }) => {

  const navigate = useNavigate();

  const handleProfileClicked = () => {
    navigate("/profile");
  }

  return (
    <div className="avatarDropdown shadow-md">
      <div className="dropdownItems">
        <button onClick={handleProfileClicked}
        >My Profile</button>
      </div>
      <hr className="my-2 border-[0.5px] border-gray-800 bg-gray-800" />
      <div className="dropdownItems">
        <FontAwesomeIcon icon={faKey} className="mr-2 icon text-gray-700" />
        <NavLink to="/changepassword">
          <button>Change Password</button>
        </NavLink>
      </div>
      <div className="dropdownItems">
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="mr-2 text-gray-800 icon"
        />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

AvatarDropdown.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default AvatarDropdown;