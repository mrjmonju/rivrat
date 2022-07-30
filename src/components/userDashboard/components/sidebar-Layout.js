import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
// components
import MobileMenu from "./MobileMenu";
// icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Sidebar() {
  let [open, setOpen] = useState(true);

  return (
    <>
      <div className="grid grid-cols-12">
        {/* sidebar for large devices */}
        <div className="col-span-3 mx-auto min-h-screen lg:block hidden">
          <div className="w-full">
            <img
              className="mt-9 mb-16 object-cover h-30 w-32"
              src="./images/dashboard/xolvie-logo.svg"
              alt=""
            />
            <ul className="grid grid-cols-1 gap-y-10 font-normal text-lg text-slate-500">
              <li className="">
                <Link to="/my-profile">
                  <PersonOutlineOutlinedIcon className="mr-2" />
                  Edit My Profile
                </Link>
                <ul className="grid grid-cols-1 gap-y-3 ml-8 mt-3 text-base">
                  <li>
                    <Link to="/personal-information">Personal Information</Link>
                  </li>
                  <li>
                    <Link to="/notification-preferences">Notification</Link>
                  </li>
                  <li>
                    <Link to="/delete-my-account">Delete My Account</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/my-complaints">
                  <CreateOutlinedIcon className="mr-2" /> My Complaints
                </Link>
              </li>
              <li>
                <Link to="/my-notifications">
                  <NotificationsNoneOutlinedIcon className="mr-2" /> My
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="/saved-complaints">
                  <BookmarkAddedOutlinedIcon className="mr-2" /> Saved
                </Link>
              </li>
              <li>
                <Link to="/logout">
                  <ExitToAppIcon className="mr-2" /> Logout
                </Link>
              </li>
            </ul>
            <button className="mt-20">btn</button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 profile-body min-h-screen">
          {/* Navbar for large devices */}
          <div className="w-10/12 mx-auto mt-9 hidden lg:block">
            <div className="flex items-center justify-evenly">
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
                    to="/all-brands"
                  >
                    Brands
                  </Link>
                </p>
              </div>
              <div className="w-4/12 mx-auto">
                <form action="" method="post">
                  <div className="relative flex items-center text-gray-600">
                    <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
                    <input
                      type="text"
                      name="search"
                      placeholder="Search for a brand, model, product"
                      autoComplete="off"
                      aria-label="Search talk"
                      className="w-full pr-3 pl-10 px-4 py-3 font-semibold placeholder-gray-400 text-gray-500 rounded-3xl border-none bg-white ring-0 focus:ring-0"
                    />
                  </div>
                </form>
              </div>
              <div className="w-5/12 lg:w-3/12 flex justify-evenly items-center">
                <NotificationsNoneOutlinedIcon className="text-gray-500" />
                <div className="flex items-center justify-around">
                  <img
                    className="h-8 w-8 object-cover rounded-full"
                    src="./images/dashboard/profile.png"
                    alt=""
                  />
                  <p className="mx-2">Monjurul</p>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </div>
          </div>
          {/* Navbar for mobail devices */}
          <div className="w-11/12 pt-6 mx-auto flex items-center justify-between block lg:hidden">
            <img
              className="object-cover h-30 w-32"
              src="./images/dashboard/xolvie-logo.svg"
              alt=""
            />
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? <MenuIcon /> : <CloseIcon />}
            </div>
          </div>
          {/* menu items */}
          {open ? null : <MobileMenu />}
          {/* dashboard body */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
