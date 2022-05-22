import React, { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router"
import * as moment from "moment"
import DashboardSider from "../components/AdminDashboard/ChildComponents/DashboardSidebar";
import DashboardNav from "../components/AdminDashboard/ChildComponents/DashboardNav"
import { fetchProfile } from "../redux/actions/profileAction";
import { useSelector, useDispatch } from "react-redux";
import { showProfileModalAC } from "../redux/actions/showModal"
import UpdateProfileModal from "../components/ProfileComponents/UpdateProfileModal"
import ProfileSkeleton from "../skeleton/ProfileSkeleton";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import NumbersIcon from '@mui/icons-material/Numbers';
import HomeIcon from '@mui/icons-material/Home';

const UpdateProfile = () => {
  const profile = useSelector((state)=> state.profileReducer.profile)

  const {isLoading} = useSelector((state) => state.profileReducer)

  const storedInfo = localStorage.getItem("token");
  const userInfo = JSON.parse(storedInfo)?.user.user;

  const isAuthenticated = localStorage.getItem("token");

  let id
  userInfo? {id} = userInfo : id = null;

  const date = moment(profile.dateofbirth).format('DD MMM, YYYY');


  const { isProfileModalOpen } = useSelector((state)=> state.showModalReducer)

  const toggleProfileModal = () => {
    dispatch(showProfileModalAC(!isProfileModalOpen));
  }
 
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const modalRef = useRef();

  /** Function to close the dropdown when
  a user clicks outside**/
  const handleOutsideClick = useCallback(
    (e) => {
      if (e.target.length !== 0 && open) {
        setOpen(!open);
      }
    },
    [open]
  );


  /** callback func for closing the modal
   * when a user presses escape keyboard key **/
   const escKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        setOpen(!open);
      }
    },
    [open]
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [])


  useEffect(() => {
    document.addEventListener("keydown", escKeyPress);
    return () => document.removeEventListener("keydown", escKeyPress);
  }, [escKeyPress]);

  if(isAuthenticated){
  return (
    <>
     <div className="flex" onClick={handleOutsideClick} ref={modalRef}>
        <div className="flex-2">
          <div>
              <DashboardSider />
          </div>
        </div>
        <div className="flex-1">
        <div>
          <DashboardNav
            open={open}
            setOpen={setOpen}
            handleOutsideClick={handleOutsideClick}
            modalRef={modalRef}
            navbarTitle="Manage Profile"
          />
          </div>
          
          {isLoading ? (
            <ProfileSkeleton />
        ) : (

          <div className="mt-[15vh] w-[70%] m-auto">
            <div >
                <div href="#"className="flex lg:space-x-28 space-x-0 space-y-6 lg:flex-row flex-col  bg-white rounded-lg border shadow-md w-auto h-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="lg:py-8 pt-8 py-0 px-8 flex lg:justify-start justify-center object-cover w-[450px] rounded" src={profile.profilePic} alt=""/>
                <div className="lg:pt-8 pt-0 flex-col lg:justify-start justify-center">
                  <div className="flex flex-col justify-between p-4 leading-normal">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-mono">{`${profile.firstName} ${profile.lastName}`}</h4>
                  <p className="mb-2 text-gray-400 dark:text-gray-400">You can change or fill in the missing <br /> personal information, like date of birth,<br/> address, phone,license and national id </p>                  
                  <p className="mb-2  text-gray-500 dark:text-gray-500"><span className="pr-4"><DateRangeIcon style={{ fill: '#2E64E3' }}/></span> {date}</p>     
                  <p className="mb-2  text-gray-500 dark:text-gray-500"><span className="pr-4"><BoyIcon style={{ fill: '#2E64E3' }}/><GirlIcon style={{ fill: '#2E64E3' }}/></span> {profile.gender}</p>
                  <p className="mb-2  text-gray-500 dark:text-gray-500"><span className="pr-4"><MailIcon style={{ fill: '#2E64E3' }}/></span>{profile.email}</p>
                  <p className="mb-2  text-gray-500 dark:text-gray-500"><span className="pr-4"><PhoneIcon style={{ fill: '#2E64E3' }}/></span>{profile.phoneNo}</p>
                  <p className="mb-2  text-gray-500 dark:text-gray-500"><span className="pr-4">< HomeIcon style={{ fill: '#2E64E3' }}/></span>{profile.address}</p>
                  <p className="mb-2  text-gray-500 dark:text-gray-500"><span className="pr-4"><NumbersIcon style={{ fill: '#2E64E3' }}/>ID</span> {profile.nationalIdNo}</p>
                  <p className="mb-2  text-gray-500 dark:text-gray-500"><span className="pr-4"><NumbersIcon style={{ fill: '#2E64E3' }}/>License</span>{profile.drivingLicenseNo}</p>
                  </div>
                  <button 
                    className="mb-8 ml-6 bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      toggleProfileModal();
                    }}
                    >
                     Update
                  </button>
              </div>        
              </div>
              </div> 
           </div>  
           )}  
        </div>
     </div> 
     {isProfileModalOpen && <UpdateProfileModal id={id}/>}
    </>
  );
  }
  else{
    return null;
  }
  }



export default UpdateProfile;
