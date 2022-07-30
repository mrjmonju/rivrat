import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Filter() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="bg-slate-900 p-10 rounded-3xl">
      <div className="relative overflow-hidden">
        <input
          type="text"
          className="bg-slate-600 overflow-hidden w-full py-4 px-6 mb-6 outline-none rounded-full"
          placeholder="Search within Complaints"
        />
        <i class="fa-solid fa-magnifying-glass absolute text-white top-1/4 right-5"></i>
      </div>
      <div>
        <h1 className="text-white text-3xl mb-6">
          <i class="fa-solid fa-filter"></i> filter
        </h1>
        <div>
          <label class="filter-container">
            One
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="filter-container">
            Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="filter-container">
            Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-4 lg:gap-x-2">
        <div className="col-span-5 lg:col-span-7 xl:col-span-5">
          <h1 className="text-base sm:text-2xl text-white font-bold">
            <i class="fa-solid fa-arrow-down-short-wide"></i> Sort By
          </h1>
        </div>
        <div className="col-span-7 lg:col-span-5 xl:col-span-7 ">
          <Menu as="div" className="relative inline-block text-left w-full">
            <div className="w-full">
              <Menu.Button className="flex justify-between w-full  shadow-sm px-5  py-3 rounded-full bg-slate-600 text-sm font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-50 focus:outline-none ">
                Options
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="##"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}>
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="##"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}>
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="##"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}>
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Filter;
