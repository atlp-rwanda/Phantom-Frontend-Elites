import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateProfile } from "../../redux/actions/profileAction";
import { showProfileModalAC } from "../../redux/actions/showModal" 
import {toast} from "react-toastify"


const UpdateProfileModal = ({id}) => {
  
  const profile = useSelector((state)=> state.profileReducer.profile)

  const { isProfileModalOpen } = useSelector(
    (state) => state.showModalReducer
  );

  const handleCloseModal = () => {
    dispatch(showProfileModalAC(!isProfileModalOpen));
  };

  const dispatch = useDispatch();
  // const operator = operators[id-1]
  const [values, setValues] = useState({
    firstName: profile.firstName,
    lastName:  profile.lastName,
    address:  profile.address,
    phoneNo: profile.phoneNo,
    nationalIdNo: profile.nationalIdNo,
    drivingLicenseNo:profile.drivingLicenseNo,
    dateofbirth: profile.dateofbirth,
  });
 

  const [image, setImage] = useState("");
  const [profilePic, setProfilePic] = useState("");
  let pic = "";


  const uploadImage = async() => {
    const formData = new FormData();
    formData.append("file",  image);
    formData.append("upload_preset", "bfgsniut")

    await axios.post("https://api.cloudinary.com/v1_1/dsrhtsy41/image/upload", 
    formData
    ).then(
        (response)=>{
          pic = response.data.url;
          setProfilePic(pic);
          }
    )};


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
   e.preventDefault();
    let profile; 
    if(profilePic.length === 0){
        profile = { ...values };
        toast.error("Internet issues: Image not saved, try again");
    }else{
        toast.success("Image saved")
        profile = { ...profile, profilePic }
    }
    dispatch(updateProfile(id , profile));
    setValues({
      firstName: "",
      lastName: profile.firstName,
      address: profile.lastName,
      phoneNo: "",
      nationalID:"",
      license:"",
      dateofbirth: "",
    })
    dispatch(showProfileModalAC(!isProfileModalOpen));
  };

  return (
    <div
      className="updateModalBackground"
       >
      <div className="bg-grey-lighter flex flex-col">
        <div className="w-[450px] mx-auto mt-0 flex flex-col items-center justify-center  px-2">
          {/* Registration form */}
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-white px-[40px] py-4 rounded shadow-md text-black w-full"
          >
            <div className="flex-col">
              <div className="flex justify-end">
                <button onClick={handleCloseModal}>
                  <FontAwesomeIcon
                    className="text-2xl text-primary"
                    icon={faXmark}
                  />
                </button>
              </div>
              <div className="mb-6">
                <h1 className="text-center text-xl font-bold">Update {name}</h1>
              </div>
            </div>
            <label>Add date of birth</label>
            <input
              type="date"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="dateofbirth"
              placeholder="Date"
              value={values.dateofbirth}
              onChange={handleChange}
            />
            
            <label>Add address</label>
            <input
              type="text"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              name="address"
              placeholder="Enter new Address"
              value={values.address}
              onChange={handleChange}
            />

            <label>Add Phone</label>
            <input
              type="text"
              name="phoneNo"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="Enter new Phone"
              value={values.phoneNo}
              onChange={handleChange}
            />
            <label>Add NationalID</label>
            <input
              type="text"
              name="nationalIdNo"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="Enter new NationalID"
              value={values.nationalIdNo}
              onChange={handleChange}
            />
            <label>Add Driver license</label>
            <input
              type="text"
              name="drivingLicenseNo"
              className="block border border-gray-400 w-full p-2 rounded mb-4"
              placeholder="Enter new Driver's License"
              value={values.drivingLicenseNo}
              onChange={handleChange}
            />
             <label >Add a Profile Picture</label>
             <input 
             type="file" 
             name="profilePic" 
             onChange={(e) => {
                   setImage(e.target.files[0]) 
                   uploadImage()
             } } />
            <div className="mt-2 text-center">
              <button
                type="submit"
                className="mx-auto py-[5px] px-14 rounded bg-primary text-white font-bold hover:bg-gray-700 focus:outline-none my-1"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



export default UpdateProfileModal;