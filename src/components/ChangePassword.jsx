import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */

const baseUrl = "http://localhost:3000/api/v1/reset-password";

const NewPassword = () => {
  const location = useLocation();
  const [invalidUser, setInvalidUser] = useState("");

  useEffect(() => {
    try {
      async () => {
        const { token, email } = queryString.parse(location.search);
        const { data } = await axios(
          `${baseUrl}/verify-token?token=${token}&email=${email}`
        );
        console.log(data);
      };
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.succes) return setInvalidUser(data.error);
        return console.log(error);
      }
    }
  }, []);

  if (invalidUser)
    return (
      <div className="max-w-screen-sm m-auto pt-40">
        <h1 className="text-center text-3xl text-gray-500 mb-3">
          {invalidUser}
        </h1>
      </div>
    );

  return (
    <div className="h-screen flex bg-gray-bg1 ">
      <div className="w-full max-w-lg m-auto bg-white rounded-xl border border-primaryBorder py-10 px-16 drop-shadow-2xl">
        <h1 className="text-4xl font-medium text-primary mt-3 mb-5 text-center">
          Create New Password
        </h1>

        <form>
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
