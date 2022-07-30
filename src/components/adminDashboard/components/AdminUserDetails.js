import React from "react";
import Toggle from "./subComponents/Toggle";

function AdminUserDetails() {
  return (
    <>
      <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-center py-7">
        <h2 className="w-12/12 md:w-3/12 text-2xl font-semibold">
          User Details
        </h2>
      </div>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="grid lg:grid-rows-6 col-span-1 gap-5">
          <div className="bg-white lg:row-span-1 p-4 rounded-xl">
            <img src="" alt="" />
            <h2 className="text-xl font-semibold mb-2">jos mbolomnyoi</h2>
            <p>Joined at 18 May, 2022</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h2 className="text-lg font-medium">User information</h2>
            <div className="flex justify-between border p-2">
              <h2>Username</h2>
              <p>jhon</p>
            </div>
            <div className="flex justify-between border p-2">
              <h2>Status</h2>
              <p className="border-2 px-5 bg-green-300 border-green-400 text-center rounded-full">
                Active
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-3">
              <button className="bg-purple-500 rounded text-white py-1">
                Login Logs
              </button>
              <button className="bg-sky-500 rounded text-white py-1">
                Send Email
              </button>
              <button className="bg-black rounded text-white py-1">
                Login as User
              </button>
              <button className="bg-orange-500 rounded text-white py-1">
                Email Log
              </button>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <h2>Information of Jos mbolomnyoi</h2>
              <hr className="bg-gray-400 my-4" />
              <form action="">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        First name
                      </span>
                      <input
                        type="text"
                        name="fname"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="first name"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Last name
                      </span>
                      <input
                        type="text"
                        name="lname"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="last name"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="example@gmail.com"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Mobail Number
                      </span>
                      <input
                        type="number"
                        name="number"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="0123456789"
                        required
                      />
                    </label>
                  </div>
                </div>
                <label class="block my-4">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Address
                  </span>
                  <input
                    type="text"
                    name="address"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        City
                      </span>
                      <input
                        type="text"
                        name="city"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        State
                      </span>
                      <input
                        type="text"
                        name="state"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Zip/Postal
                      </span>
                      <input
                        type="text"
                        name="zip"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div>
                    <label class="block">
                      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Country
                      </span>
                      <input
                        type="text"
                        name="country"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-1 px-3 py-2 sm:grid-cols-3">
                  <Toggle title="Status" />
                  <Toggle title="Email Verification" />
                  <Toggle title="SMS Verification" />
                </div>
                <button
                  className="bg-violet-600 w-full text-white py-2 px-8 hover:bg-violet-500 ease-in duration-300 rounded my-4"
                  type="submit"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUserDetails;
