/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Modal.css";

const OperatorRegistrationModel = ({ closeModel }) => {
  return (
    <div className="modelBackground">
      <div className="bg-grey-lighter flex flex-col">
        <div className="w-[450px] mx-auto mt-0 flex flex-col items-center justify-center  px-2">
          <div className="bg-white px-[40px] py-4 rounded shadow-md text-black w-full">
            <div className="flex-col">
              <div className="flex justify-end">
                <button onClick={() => closeModel(false)}>
                  <FontAwesomeIcon
                    className="text-4xl text-gray-400"
                    icon={faXmark}
                  />
                </button>
              </div>
              <div className="mb-4">
                <h1 className="text-center text-xl font-bold">
                  Register an Operator
                </h1>
              </div>
            </div>
            <label htmlFor="Full name">First Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="firstname"
              placeholder="new Operators first name"
            />
            <label htmlFor="Full name">Last Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="firstname"
              placeholder="new Operators last name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="email"
              placeholder="email@example.com"
            />
            <label htmlFor="Full name">Gender</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="gender"
              placeholder="Full Name"
            />
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="fullname"
              placeholder="Role of the ...."
            />
            <div className="text-center">
              <button
                type="submit"
                className="mx-auto py-[5px] px-14 rounded bg-primary text-white font-bold hover:bg-gray-700 focus:outline-none my-1"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorRegistrationModel;
