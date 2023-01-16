import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import warning from '../assets/warning.svg';


function ForgotPassword() {
  return (
    <div className="w-full h-screen p-3 sm:p-5 md:p-7 bg-[rgb(246, 246, 246)]">
      <div className="relative w-full h-28 md:h-48 bg-[#9fa2f6] sm:h-36 rounded-t-lg">
        <div className="absolute w-96 h-96 bg-white shadow-lg left-1/2  top-full -translate-x-[50%] -translate-y-[25%] rounded-lg">
          <div className="flex flex-col justify-center items-center gap-5   ">
            <img src={warning} alt="" className="h-20 w-20 " />
            <h1 className="text-2xl font-medium">Forgot Password</h1>
            <p className="-mt-4 text-sm text-gray-500">Enter your email and we'll send you a otp</p>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            
            <button>Submit</button>
            <Link to="/login">Back to login</Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;
