import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

import login from "./login.png";

function Navbar() {
  let [loginOpen, setLoginOpen] = useState(false);
  let [regOpen, setRegOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  function closeloginModal() {
    setLoginOpen(false);
  }
  function openLoginModal() {
    setLoginOpen(true);
  }

  function closeRegModal() {
    setRegOpen(false);
  }
  function openRegModal() {
    setRegOpen(true);
  }
  return (
    <div className="relative container mx-auto">
      <Popover className=" bg-white">
        <div className="mx-auto px-4 sm:px-0">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
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
                  <button className="text-base font-medium text-gray-500 hover:text-gray-900">
                    <Link to="/complaints">Complaints</Link>
                  </button>
                )}
              </Popover>

              <button className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to="/compare-brands">Compare Brands</Link>
              </button>
              <button className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to="/trend-100">Trend 100</Link>
              </button>

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
              <button
                onClick={openLoginModal}
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </button>
              <button
                onClick={openRegModal}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
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
                      to="/complaints"
                      className="text-xl font-medium text-gray-500 hover:text-gray-900 flex justify-between"
                    >
                      <h1>Complaints</h1>
                      <i class="fa-solid fa-arrow-right text-lg"></i>
                    </Link>
                    <Link
                      to="/compare-brands"
                      className="text-xl font-medium text-gray-500 hover:text-gray-900 flex justify-between"
                    >
                      <h1>Compare Brands</h1>
                      <i class="fa-solid fa-arrow-right text-lg"></i>
                    </Link>
                    <Link
                      to="/trend-100"
                      className="text-xl font-medium text-gray-500 hover:text-gray-900 flex justify-between"
                    >
                      <h1>Trend 100</h1>
                      <i class="fa-solid fa-arrow-right text-lg"></i>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <p
                    onClick={openRegModal}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </p>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <p
                      onClick={openLoginModal}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* login Modul */}
      <Transition appear show={loginOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeloginModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-full max-h-full transform overflow-hidden rounded-3xl bg-stone-100 p-6 text-left align-middle shadow-xl transition-all">
                  <div class="grid grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2 hidden md:block">
                      <img src={login} alt="" />
                    </div>
                    <div className="md:col-span-3 col-span-5 px-2 md:px-16">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="./images/logo.png"
                        alt=""
                      />
                      <div class="sm:flex justify-between my-5">
                        <div className="">
                          <h2 className="text-3xl font-semibold">Login</h2>
                        </div>
                        <div>
                          <p className="cursor-pointer">
                            Don't have an account? Sign Up
                          </p>
                        </div>
                      </div>
                      <div class="sm:flex justify-between my-5">
                        <div className="">
                          <button className="bg-blue-800 text-white rounded-full px-5 sm:py-3 py-2 my-1 sm:my-3 cursor-pointer">
                            login with Facebook
                          </button>
                        </div>
                        <div>
                          <button className="bg-red-500 text-white rounded-full px-5 sm:py-3 py-2 my-1 sm:my-3 cursor-pointer">
                            Sign in with google
                          </button>
                        </div>
                      </div>
                      <form
                        className="w-full grid grid-cols-1 gap-y-3"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <input
                          className="py-3 px-5 my-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          placeholder="Type your email..."
                          {...register("email")}
                        />
                        <input
                          className="py-3 px-5 my-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          placeholder="Type your password..."
                          {...register("password")}
                        />
                        <input
                          className="bg-violet-600 text-white rounded-full px-5 py-3 my-3 cursor-pointer"
                          type="submit"
                          value="Log In"
                        />
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* login Modul */}
      {/* reg Modul */}
      <Transition appear show={regOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeRegModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-full max-h-full transform overflow-hidden rounded-3xl bg-stone-100 p-6 text-left align-middle shadow-xl transition-all">
                  <div class="grid grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2 hidden md:block">
                      <img src={login} alt="" />
                    </div>
                    <div className="md:col-span-3 col-span-5 px-2 md:px-16">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="./images/logo.png"
                        alt=""
                      />
                      <div class="sm:flex justify-between my-5">
                        <div className="">
                          <h2 className="text-3xl font-semibold">Sign Up</h2>
                        </div>
                        <div>
                          <p className="cursor-pointer">
                            Don't have an account? Sign Up
                          </p>
                        </div>
                      </div>
                      <div class="sm:flex justify-between my-5">
                        <div className="">
                          <button className="bg-blue-800 text-white rounded-full px-5 sm:py-3 py-2 my-1 sm:my-3 cursor-pointer">
                            login with Facebook
                          </button>
                        </div>
                        <div>
                          <button className="bg-red-500 text-white rounded-full px-5 sm:py-3 py-2 my-1 sm:my-3 cursor-pointer">
                            Sign in with google
                          </button>
                        </div>
                      </div>
                      <form
                        className="w-full grid grid-cols-1 gap-y-3"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <input
                          className="py-3 px-5 my-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          placeholder="Type your full name..."
                          {...register("name")}
                        />
                        <input
                          className="py-3 px-5 my-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          placeholder="Type your email..."
                          {...register("email")}
                        />
                        <input
                          className="py-3 px-5 my-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          placeholder="Type your password..."
                          {...register("password")}
                        />
                        <input
                          className="py-3 px-5 my-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          placeholder="Type your password again..."
                          {...register("repassword")}
                        />
                        <input
                          className="bg-violet-600 text-white rounded-full px-5 py-3 my-3 cursor-pointer"
                          type="submit"
                          value="Log In"
                        />
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* Reg Modul */}
    </div>
  );
}

export default Navbar;
