import React, { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import "./components/sidebar.css";
// components
import MyProfile from "./components/MyProfile";
import PersonalInformation from "./components/PersonalInformation";
import DeleteMyAccount from "./components/DeleteMyAccount";
import MyComplaints from "./components/MyComplaints";
import SavedComplaints from "./components/SavedComplaints";
import MyNotifications from "./components/MyNotifications";
import WriteComplaint from "./components/WriteComplaint";
// icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// images
import logo from "./images/logo.png";
import mobileLogo from "./images/mobile-logo.png";
import profile from "./images/profile.png";
import profileContext from "../../context/ProfileContext";

function UserDashboard() {
  const { loginData } = useContext(profileContext);
  // Profile Dropdown
  const [isArrowDown, setIsArrowDown] = useState(false);
  // Notification Dropdown
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  let [open, setOpen] = useState(true);
  const [userbody, setUserbody] = useState("profile");
  console.log(loginData);

  return (
    <>
      <div className="profile-body">
        <div className="grid grid-cols-12 container mx-auto">
          {/* Navbar for large devices */}
          <div className="col-span-3 pl-20 min-h-screen lg:block hidden bg-white">
            <div className="w-full">
              {/* Sidebar content */}
              <Link to="/">
                <img
                  className="mt-9 mb-16 object-cover h-30 w-32"
                  src={logo}
                  alt=""
                />
              </Link>
              <ul className="grid grid-cols-1 gap-y-10 font-normal text-lg text-slate-500">
                <li>
                  <span
                    className={`cursor-pointer hover:text-blue-500 ${
                      userbody === "profile"
                        ? "text-blue-500"
                        : "text-slate-500"
                    }`}
                    onClick={() => setUserbody("profile")}
                  >
                    <PersonOutlineOutlinedIcon className="mr-2" />
                    Edit My Profile
                  </span>
                  <ul className="grid grid-cols-1 gap-y-3 ml-8 mt-3 text-base">
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        userbody === "personalinfo"
                          ? "text-blue-500"
                          : "text-slate-500"
                      }`}
                      onClick={() => setUserbody("personalinfo")}
                    >
                      Personal Information
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        userbody === "notification"
                          ? "text-blue-500"
                          : "text-slate-500"
                      }`}
                      onClick={() => setUserbody("notification")}
                    >
                      Notification
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        userbody === "delete"
                          ? "text-blue-500"
                          : "text-slate-500"
                      }`}
                      onClick={() => setUserbody("delete")}
                    >
                      Delete My Account
                    </li>
                  </ul>
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    userbody === "complaints"
                      ? "text-blue-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => setUserbody("complaints")}
                >
                  <CreateOutlinedIcon className="mr-2" /> My Complaints
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    userbody === "mynotification"
                      ? "text-blue-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => setUserbody("mynotification")}
                >
                  <NotificationsNoneOutlinedIcon className="mr-2" /> My
                  Notifications
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    userbody === "save" ? "text-blue-500" : "text-slate-500"
                  }`}
                  onClick={() => setUserbody("save")}
                >
                  <BookmarkAddedOutlinedIcon className="mr-2" /> Saved
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                  <ExitToAppIcon className="mr-2" /> Logout
                </li>
                <li onClick={() => setUserbody("create-complaints")}>
                  <button className="bg-violet-600 text-white rounded-full px-5 py-2">
                    Create Complaint
                    <CreateOutlinedIcon className="mx-2" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 profile-body min-h-screen">
            {/* Navbar for large devices */}
            <div className="w-full mx-auto mt-9 hidden lg:block">
              <div className="flex items-center justify-between">
                <div className="flex justify-evenly w-3/12 font-medium text-lg text-slate-400">
                  <p>
                    <Link
                      className="hover:text-slate-900 duration-100"
                      to="/complaints"
                    >
                      Complaints
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="hover:text-slate-900 duration-100"
                      to="/compare-brands"
                    >
                      Brands
                    </Link>
                  </p>
                </div>
                <div className="w-4/12 ">
                  <form action="" method="post">
                    <div className="relative flex items-center text-gray-600">
                      <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
                      <input
                        type="text"
                        name="search"
                        placeholder="Search for a brand, model, product"
                        autoComplete="off"
                        aria-label="Search talk"
                        className="w-full pr-3 pl-10 px-4 py-3 font-semibold placeholder-gray-400 text-gray-500 rounded-3xl bg-white focus:outline-none focus:right-2 ring-2 ring-gray-300 focus:border-sky-300 focus:ring-sky-200"
                      />
                    </div>
                  </form>
                </div>
                <div className="w-5/12 lg:w-3/12 flex justify-evenly items-center">
                  {/* profile option panel */}
                  {/* Notification */}
                  <Menu as="div" className="relative">
                    <Menu.Button
                      onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    >
                      <NotificationsNoneOutlinedIcon className="text-gray-500" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {/* Menu Items */}
                      <Menu.Items className="absolute right-0 mt-2 w-80 max-h-96 overflow-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="px-1 py-1 bg-blue-500">
                          <Menu.Item>
                            <h2 className="group flex w-full items-center rounded-md px-2 py-2 text-md text-white">
                              Notifications
                            </h2>
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                className={`${
                                  active
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-900"
                                } group cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <div className="grid grid-cols-12">
                                  <div className="col-span-11">
                                    <h2 className="">Add new Companies</h2>
                                    <p className="text-gray-400">4 days ago</p>
                                  </div>
                                  <div className="col-span-1">
                                    <EmailOutlinedIcon />
                                  </div>
                                </div>
                              </div>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                className={`${
                                  active
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-900"
                                } group cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <div className="grid grid-cols-12">
                                  <div className="col-span-11">
                                    <h2 className="">Add new User</h2>
                                    <p className="text-gray-400">6 days ago</p>
                                  </div>
                                  <div className="col-span-1">
                                    <EmailOutlinedIcon />
                                  </div>
                                </div>
                              </div>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Profile */}
                  <Menu as="div" className="relative">
                    {/* Menu Button */}
                    <Menu.Button
                      onClick={() => setIsArrowDown(!isArrowDown)}
                      className="relative flex items-center"
                    >
                      <img
                        className="h-8 w-8 object-cover rounded-full"
                        src={profile}
                        alt=""
                      />
                      <p className="mx-2">{loginData.name} </p>
                      <KeyboardArrowDownIcon />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {/* Menu Items */}
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        {/* <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <Link to="/my-profile">
                                <button
                                  className={`${
                                    active
                                      ? "bg-blue-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <AccountCircleOutlinedIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Profile
                                </button>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <KeyOutlinedIcon
                                  className="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                                Password
                              </button>
                            )}
                          </Menu.Item>
                        </div> */}
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <LogoutOutlinedIcon
                                  className="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                                Logout
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            {/* Navbar for mobail devices */}
            <div className="w-11/12 pt-6 mx-auto flex items-center justify-between block lg:hidden">
              <Link to="/">
                <img
                  className="object-cover h-20 w-20"
                  src={mobileLogo}
                  alt=""
                />
              </Link>
              <div
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {open ? <MenuIcon /> : <CloseIcon />}
              </div>
            </div>
            {/*mobail menu items */}
            {open ? null : (
              <div className="m-2">
                <div className="w-full z-50 mt-7 block lg:hidden">
                  <div className="p-8 overflow-auto max-h-80 rounded-lg bg-slate-300">
                    <div className="w-full">
                      <ul className="grid grid-cols-1 gap-y-5 font-normal text-lg text-slate-500">
                        <li className="flex items-center">
                          <img
                            className="h-10 w-10 object-cover rounded-full"
                            src={profile}
                            alt=""
                          />
                          <p className="mx-2">Monjurul</p>
                        </li>
                        <li>
                          <PersonOutlineOutlinedIcon className="mr-2" />
                          <span
                            className="cursor-pointer"
                            onClick={() => setUserbody("profile")}
                          >
                            Edit My Profile
                          </span>
                          <ul className="grid grid-cols-1 gap-y-3 ml-8 mt-3 text-base">
                            <li
                              className="cursor-pointer"
                              onClick={() => setUserbody("personalinfo")}
                            >
                              Personal Information
                            </li>
                            <li
                              className="cursor-pointer"
                              onClick={() => setUserbody("notification")}
                            >
                              Notification
                            </li>
                            <li
                              className="cursor-pointer"
                              onClick={() => setUserbody("delete")}
                            >
                              Delete My Account
                            </li>
                          </ul>
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setUserbody("complaints")}
                        >
                          <CreateOutlinedIcon className="mr-2" /> My Complaints
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setUserbody("mynotification")}
                        >
                          <NotificationsNoneOutlinedIcon className="mr-2" /> My
                          Notifications
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setUserbody("save")}
                        >
                          <BookmarkAddedOutlinedIcon className="mr-2" /> Saved
                        </li>
                        <li>
                          <form action="" method="post">
                            <div className="relative flex items-center text-gray-600">
                              <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
                              <input
                                type="text"
                                name="search"
                                placeholder="Search for a brand, model, product"
                                autoComplete="off"
                                aria-label="Search talk"
                                className="w-full pr-3 pl-10 px-4 py-3 font-semibold placeholder-gray-400 text-gray-500 rounded-3xl border-none bg-white ring-0 focus:border-0"
                              />
                            </div>
                          </form>
                        </li>
                        <li onClick={() => setUserbody("create-complaint")}>
                          <button className="bg-violet-600 text-white w-full rounded-full py-2">
                            Create Complaint
                            <CreateOutlinedIcon className="mx-2" />
                          </button>
                        </li>
                        <li>
                          <p className="text-center">Logout</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full rounded-lg bg-white p-8 mt-1">
                    <div className="grid grid-cols-1 gap-y-2 font-bold text-2xl text-slate-500">
                      <Link className="my-2" to="/complaints">
                        <div className="flex justify-between">
                          <h2>Complaints</h2> <ArrowForwardIcon />
                        </div>
                      </Link>
                      <Link className="my-2" to="/all-brands">
                        <div className="flex justify-between">
                          <h2>Brands</h2> <ArrowForwardIcon />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* dashboard body */}
            <div>
              {userbody === "profile" && <MyProfile />}
              {userbody === "personalinfo" && <PersonalInformation />}
              {userbody === "delete" && <DeleteMyAccount />}
              {userbody === "complaints" && <MyComplaints />}
              {/* {userbody === "notification" && <Notification />} */}
              {userbody === "save" && <SavedComplaints />}
              {userbody === "mynotification" && <MyNotifications />}
              {userbody === "create-complaints" && <WriteComplaint />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
