import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {

  DashNavBar,
  SideBar,
  FolderTree,
} from '../../components/index';
import './DashBoard.css';

function Dashboard() {
  const activeMenu = useSelector((state) => state.sideBar.menu);
  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl
                  hover:bg-light-gray text-white"
              style={{ background: '#9fa2f6', borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu ? (
          <div
            className="w-72 fixed sidebar
              dark:bg-secondary-dark-bg
              bg-white"
          >
            <SideBar />
          </div>
        ) : (
          <div
            className="w-0 dark:bg-secondary-dark-bg
                  "
          >
            <SideBar />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full ${
            activeMenu ? 'md:ml-72' : 'flex-2'
          }`}
        >
          <div className="sticky top-0  bg-main-bg dark:bg-main-dark-bg navbar w-full  shadow-md ">
            <DashNavBar />
            <div className="flex ">
              <FolderTree />
            </div>
          </div>
          <div className="bg-[#f6f8fa]">
            {/* <MyDrive /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
