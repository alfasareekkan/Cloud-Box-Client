import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ForgotLayout from '../components/ForgotLayout';
import { useSubmitChangeOtpMutation } from '../features/auth/authApiSlice';

function OtpPage() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
 const [submitChangeOtp]=useSubmitChangeOtpMutation()
  const handleChang = (e) => {
    setOtp(e.target.value);
  };
    const handleSubmit = async(e) => {
        try {
            await submitChangeOtp({ email: location.state.email, otp }).unwrap();
            navigate('/change-password', {
            state: {
                 email: location.state.email,
                otp
            },
          });
      } catch (error) {
        toast.error(error.data.message)
      }
   
  };
  return (
    <ForgotLayout handleChange={handleChang} handleSubmit={handleSubmit} heading="Forgot Password" label="OTP" paragraph="Enter your otp" value={otp} />
  );
}

export default OtpPage;
