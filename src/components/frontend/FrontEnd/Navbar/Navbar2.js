import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
function Navbar2() {
  return (
    <div className="relative container mx-auto">
      <Popover className=" bg-white">
        <div className="mx-auto px-4 sm:px-0">
          <div className="flex justify-between items-center   py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="##">
                <span className="sr-only">Workflow</span>
                <Link to="/">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="./images/logo.png"
                    alt=""
                  />
                </Link>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <a
                    href="##"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    <Link to="/corporate-membership">Corpotate Membership</Link>
                  </a>
                )}
              </Popover>

              <a
                href="##"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <Link to="/advertising-solutions">Advertising Solutions</Link>
              </a>
              <a
                href="##"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <Link to="/ace-awards">ACE Awards</Link>
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"></div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to="/my-profile">Sign in</Link>
              </button>
              <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <Link to="/admin/dashboard">Sign up</Link>
              </button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="relative -top-20 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="./images/logo.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-6">
                    <Link
                      to="/"
                      className="text-xl font-medium text-gray-500 hover:text-gray-900 flex justify-between"
                    >
                      <h1>RivRat</h1>
                      <i class="fa-solid fa-arrow-right text-lg"></i>
                    </Link>
                    <Link
                      to="/corporate-membership"
                      className="text-xl font-medium text-gray-500 hover:text-gray-900 flex justify-between"
                    >
                      <h1>Corporate Membership</h1>
                      <i class="fa-solid fa-arrow-right text-lg"></i>
                    </Link>
                    <Link
                      to="/advertising-solutions"
                      className="text-xl font-medium text-gray-500 hover:text-gray-900 flex justify-between"
                    >
                      <h1>Advertising Solutions</h1>
                      <i class="fa-solid fa-arrow-right text-lg"></i>
                    </Link>
                    <Link
                      to="/ace-awards"
                      className="text-xl font-medium text-gray-500 hover:text-gray-900 flex justify-between"
                    >
                      <h1>Ace Awards</h1>
                      <i class="fa-solid fa-arrow-right text-lg"></i>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="##"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Link to="/admin/dashboard">Sign up</Link>
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a
                      href="##"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      <Link to="/my-profile">Sign in</Link>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Navbar2;
