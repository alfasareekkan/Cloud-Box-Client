import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Login from "../components/Login";
import cloudLogin from "../assets/CloudLogin.jpg";

function LoginPage() {
  return (
      <div className=''>
      <Navbar data={{ auth: 'sign up',dir:'/signup'}} />
      <div className='flex w-full flex-col md:flex-row items-center'>
        <div className='w-1/2 md:w-full '>

        <img src={cloudLogin} alt="" />
        </div>
        <div className='w-1/2 md:w-full'>

        <Login data={{status:'Sign in',state:false,auth: 'Sign in'}}/>
        </div>

      </div>
         
    </div>
  )
}

export default LoginPage