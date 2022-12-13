import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Dashboard from '../pages/DashBoard/Dashboard';
import RequireAuth from '../features/auth/RequireAuth';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* protected route */}
      <Route
        path="/dashboard"
        element={(
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
)}
      />

    </Routes>
  );
}

export default Routers;
