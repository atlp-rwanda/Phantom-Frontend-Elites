/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate,NavLink } from "react-router-dom";
import {
  loadingToggleAction,
  LoginAuthAction,
} from "../redux/actions/AuthAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/NavbarComponent/Navbar";
import Footer from "../components/Footer";
import Loader from "../skeleton/Loader";
import {useTranslation } from "react-i18next"

/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

const Login = (props) => {
  const {t} = useTranslation();
  const { login } = props;
  const showLoading = useSelector((state) => state.authreducer.showLoading);
  console.log(showLoading, "spiner =====");

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginState, setLoginState] = useState({});
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password }, navigate);
  }
  return (
    <div test-data="loginComponent">
      <Navbar />
      <div className="h-screen flex bg-gray-bg1 pt-14">
        <div className="w-full max-w-lg m-auto bg-white rounded-xl border border-primaryBorder py-10 px-16 drop-shadow-2xl">
          {showLoading && <Loader />}
          <h1 className="text-4xl font-medium text-primary mt-3 mb-8 text-center">
              {t("login.loginTitle")}
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">{t("login.emailField")}</label>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="email@example.com"
                required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">{t("login.passwordField")}</label>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder=".............."
                required="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center items-center mt-2">
              <button
                className={`w-full bg-black py-2 px-4 text-sm text-white rounded border border-black focus:outline-none focus:border-green-dark`}
                type="submit"
              >
               {t("login.loginButton")}
              </button>
            </div>

            <p className="mt-4 flex justify-center">{t("login.Or")}</p>

            <GoogleLogin
              className="mt-4 flex justify-center  border border-black w-[100%] pr-[10px]  vsm: text-xs w-42 h-10 ml-1 bsm:w-50"
              clientId={clientId}
              buttonText=   {t("login.loginGoogle")}
            />
            <p className="mt-4 ml-32 text-sm">
              <NavLink
                to="/reset-link"
                className="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              >
                  {t("login.forgotPassword")}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState, history) => {
      dispatch(LoginAuthAction(loginState, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
