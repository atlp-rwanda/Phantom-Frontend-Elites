import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "./NavbarComponent/Navbar";
import Footer from "./Footer";

/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */
const ResetLink = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userEmail = e.target.elements.email?.value;
    const userData = {
      email: userEmail,
    };

    const { data } = await axios.post(
      "https://phantom-backend-elites.herokuapp.com/api/v1/reset-password/link",
      userData
    );
    console.log(data);
    if (data.status === 400) {
      toast.error(`${data.message}`, {
        position: "top-center",
      });
    } else {
      toast.success(`${data.message}`, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex bg-gray-bg1 ">
        <div className="w-full max-w-lg m-auto bg-white rounded-xl border border-primaryBorder py-10 px-16 drop-shadow-2xl">
          <h1 className="text-4xl font-medium text-primary mt-3 mb-5 text-center">
            Reset Your Password
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div>
              <p className=" text-center  mb-6 text-sm">
                Enter your Email address and we’ll send you a link to reset your
                password
              </p>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="email@example.com"
              />
            </div>

            <div className="flex justify-center items-center mt-2">
              <button
                className={`w-full bg-black py-2 px-4 text-sm text-white rounded border border-black focus:outline-none focus:border-green-dark`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetLink;
