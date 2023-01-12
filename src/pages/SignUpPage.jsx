/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';

import { LockClosedIcon } from '@heroicons/react/20/solid';
import { setCredentials } from '../features/auth/authSlice';
import {
  useSignupMutation,
  useGoogleSignUPMutation,
} from '../features/auth/authApiSlice';
import Navbar from '../components/Navbar';
import cloudLogin from '../assets/cloudLogin.jpg';
import LogoText from '../assets/logoText.png';
import PreLoader from '../components/PreLoader/PreLoader';

function SignUpPage() {
  const userRef = useRef();
  // const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');

  // const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [signup, { isLoading }] = useSignupMutation();
  const [googleSignUP, { isLoading: isGoogleSignUpLoading }] = useGoogleSignUPMutation();
  const dispatch = useDispatch();
  async function handleCallbackResponse(res) {
    try {
      const googleRes = await googleSignUP(res.credential).unwrap();
      if (googleRes) {
        localStorage.setItem('accessToken', googleRes.accessToken);
        dispatch(setCredentials({ user: googleRes.user, accessToken: googleRes.accessToken }));
        navigate('/dashboard/v1/myDrive');
      }
    } catch (error) {
      toast.error('server error');
    }
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '24354248382-7hun00kkq9vbrbp0i2okgsv67ah20fp1.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signUpGoogle'), {
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
    });
  }, []);
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      const userData = await signup({
        email,
        password,
        firstName,
        lastName,
      }).unwrap();
      dispatch(setCredentials({ user: userData.data, accessToken: userData.accessToken }));
      localStorage.setItem('accessToken', userData.accessToken);

      navigate('/dashboard');
    } catch (error) {
      toast.error(error.data.errors.email);
    }
  };
  const content = isGoogleSignUpLoading ? <PreLoader /> : (
    <div className="">
      <Navbar data={{ auth: 'sign in', dir: '/login' }} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="flex w-full flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 hidden md:block">
          <img src={cloudLogin} alt="" />
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex min-h-full w-full   justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div className="mt-5">
                <img
                  className="mx-auto h-20 w-auto"
                  src={LogoText}
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Create account
                </h2>
              </div>
              <form
                className="mt-8 space-y-6 w-full"
                action="#"
                method="POST"
                onSubmit={handleSubmitSignup}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px w-full rounded-md shadow-sm">
                  <div className="w-full">
                    <div className="w-full">
                      <label htmlFor="first-name" className="sr-only">
                       First Name
                      </label>
                      <input
                       id="fname"
                       name="fname"
                       type="text"
                        // autoComplete="email"
                       value={firstName}
                       ref={userRef}
                       onChange={(e) => setFName(e.target.value)}
                       required
                       className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                       placeholder="First Name"
                     />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="sr-only">
                       Last Name
                      </label>
                      <input
                       id="lname"
                       name="lname"
                       type="text"
                       value={lastName}
                       onChange={(e) => setLName(e.target.value)}
                        // autoComplete="email"
                        // eslint-disable-next-line react/jsx-props-no-multi-spaces
                       required
                       className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                       placeholder="Last Name"
                     />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  {
                     isLoading ? (
                       <button
                         disabled

                         className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#8F92F6] py-2 px-4 text-sm font-medium text-white hover:bg-[#8F92F6] focus:outline-none focus:ring-2 focus:ring-[#8F92F6] focus:ring-offset-2"
                       >
                         <ClipLoader color="#fff" size={22} />

                       </button>
                     ) : (
                       <button
                         type="submit"
                         className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#8F92F6] py-2 px-4 text-sm font-medium text-white hover:bg-[#8F92F6] focus:outline-none focus:ring-2 focus:ring-[#8F92F6] focus:ring-offset-2"
                       >
                         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                           <LockClosedIcon
                             className="h-5 w-5  group-hover:text-indigo-400"
                             aria-hidden="true"
                           />
                         </span>

                         Sign Up
                       </button>
                     )
                  }

                </div>
                <div className="w-full">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold">or</p>
                    <div id="signUpGoogle" className="mt-5" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
  return content;
}

export default SignUpPage;
