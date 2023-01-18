/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import v1443 from '../assets/v1443.png';

// eslint-disable-next-line react/prop-types
export default function Example({ data }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-comment-textnodes
    <div className="fixed w-screen shadow-lg">

      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          // eslint-disable-next-line react/react-in-jsx-scope
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={v1443}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={v1443}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block" style={{ marginLeft: 'auto' }}>
                    <div className="flex ">
                      <Link className="bg-white-800 p-2 text-back-400 font-medium" to={data.dir}>{data.auth}</Link>
                      <Link to={'/dashboard/v1/myDrive' } className="ml-3 bg-[#8F92F6] font-medium hover:bg-black-700 text-white  py-2 px-4 rounded" >GoTo Box</Link>
                      {/* </div>              */}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link className="bg-white-800 p-1 text-back-400 font-bold" to={data.dir}>Sign in</Link>
                <Link to={'/dashboard/v1/myDrive'} className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded" >GoTo Box</Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

    </div>
  );
}
