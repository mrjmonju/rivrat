import React, { Fragment, useState } from "react";
import { Listbox, Dialog, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const icons = [
  {
    id: 1,
    name: "Choose",
  },
  {
    id: 2,
    name: "Educations",
  },
  {
    id: 3,
    name: "Cars",
  },
  {
    id: 4,
    name: "Mobile",
  },
  {
    id: 5,
    name: "Jewellry",
  },
  {
    id: 6,
    name: "Bank",
  },
  {
    id: 7,
    name: "Travel Agency",
  },
];

function AdminCategories() {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [icon, setIcon] = useState(icons[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-center py-7">
        <h2 className="text-2xl font-semibold">Manage Category</h2>
        <div className="">
          {/* Category Modal Button */}
          <button
            onClick={() => setIsCategoryModalOpen(true)}
            className="bg-blue-500 rounded py-1 px-3 text-white"
          >
            <AddOutlinedIcon />
            Add Categories
          </button>
          {/* Category Modal Body */}
          <Transition appear show={isCategoryModalOpen === true} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setIsCategoryModalOpen(false)}
            >
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        <div className="flex justify-between">
                          <h1 className="text-lg font-medium">
                            Add New category
                          </h1>
                          <CloseOutlinedIcon
                            className="hover:text-blue-500 cursor-pointer"
                            onClick={() => setIsCategoryModalOpen(false)}
                          />
                        </div>
                      </Dialog.Title>
                      <hr className="w-full shadow my-3 bg-slate-500" />
                      <div className="mt-2">
                        <label class="block">
                          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Name
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          />
                        </label>
                        {/* Chose Icon Dropdown */}
                        <Listbox value={icon} onChange={setIcon}>
                          {({ open }) => (
                            <>
                              <div className="mt-3 relative">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                  Icons
                                </span>
                                <Listbox.Button className="relative mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                  <span className="flex items-center">
                                    <span className="ml-3 block truncate">
                                      {icon.name}
                                    </span>
                                  </span>
                                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {icons.map((v) => (
                                      <Listbox.Option
                                        key={v.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "text-white bg-gray-400"
                                              : "text-gray-900",
                                            "cursor-default select-none relative py-2 pl-3 pr-9"
                                          )
                                        }
                                        value={v}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <div className="flex items-center">
                                              <span
                                                className={classNames(
                                                  selected
                                                    ? "font-semibold"
                                                    : "font-normal",
                                                  "ml-3 block truncate"
                                                )}
                                              >
                                                {v.name}
                                              </span>
                                            </div>

                                            {selected ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "text-white"
                                                    : "text-indigo-600",
                                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                                )}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      </div>

                      <div className="mt-5">
                        <button
                          type="submit"
                          className="bg-blue-500 w-full rounded py-1 px-3 text-white"
                        >
                          Submit
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {/* @category Modal Body */}
        </div>
      </div>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      {/* Manage Category Table */}
      <div className="w-full overflow-auto rounded-lg shadow">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Icon
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 test-sm text-gray-700">Education</td>
              <td className="p-3 test-sm text-gray-700">
                <SchoolOutlinedIcon />
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-green-300 border-green-400 text-center rounded-full">
                  Active
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-blue-500 rounded mx-1">
                    <TvOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* @Manage Category Table */}
    </>
  );
}

export default AdminCategories;
