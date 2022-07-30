import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
// css
import "./sidebar.css";
// components
import AdminDashboard from "./components/AdminDashboard";
import AdminManageUser from "./components/AdminManageUser";
import AdminSendEmail from "./components/AdminSendEmail";
import AdminUserDetails from "./components/AdminUserDetails";
import AdminCategories from "./components/AdminCategories";
import AdminAllCompanies from "./components/AdminAllCompanies";
import AdminReviews from "./components/AdminReviews";
import AdminAdvertisement from "./components/AdminAdvertisement";
import AdminSupportTickets from "./components/AdminSupportTickets";
import AdminReplyTicket from "./components/AdminReplyTicket";
import AdminGeneralSetting from "./components/AdminGeneralSetting";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FeaturedVideoOutlinedIcon from "@mui/icons-material/FeaturedVideoOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// images
import logo from "./images/logo.png";
import mobileLogo from "./images/mobile-logo.png";
import profile from "./images/profile.png";
import { Link } from "react-router-dom";

function AdminDashboardPage() {
  // Profile Dropdown
  const [isArrowDown, setIsArrowDown] = useState(false);
  // Notification Dropdown
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  // mobile menu
  let [open, setOpen] = useState(true);
  // change body content
  const [adminbody, setAdminbody] = useState("dashboard");

  return (
    <>
      <div className="profile-body">
        <div className="grid grid-cols-12 container mx-auto">
          {/* sidebar for large devices */}
          <div className="col-span-3 pl-20 min-h-screen lg:block hidden bg-white">
            <div className="w-full">
              {/* slidebar content */}
              <Link to="/">
                <img
                  className="mt-9 mb-16 object-cover h-30 w-32"
                  src={logo}
                  alt=""
                />
              </Link>
              <ul className="grid grid-cols-1 gap-y-10 font-normal text-lg text-slate-500">
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    adminbody === "dashboard"
                      ? "text-blue-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => setAdminbody("dashboard")}
                >
                  <HomeOutlinedIcon className="mr-2" />
                  Dashboard
                </li>
                <li>
                  <span
                    className={`cursor-pointer hover:text-blue-500 ${
                      adminbody === "manage"
                        ? "text-blue-500"
                        : "text-slate-500"
                    }`}
                    onClick={() => setAdminbody("manage")}
                  >
                    <GroupsOutlinedIcon className="mr-2" />
                    Manage Users
                  </span>

                  <ul className="grid grid-cols-1 gap-y-3 ml-8 mt-3 text-base">
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        adminbody === "sendemail"
                          ? "text-blue-500"
                          : "text-slate-500"
                      }`}
                      onClick={() => setAdminbody("sendemail")}
                    >
                      Send Email
                    </li>
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        adminbody === "userdetails"
                          ? "text-blue-500"
                          : "text-slate-500"
                      }`}
                      onClick={() => setAdminbody("userdetails")}
                    >
                      User Details
                    </li>
                  </ul>
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    adminbody === "categories"
                      ? "text-blue-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => setAdminbody("categories")}
                >
                  <DeviceHubOutlinedIcon className="mr-2" />
                  Categories
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    adminbody === "companies"
                      ? "text-blue-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => setAdminbody("companies")}
                >
                  <AccountBalanceOutlinedIcon className="mr-2" />
                  All Companies
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    adminbody === "reviews" ? "text-blue-500" : "text-slate-500"
                  }`}
                  onClick={() => setAdminbody("reviews")}
                >
                  <ReviewsIcon className="mr-2" />
                  Reviews
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    adminbody === "advertisement"
                      ? "text-blue-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => setAdminbody("advertisement")}
                >
                  <FeaturedVideoOutlinedIcon className="mr-2" />
                  Advertisement
                </li>
                <li>
                  <span
                    className={`cursor-pointer hover:text-blue-500 ${
                      adminbody === "supporttickets"
                        ? "text-blue-500"
                        : "text-slate-500"
                    }`}
                    onClick={() => setAdminbody("supporttickets")}
                  >
                    <ConfirmationNumberOutlinedIcon className="mr-2" />
                    Support Tickets
                  </span>

                  <ul className="grid grid-cols-1 gap-y-3 ml-8 mt-3 text-base">
                    <li
                      className={`cursor-pointer hover:text-blue-500 ${
                        adminbody === "replyticket"
                          ? "text-blue-500"
                          : "text-slate-500"
                      }`}
                      onClick={() => setAdminbody("replyticket")}
                    >
                      Reply Ticket
                    </li>
                  </ul>
                </li>
                <li
                  className={`cursor-pointer hover:text-blue-500 ${
                    adminbody === "generalsetting"
                      ? "text-blue-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => setAdminbody("generalsetting")}
                >
                  <SettingsOutlinedIcon className="mr-2" />
                  General Setting
                </li>
                <li>
                  <LogoutOutlinedIcon className="mr-2" /> Logout
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 profile-body min-h-screen">
            {/* Navbar for large devices */}
            <div className="w-full mx-auto p-9 hidden lg:block">
              <div className="flex items-center justify-between">
                <div className="w-1/2 mr-auto">
                  {/* search bar */}
                  <form action="" method="post">
                    <div className="relative flex items-center text-gray-600">
                      <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
                      <input
                        type="text"
                        name="search"
                        placeholder="Search for a brand, model, product"
                        autoComplete="off"
                        aria-label="Search talk"
                        className="w-full pr-3 pl-10 px-4 py-3 font-semibold placeholder-gray-400 text-gray-500 rounded-3xl border-none bg-white focus:outline-none focus:right-2 ring-2 ring-gray-300 focus:border-sky-300 focus:ring-sky-200"
                      />
                    </div>
                  </form>
                </div>
                <div className=" ml-auto flex justify-items-start items-center gap-x-3">
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
                      <p className="mx-2">Monjurul</p>
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
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
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
            {/*mobile menu content */}
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
                        <li
                          className="cursor-pointer"
                          onClick={() => setAdminbody("dashboard")}
                        >
                          <HomeOutlinedIcon className="mr-2" />
                          Dashboard
                        </li>
                        <li>
                          <span
                            className="cursor-pointer"
                            onClick={() => setAdminbody("manage")}
                          >
                            <GroupsOutlinedIcon className="mr-2" />
                            Manage Users
                          </span>

                          <ul className="grid grid-cols-1 gap-y-3 ml-8 mt-3 text-base">
                            <li
                              className="cursor-pointer"
                              onClick={() => setAdminbody("sendemail")}
                            >
                              Send Email
                            </li>
                            <li
                              className="cursor-pointer"
                              onClick={() => setAdminbody("userdetails")}
                            >
                              User Details
                            </li>
                          </ul>
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setAdminbody("categories")}
                        >
                          <DeviceHubOutlinedIcon className="mr-2" />
                          Categories
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setAdminbody("companies")}
                        >
                          <AccountBalanceOutlinedIcon className="mr-2" />
                          All Companies
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setAdminbody("reviews")}
                        >
                          <ReviewsIcon className="mr-2" />
                          Reviews
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setAdminbody("advertisement")}
                        >
                          <FeaturedVideoOutlinedIcon className="mr-2" />
                          Advertisement
                        </li>
                        <li>
                          <span
                            className="cursor-pointer"
                            onClick={() => setAdminbody("supporttickets")}
                          >
                            <ConfirmationNumberOutlinedIcon className="mr-2" />
                            Support Tickets
                          </span>

                          <ul className="grid grid-cols-1 gap-y-3 ml-8 mt-3 text-base">
                            <li
                              className="cursor-pointer"
                              onClick={() => setAdminbody("replyticket")}
                            >
                              Reply Ticket
                            </li>
                          </ul>
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => setAdminbody("generalsetting")}
                        >
                          <SettingsOutlinedIcon className="mr-2" />
                          General Setting
                        </li>
                        <li>
                          <LogoutOutlinedIcon className="mr-2" /> Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* dashboard body */}
            <div className="p-10">
              {/* <AdminDashboard /> */}
              {adminbody === "dashboard" && <AdminDashboard />}
              {adminbody === "manage" && <AdminManageUser />}
              {adminbody === "sendemail" && <AdminSendEmail />}
              {adminbody === "userdetails" && <AdminUserDetails />}
              {adminbody === "categories" && <AdminCategories />}
              {adminbody === "companies" && <AdminAllCompanies />}
              {adminbody === "reviews" && <AdminReviews />}
              {adminbody === "advertisement" && <AdminAdvertisement />}
              {adminbody === "supporttickets" && <AdminSupportTickets />}
              {adminbody === "replyticket" && <AdminReplyTicket />}
              {adminbody === "generalsetting" && <AdminGeneralSetting />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboardPage;
