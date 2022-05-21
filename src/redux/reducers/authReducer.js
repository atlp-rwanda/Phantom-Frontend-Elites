import axios from "axios";
import { AuthActionType, LOADING_TOGGLE_ACTION } from "../actions/AuthAction";
import { AUTH_ERRORS } from "../actions/actionTypes";

const authState = {
    isLoggedIn: false,
    user: {
        message:"",
        user:"",
        token: "",
    },
    showLoading: false
};

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
      const authobj = JSON.parse(auth);
      const { token } = authobj.user;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return authobj;
    } catch (error) {
      return authState;
    }
  };
  const newAuth = getAuthState();
  const authreducer = (state = newAuth, action) => {
    switch (action.type) {
 
      case AuthActionType.LOGIN_SUCCESS:
        const loginAuthState = {
          isLoggedIn: true,
          user: action.payload,
        };
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${action.payload.token}`;
        localStorage.setItem("token", JSON.stringify(loginAuthState));
        return loginAuthState;

      case AUTH_ERRORS:
        localStorage.removeItem("token");
        
        return{
          ...state,
          message: "Could not log in",
          user: null,
          token: false,
        };  
      case AuthActionType.LOADING_ACTION:
        return{
          ...state,
          showLoading: action.payload
        }  
  
      default:
        return state;
    }
  };
  
  export default authreducer;
