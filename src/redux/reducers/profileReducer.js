import {toast} from "react-toastify"
import { FETCH_PROFILE, UPDATE_PROFILE} from "../actions/actionTypes"

const initialState = {
   profile:[],
   message:"",
   isLoading:true
};

const profileReducer = (state =initialState, action ) => {
    switch(action.type){
        case FETCH_PROFILE:
            return{
                ...state,
                profile:action.payload,
                isLoading:false
            };     
        case UPDATE_PROFILE:
            return {
                ...state,
                profile:  action.profile,
                message : toast.success("Successfully Updated", {
                    position: "top-center",
                  }),
            };
        default:   
            return state;
    }
}

export default profileReducer;