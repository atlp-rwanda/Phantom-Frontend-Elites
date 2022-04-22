import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */

const baseUrl = "http://localhost:3000/api/v1/reset-password";

const NewPassword = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let newPassword = e.target.elements.newPassword?.value;
    let confirmPassword = e.target.elements.confirmPassword?.value;

    console.log(newPassword, confirmPassword);
  };
  const location = useLocation();

  const verifyToken = async () => {
    try {
      const { token, id } = queryString.parse(location.search);
      const { data } = await axios(
        `${baseUrl}/verfy-token?token=${token}&id=${id}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="h-screen flex bg-gray-bg1 ">
      <div className="w-full max-w-lg m-auto bg-white rounded-xl border border-primaryBorder py-10 px-16 drop-shadow-2xl">
        <h1 className="text-4xl font-medium text-primary mt-3 mb-5 text-center">
          Create New Password
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <p className=" text-center  mb-6 text-sm">
              Your password must be at least 6 characters and should include a
              combination of numbers, letters and special characters.
            </p>

            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="newPassword"
              placeholder="New Password"
            />
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex justify-center items-center mt-2">
            <button
              className={`w-full bg-black py-2 px-4 text-sm  font-semibold text-white rounded border border-black focus:outline-none focus:border-green-dark`}
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
