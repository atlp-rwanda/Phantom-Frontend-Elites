import axios from "axios";
import { returnErrors } from "./errorsAction";
import { toast } from "react-toastify"



const AuthActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  AUTH_ERRORS :"AUTH_ERRORS"
};

const LoginAuthAction = (loginState, navigate ) => {
  return async (dispatch) => {
    try {
      const res = await axios.
      post("/auth/login", loginState);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      toast.success("Login successful!",{
        position:"top-center"
      })
      const user = res.data.user;
      if(user.id===2){
        navigate('/operators')
      }
      if(user.id===3){
        navigate('/drivers');
      }      
    } catch (error) {
          dispatch(returnErrors(error.response.data, error.response.status))
          dispatch({
            type: AuthActionType.AUTH_ERRORS, payload: error.response.data          
      })
      const ms = error.response.data.message
      toast.error(ms,{
        position:"top-center",
        autoClose:false
      })
    }
  };
};


export {
  AuthActionType,
  LoginAuthAction,
};