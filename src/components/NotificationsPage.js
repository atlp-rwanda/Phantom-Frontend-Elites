import React, { useState, useEffect} from 'react';
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginAuthAction } from "../redux/actions/AuthAction"


/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com'

const NotificationsPage = (props) => {
    const { user } = props;
    const isUserLoggedIn= user.authreducer.isLoggedIn
    console.log(isUserLoggedIn, "------")
    const token = localStorage.getItem("token")
    console.log("Token seen in notifications",token)
    
    const { login } = props;

    const [ loginState, setLoginState ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if(!isUserLoggedIn){
            navigate("/login")
        }
    },[])

    
    return (
       <>
          <div className="mt-40 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
          </div>
          <div>
          <div className="text-xl font-medium text-black">Notifications</div>
          <p className="text-slate-500">Welcome to noifications page!!</p>
          </div>
          </div>
       </>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage );