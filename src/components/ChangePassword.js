import React, { useState, useEffect } from "react";
import { faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import changePasswordFormValidations from "../validations/changePassword";
import ChangePwdLoader from "../skeleton/ChangePwdLoader";

const ChangePassword = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("errors-----", errors.currentPassword);
    setErrors(changePasswordFormValidations(values));
    const user = { ...values };
    console.log("************", user);
  };

  // navigate('/')

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setValues({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowLoading(!showLoading);
    }
  }, [errors]);

  return (
    <div className="h-screen flex mx-2">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border py-10 lg:px-10 px-6 drop-shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="text-center font-bold justify-center text-2xl text-primary mb-6 tracking-wider">
            <FontAwesomeIcon className="text-4xl" icon={faKey} />
            <h1 className="pb-3">Change Password</h1>
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 text-primary border-2 border-gray-400 rounded-md outline-gray-500 text-sm mb-6"
              name="currentPassword"
              value={values.currentPassword}
              onChange={handleOnChange}
              placeholder="Current Password"
            />
            {errors.currentPassword && (
              <div className="text-red-800 text-sm -mt-6 mb-2">
                {errors.currentPassword}
              </div>
            )}
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 text-primary border-2 border-gray-400 rounded-md outline-gray-500 text-sm mb-6"
              id="newPassword"
              name="newPassword"
              value={values.newPassword}
              onChange={handleOnChange}
              placeholder="New Password"
            />
            {errors.newPassword && (
              <div className="text-red-800 text-sm -mt-6 mb-2">
                {errors.newPassword}
              </div>
            )}
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 text-primary border-2 border-gray-400 rounded-md outline-gray-500 text-sm mb-6"
              id="confirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm New Password"
            />
            {errors.confirmPassword && (
              <div className="text-red-800 text-sm -mt-6 mb-2">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <div
            onClick={handleShowPassword}
            className="flex lg:flex-row flex-col justify-center m-auto items-center w-[200px] space-x-2 cursor-pointer pb-3 font-semibold tracking-wide"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
            <p>Show Password</p>
          </div>
          <div className="flex justify-center items-center mt-2">
            <button
              type="submit"
              className="w-full bg-black py-[10px] px-4 text-md  font-semibold tracking-wider text-white rounded-md hover:bg-gray-700"
            >
              {!showLoading ? <ChangePwdLoader /> : "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
