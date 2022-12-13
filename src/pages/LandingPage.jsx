/* eslint-disable linebreak-style */
import React from 'react';
import HomePage from '../components/HomePage';
import Navebar from '../components/Navbar';

function LandingPage() {
  return (
    <div>
      <Navebar data={{ auth: 'sign in', dir: '/login' }} />
      <HomePage />
    </div>
  );
}

export default LandingPage;
