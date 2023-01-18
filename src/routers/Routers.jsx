import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Dashboard from '../pages/DashBoard/Dashboard';
import RequireAuth from '../features/auth/RequireAuth';
import MyDrive from '../pages/MyDrive';
import SharedWithMe from '../pages/SharedWithMe';
import FilesPages from '../pages/FilesPage';
import UserProfilePage from '../pages/UserProfilePage';
import ForgotPassword from '../pages/ForgotPassword';
import OtpPage from '../pages/OtpPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import TrashPage from '../pages/TrashPage';
import FavouritePage from '../pages/FavouirtePage';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/otp" element={<OtpPage />} />  
      <Route path="/change-password" element={<ChangePasswordPage />} />  


      {/* protected route */}
      <Route path="/dashboard" element={<RequireAuth />}>
        <Route path="v1" element={<Dashboard />}>
          <Route path="myDrive" element={<MyDrive />} />
          <Route path=":id" element={<MyDrive />} />
          <Route path="shared-with-me" element={<SharedWithMe />} />
          <Route path="all-files" element={<FilesPages />} />
          <Route path="user-profile" element={<UserProfilePage />} />
          <Route path="trash" element={<TrashPage />} />
          <Route path="favorite" element={<FavouritePage />} />


        </Route>

      </Route>

    </Routes>
  );
}

export default Routers;
