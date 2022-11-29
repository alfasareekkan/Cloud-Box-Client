import React from 'react'
import Navbar from '../components/Navbar'
import Login from "../components/Login";
import cloudLogin from "../assets/CloudLogin.jpg";

function SignUpPage() {
  return (
    <div className=''>
    <Navbar data={{ auth: 'sign in',dir:'/login'}} />
    <div className='flex w-full flex-col md:flex-row items-center'>
      <div className='w-1/2 md:w-full '>

      <img src={cloudLogin} alt="" />
      </div>
      <div className='w-1/2 md:w-full'>

          <Login data={{status:'Sign Up',state:true,auth: 'Sign up'}} />
      </div>

    </div>
       
  </div>
  )
}

export default SignUpPage