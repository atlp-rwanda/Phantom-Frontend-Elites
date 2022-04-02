import { FETCH_PROFILE, UPDATE_PROFILE } from "./actionTypes";


export const updateProfileAction = {
    type: UPDATE_PROFILE,
  };

export const updateProfile = (id , profileData) => (dispatch) => {
    fetch(`https://phantom-backend-elites.herokuapp.com/api/v1/users/profiles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.data) {
        dispatch({
          type: UPDATE_PROFILE,
          payload: id,
          message: data.message,
          profile: data.data,
        });
      } else {
          console.log(data.error)
      }
    });
  };

export const fetchProfile = (id) =>(dispatch) => {
    fetch(`https://phantom-backend-elites.herokuapp.com/api/v1/users/${id}`)
    .then((res) => res.json())
    .then((data) =>
        dispatch({
            type: FETCH_PROFILE,
            payload: data.data,
        })    
    );
};