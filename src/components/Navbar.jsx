import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import v1_443 from '../assets/v1_443.png'
import {Link} from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    return (
      <div className='fixed w-screen shadow-lg'>
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
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
                     src={v1_443}
                    alt="Your Company"
                  />
                  <img
                                      className="hidden h-8 w-auto lg:block"
            src={v1_443}
                                      
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block" style={{marginLeft:'auto'}}>
                  <div className="flex ">
                                            <Link className="bg-white-800 p-2 text-back-400 font-medium" to={props.data.dir}>{ props.data.auth}</Link>
                <button class="ml-3 bg-[#8F92F6] font-medium hover:bg-black-700 text-white  py-2 px-4 rounded">GoTo Box</button>
              {/* </div>              */}
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link className="bg-white-800 p-1 text-back-400 font-bold	">Sign in</Link>
                <button class="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">GoTo Box</button>
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3" >
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
                <Link className="bg-white-800 p-1 text-back-400 font-bold	" to={props.data.dir}>Sign in</Link>
                <button class="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">GoTo Box</button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure></div>
  )
}
