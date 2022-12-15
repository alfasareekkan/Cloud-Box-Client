import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authSlice';

// eslint-disable-next-line react/prop-types
function RequireAuth({ children }) {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  // eslint-disable-next-line react/jsx-filename-extension
  return (
    token ? children : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
