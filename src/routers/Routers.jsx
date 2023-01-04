import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Dashboard from '../pages/DashBoard/Dashboard';
import RequireAuth from '../features/auth/RequireAuth';
import MyDrive from '../pages/MyDrive';
import SharedWithMe from '../pages/SharedWithMe';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* protected route */}
      <Route path="/dashboard" element={<RequireAuth />}>
        <Route path="v1" element={<Dashboard />}>
          <Route path="myDrive" element={<MyDrive />} />
          <Route path=":id" element={<MyDrive />} />
          <Route path="shared-with-me" element={<SharedWithMe />} />

        </Route>

      </Route>

    </Routes>
  );
}

export default Routers;
