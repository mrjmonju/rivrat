import React from "react";
// import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// Icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
function MyComplaints() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      {/* While No Complaints */}
      {/* <div className="mt-28">
        <div className="bg-gray-300 w-60 h-60 mx-auto flex items-center justify-center rounded-full">
          <h1 className="text-center  text-8xl text-white">
            <i class="fa-solid fa-pencil"></i>
          </h1>
        </div>
        <h1 className="text-center text-5xl mt-8 text-gray-800">
          No Complaints Yet
        </h1>
        <h1 className="text-center text-xl mt-8 mb-6 text-gray-300 font-semibold">
          After you create it, you can follow it here.
        </h1>
        <div className="md:mx-auto text-center bg-blue-600 text-white md:w-1/4 rounded-3xl mx-4  mb-10 py-2"><Link to="" className=""><i class="fa-solid fa-pencil underline text-sm mr-2"></i><span className="text-lg font-semibold">Write a complaint</span></Link></div>
      </div> */}

      {/* While Complaints Have */}
      <div className="px-5 sm:px-10 md:px-20 mt-10">
        <h1 className="mb-5 text-lg font-semibold text-gray-600">
          My complaints 1
        </h1>
        <hr />
        <div className="sm:flex justify-between mt-8">
          <div className="flex mb-5 sm:mb-0">
            <div>
              <img
                src="./images/dashboard/profile.png"
                className="w-12 rounded-full mr-3"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-blue-500">
                <i
                  class="fa-solid fa-reply text-blue-300"
                  style={{ transform: "rotate(180deg)" }}
                >
                  &nbsp;
                </i>{" "}
                Bosch &nbsp;<i class="fa-solid fa-circle-check"></i>
              </h1>
              <h1 className="text-gray-500">32 seconds ago sent</h1>
            </div>
          </div>
          <div>
            <div className="flex gap-x-4 items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <SettingsOutlinedIcon />
                    <ArrowDropDownOutlinedIcon />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#s"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#s"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#m"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full text-left px-4 py-2 text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <div className="flex items-center bg-white py-2 px-2 rounded-xl w-7/12 sm:w-full">
                <h1 className="bg-green-400 px-2  py-1 rounded-lg mr-4">
                  <i class="fa-solid fa-clock text-white"></i>
                </h1>
                <h1 className="leading-4 mr-5 text-sm">Complaint Published</h1>
                <h1>
                  <i class="fa-solid fa-arrow-right mr-5"></i>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="px-14 mt-4">
          <h1 className="text-xl  mb-4 font-bold">
            Bosch dishwasher for the past two years.
          </h1>
          <h1 className="text-gray-400 font-bold">
            Did I drop my back-to-school student card ? I said I would get a new
            one again, but he said there is a 637 TL fine . Someone else used my
            card . I had to pay as well. As a student , I was in a very
            difficult situation. Can you please help with this?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MyComplaints;
