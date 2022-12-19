/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { setSidebar } from '../../features/Global/sidebarSlice';
import { setNotification, setUserProfile } from '../../features/Global/iconSlice';
import avatar from '../../assets/avatar.jpg';
import { UserProfile, Notification } from '../index';
import './NavBar.css';
import { setCreateMenu } from '../../features/Global/menuSlice';

export function NavButton({
  title, customFun, color, icon, dotColor,
}) {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={customFun} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}

      </button>
    </TooltipComponent>
  );
}

function DashNavBar() {
  const activeMenu = useSelector((state) => state.sideBar.menu);
  const notification = useSelector((state) => state.icon.notification);
  const userProfile = useSelector((state) => state.icon.userProfile);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title="Menu"
        customFun={() => dispatch(setSidebar(!activeMenu, dispatch(setCreateMenu(false))))}
        color="#9fa2f6"
        icon={<AiOutlineMenu />}
      />
      <div className="flex  ">
        <NavButton
          title="Notification"
          customFun={() => dispatch(setNotification(!notification))}
          color="#9fa2f6"
          icon={<RiNotification3Line />}
          dotColor="#03C9D7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => dispatch(setUserProfile(!userProfile))}
          >
            <img src={avatar} className="rounded-full w-8 h-8" alt="" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              {' '}
              <span className="text-gray-400 font-bold ml-1 text-14 ">{ user}</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {notification && <Notification />}
        {userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default DashNavBar;
