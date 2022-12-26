import React from 'react';
import { useLocation, Navigate ,Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authSlice';

// eslint-disable-next-line react/prop-types
function RequireAuth({ children }) {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();

  // eslint-disable-next-line react/jsx-filename-extension
  return (
    token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
