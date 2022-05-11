import React from "react";
const Signup = () => {
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="max-w-[700px] mx-auto mt-8 flex flex-col items-center justify-center  px-2">
          <div className="bg-white px-[40px] py-4 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl font-bold text-center">Sign up</h1>
            <label htmlFor="Full name">Full Name</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="email"
              placeholder="email@example.com"
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="password"
              placeholder="......................."
            />
            <label htmlFor="confirming password">Confirm Password</label>
            <input
              type="password"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="confirm_password"
              placeholder="......................."
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-primary text-white font-bold hover:bg-gray-700 focus:outline-none my-1"
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-gray-500 text-gray-700"
                href="/"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-gray-700 text-gray-700"
                href="/"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-gray-700 mt-6 text-center">
              Already have an account?
              <a
                className="no-underline border-b border-orange-600 text-blue-500"
                href="../login/"
              >
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
