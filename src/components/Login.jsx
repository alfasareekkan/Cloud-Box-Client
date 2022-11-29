import React, { Fragment, useEffect, useState } from 'react'
import LogoText from '../assets/logoText.png'
import { LockClosedIcon } from '@heroicons/react/20/solid'

function Login({ data }) {
  const [authState, setAuthState] = useState(false)
  useEffect(() => {
    setAuthState(data.state)
  },[data.state])
  return (
      <Fragment>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={LogoText}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {data.status} to your account
            </h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              
            </p> */}
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {authState &&
                <div>
                  <div>
                    <label htmlFor="first-name" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      // autoComplete="email"
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
                      // autoComplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Last Name"
                    />
                  </div>
                </div>}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
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
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
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
              {!authState &&<div className="text-sm">
                <a href="#" className="font-medium text-[#8F92F6] hover:text-[#8F92F6]">
                  Forgot your password?
                </a>
              </div>}

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
                  <LockClosedIcon className="h-5 w-5  group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                {data.auth}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Login