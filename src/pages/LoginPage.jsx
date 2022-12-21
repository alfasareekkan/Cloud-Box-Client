/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { setCredentials } from '../features/auth/authSlice';
import { useLoginMutation } from '../features/auth/authApiSlice';
import Navbar from '../components/Navbar';
import PreLoader from '../components/PreLoader/PreLoader';
// eslint-disable-next-line import/no-unresolved
import cloudLogin from '../assets/CloudLogin.jpg';
import LogoText from '../assets/logoText.png';

function LoginPage() {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();


  const dispatch = useDispatch();
  const cookies = new Cookies();
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ user, pwd }).unwrap();
      console.log(userData);
      cookies.set('jwt', userData.newRefreshToken, {
        path: '/', httpOnly: true, secure: true, sameSite: 'none', maxAge: 24 * 60 * 60 * 1000,
      });

      dispatch(setCredentials({ ...userData, user }));
      setUser('');
      setPwd('');
      navigate('/dashboard/v1/myDrive');
    } catch (errors) {
      console.log(errors);
      // if (!errors?.response) {
      //   setErrMsg('incorrect password');
      // } else
      if (errors.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (errors.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    // <h1>Loading.....</h1>
    <PreLoader />
  ) : (
    <div className="">
      <Navbar data={{ auth: 'sign up', dir: '/signup' }} />
      <div className="flex w-full flex-col md:flex-row items-center">
        <div className="w-1/2 md:w-full ">
          <img src={cloudLogin} alt="" />
        </div>
        <div className="w-1/2 md:w-full">
          {/* <Login data={{status:'Sign in',state:false,auth: 'Sign in'}}/> */}
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
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
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
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
                      value={user}
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
                      value={pwd}
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
                    <a href="#" className="font-medium text-[#8F92F6] hover:text-[#8F92F6]">
                      Forgot your password?
                    </a>
                  </div>

                  {/* <div className="text-sm">
                <a href="#" className="font-medium text-[#8F92F6] hover:text-[#8F92F6]">
                  Forgot your password?
                </a>
              </div> */}
                </div>

                <div>
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
