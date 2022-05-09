import axios from "axios";
import { returnErrors } from "./errorsAction";
import { toast } from "react-toastify"

export const LOADING_TOGGLE_ACTION = '[loading action] toggle loading'

const AuthActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  AUTH_ERRORS :"AUTH_ERRORS",
  LOADING_ACTION : "LOADING_ACTION"
};

const LoginAuthAction = (loginState, navigate ) => {
  return async (dispatch) => {
    try {
    dispatch({ type: AuthActionType.LOADING_ACTION, payload: true })
      const res = await axios.
      post("/auth/login", loginState);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      dispatch({ type: AuthActionType.LOADING_ACTION, payload: false })
      toast.success("Login successful!",{
        position:"top-center"
      })
      const user = res.data.user;
      if(user.id===1){
        navigate('/dashboard')
      }
      else{
        navigate('/');
      }      
    } catch (error) {
          dispatch(returnErrors(error.response.data, error.response.status))
          dispatch({
            type: AuthActionType.AUTH_ERRORS, payload: error.response.data          
      })
      const ms = error.response.data.message
      dispatch({ type: AuthActionType.LOADING_ACTION, payload: false })
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