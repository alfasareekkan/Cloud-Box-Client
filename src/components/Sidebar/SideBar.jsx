/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCloud } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { setSidebar } from '../../features/Global/sidebarSlice';
import logText from '../../assets/logoText.png';
import CreateButton from './SidebarElements/CreateButton';
import DashboardILinks from './SidebarElements/DashboardILinks';
import StorageSize from './SidebarElements/StorageSize';
import BuyNow from './SidebarElements/BuyNow';
import CreateMenu from '../Menu/CreateMenu';

function SideBar() {
  const activeMenu = useSelector((state) => state.sideBar.menu);
  const createMenu = useSelector((state) => state.createMenu.createMenu);

  const dispatch = useDispatch();

  return (
    <div className="ml-3 h-screen md:overflow-auto overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
      <>
        <div className="flex justify-between items-center">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            onClick={() => { }}
            className="items-center ml-3 mt-4 flex text-xl font-extrabold
                  tracking-tight dark:text-white text-slate-900"
          >
            <img src={logText} width="50px" height="50px" alt="" />
            {' '}
            <span>
              <span className="font-medium">Cloud</span>
              <span>BOX</span>
            </span>
          </Link>
          <TooltipComponent
            content="Menu"
            position="BottomCenter"
          >
            <button type="button" onClick={() => { dispatch(setSidebar(!activeMenu)); }} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />

            </button>
            {createMenu && <CreateMenu />}

          </TooltipComponent>

        </div>
        <div className="mt-8">
          <CreateButton />
        </div>
        <div className="mt-10">
          <DashboardILinks />
        </div>
        <hr className="mt-10 mr-5"></hr>
        <div className="mt-5 flex text-black text-3xl font-semibold justify-start dark:text-white items-center">
          <p className="ml-5">
            <BsCloud />
          </p>
          <p className="ml-3">Storage</p>

        </div>
        <div className="mt-5 m-3">
          <StorageSize />
        </div>
        <div className="mt-5  flex justify-center ">
          <BuyNow />
        </div>

      </>
      )}
    </div>
  );
}

export default SideBar;
