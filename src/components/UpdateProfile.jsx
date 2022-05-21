import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAuthAction } from "../redux/actions/AuthAction";

/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

const UpdateProfile = (props) => {
  const { user } = props;
  const isUserLoggedIn = user.authreducer.isLoggedIn;
  console.log(isUserLoggedIn, "------");

  const { login } = props;

  const [loginState, setLoginState] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/profile");
      localStorage.clear();
    }
  }, []);

  return <>Profile page</>;
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
