import React from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Login() {
  let [loginOpen, setLoginOpen] = useState(true);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  function closeloginModal() {
    setLoginOpen(false);
  }

  function openLoginModal() {
    setLoginOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openLoginModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

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
                      {/* <img src={} alt="" /> */}
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
    </>
  );
}

export default Login;
