import React, { useState } from 'react';
import Toaster, { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import warning from '../assets/warning.svg';
import ForgotLayout from '../components/ForgotLayout';
import { useForgotOtpMutation } from '../features/auth/authApiSlice';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [forgotOtp, { isLoading }] = useForgotOtpMutation();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      await forgotOtp({ email }).unwrap();
      navigate('/otp',{state:{email}});
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
  // <div className="w-full h-screen p-3 sm:p-5 md:p-7 bg-[rgb(246, 246, 246)]">
  //   <div className="relative w-full h-28 md:h-56 bg-[#9fa2f6] sm:h-36 rounded-lg">
  //     <div className="absolute w-96 h-96 bg-white shadow-lg left-1/2  top-1/2 -translate-x-[50%]  rounded-lg">
  //       <div className="flex flex-col justify-center items-center gap-5   ">
  //         <img src={warning} alt="" className="h-20 w-20 mt-4" />
  //         <h1 className="text-2xl font-medium">Forgot Password</h1>
  //         <p className="-mt-4 text-sm text-gray-500">Enter your email and we'll send you a otp</p>
  //         <TextField value={otp} id="outlined-basic" label="OTP" variant="outlined" onChange={(e) => setOtp(e.target.value)} />
  //         <button className="px-4 py-2 cursor-pointer  rounded-md border-2 border-[#9fa2f6] bg-[#9fa2f6] text-white transition-all" onClick={handleSubmit}>Submit</button>
  //         <Link to="/login"  className="text-gray-400 text-sm">Back to login</Link>
  //       </div>

  //     </div>

  //   </div>

    // </div>
    <ForgotLayout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      paragraph="Enter your email and we'll send you a otp"
      heading="Forgot Password"
      value={email}
      label="Email"
    />
  );
}

export default ForgotPassword;
