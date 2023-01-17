/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import ClipLoader from 'react-spinners/ClipLoader';
import toast, { Toaster } from 'react-hot-toast';

import { LockClosedIcon } from '@heroicons/react/20/solid';
import { setCredentials } from '../features/auth/authSlice';
import { useLoginMutation, useGoogleSignUPMutation } from '../features/auth/authApiSlice';
import Navbar from '../components/Navbar';
import PreLoader from '../components/PreLoader/PreLoader';
// eslint-disable-next-line import/no-unresolved
import cloudLogin from '../assets/CloudLogin.jpg';
import LogoText from '../assets/logoText.png';

function LoginPage() {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const [googleSignUP, { isLoading: isGoogleSignUpLoading }] = useGoogleSignUPMutation();

  const dispatch = useDispatch();
  const cookies = new Cookies();
  async function handleCallbackResponse(res) {
    try {
      const googleRes = await googleSignUP(res.credential).unwrap();
      console.log(googleRes);
      if (googleRes) {
        localStorage.setItem('refreshToken', googleRes.refreshToken);
        localStorage.setItem('accessToken', googleRes.accessToken);
        dispatch(setCredentials({ user: googleRes.user, accessToken: googleRes.accessToken }));
      navigate('/dashboard/v1/myDrive');
        
      }
    } catch (error) {
      // toast.error("server error");
    }
  }
  // eslint-disable-next-line no-unused-vars

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({
        user: userData.user, accessToken: userData.accessToken,
      }));
      localStorage.setItem('accessToken', userData.accessToken);
      localStorage.setItem('refreshToken', userData.refreshToken);
      setEmail('');
      setPassword('')
      navigate('/dashboard/v1/myDrive');
    } catch (errors) {
      if (errors.status === 400) {
        toast.error(`${errors.data.errors.email} ${errors.data.errors.password}`);
      }
    }
  };

  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const content = isGoogleSignUpLoading ? (
    // <h1>Loading.....</h1>
    <PreLoader />
  ) : (
    <div className="">
      <Navbar data={{ auth: 'sign up', dir: '/signup' }} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="flex w-full flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 hidden md:block ">
          <img src={cloudLogin} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          {/* <Login data={{status:'Sign in',state:false,auth: 'Sign in'}}/> */}
          <div className="flex min-h-full w-full   justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div className="mt-5">
                <img
                  className="mx-auto h-20 w-auto"
                  src={LogoText}
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  login to your account
                </h2>
                {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}

            </p> */}
              </div>
              <form
                className="mt-8 space-y-6"
                action="#"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className=" -space-y-px rounded-md shadow-sm">
                  <div className="w-full">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      ref={userRef}
                      value={email}
                      onChange={handleUserInput}
                      required
                      className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={handlePwdInput}
                      value={password}
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                    <p>{ errMsg}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link to={"/forgot"} className="font-medium text-[#8F92F6] hover:text-[#8F92F6]">
                      Forgot your password?
                    </Link>
                  </div>

                  {/* <div className="text-sm">
                <a href="#" className="font-medium text-[#8F92F6] hover:text-[#8F92F6]">
                  Forgot your password?
                </a>
              </div> */}
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
                          {/* {data.auth} */}
                          Sign in
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

export default LoginPage;
