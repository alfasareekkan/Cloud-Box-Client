import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsPersonX } from 'react-icons/bs';
import { userProfileData } from '../../data/DummyData';
import avatar from '../../assets/avatar.svg';
import { logOut } from '../../features/auth/authSlice';
import { setUserProfile } from '../../features/Global/iconSlice';

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const userProfile = useSelector((state) => state.icon.userProfile);
 

  function handleLogout() {
    dispatch(logOut());
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    navigate('/login');
  }
  function handleProfile() {
    dispatch(setUserProfile(!userProfile));
    navigate('/dashboard/v1/user-profile');
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
      </div>
      <div className="flex flex-col gap-5 items-center mt-6 border-color border-b-1 pb-6">
        {
          user.profile ? (
            <img
              className="rounded-full h-24 w-24"
              src={user.profile}
              alt="user-profile"
            />
          ) : (
            <img
              className="rounded-full h-24 w-24"
              src={avatar}
              alt="user-profile"
            />
          )
        }
        {/* <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        /> */}
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {user.email}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]" onClick={handleProfile}>
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {' '}
                {item.desc}
                {' '}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center ml-4 cursor-pointer  hover:bg-light-gray  dark:hover:bg-[#42464D]" onClick={handleLogout}>
        <button
          type="button"
          style={{ color: 'rgb(255, 244, 229)', backgroundColor: 'rgb(254, 201, 15)' }}
          className=" text-xl rounded-lg p-3 hover:bg-light-gray"
        >
          <BsPersonX />
        </button>

        <div className="pl-4">
          <p className="font-semibold dark:text-gray-200 ">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
