import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { toast } from "react-toastify";

/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */

const baseUrl =
  "https://phantom-backend-elites.herokuapp.com/api/v1/reset-password";

const NewPassword = () => {
  const location = useLocation();
  const [invalidUser, setInvalidUser] = useState("");
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");
  const [newPassword, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const { token, email } = queryString.parse(location.search);
  console.log(token.trim());

  const verifyToken = async () => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/verify-token?token=${token}&email=${email}`
      );
      console.log(data);
      setBusy(false);
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) return setInvalidUser(data.message);
      }
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;

    setPassword({ ...newPassword, [name]: value });
  };
  const { password, confirmPassword } = newPassword;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    console.log(confirmPassword);
    if (password.trim().length < 8 || password.trim().length > 30) {
      return setError("Password must be 8 to 30 characters long!");
    }
    if (password !== confirmPassword) {
      return setError("Password does not match!");
    }

    try {
      setBusy(true);
      const { data } = await axios.post(`${baseUrl}/new-password`, {
        token,
        password,
        confirmPassword,
      });
      if (data.status === "ok") {
        toast.success(`${data.message}`, {
          position: "top-center",
        });
        navigate("/");
      }
      setBusy(false);
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) return setError(data.error);
      }
    }
  };

  if (success)
    return (
      <div className="w-50 m-auto pt-40 object-center bg-white">
        <h1 className="text-center justify-center text-3xl text-gray-500 mb-3">
          Password Reset Successfully! You can now login.
        </h1>
      </div>
    );

  if (invalidUser)
    return (
      <div className="w-50 m-auto pt-40 object-center bg-white">
        <h1 className="text-center justify-center text-3xl text-gray-500 mb-3">
          {invalidUser}
        </h1>
      </div>
    );
  if (busy)
    return (
      <div className="w-50 m-auto pt-40 object-center bg-white">
        <h1 className="text-center justify-center text-3xl text-gray-500 mb-3">
          Hold on! Verifying reset token...
        </h1>
      </div>
    );

  return (
    <div className="h-screen flex bg-gray-bg1 ">
      <div className="w-full max-w-lg m-auto bg-white rounded-xl border border-primaryBorder py-10 px-16 drop-shadow-2xl">
        <h1 className="text-4xl font-medium text-primary mt-3 mb-5 text-center">
          Create New Password
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            {error && (
              <p className=" text-center  mb-6 text-sm p-2 border rounded-md font-semibold bg-red-500 text-white">
                {error}
              </p>
            )}

            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="newPassword"
              name="password"
              onChange={handleOnChange}
              placeholder="New Password"
            />
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleOnChange}
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
