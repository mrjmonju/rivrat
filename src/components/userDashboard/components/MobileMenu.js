import React from "react";
import { Link } from "react-router-dom";
// icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";

function MobileMenu() {
  return (
    <>
      <div className="m-2">
        <div className="w-full z-50 mt-7 block lg:hidden">
          <div className="p-8 overflow-auto max-h-80 rounded-lg bg-slate-300">
            <div className="w-full">
              <ul className="grid grid-cols-1 gap-y-5 font-normal text-lg text-slate-500">
                <li className="flex items-center">
                  <img
                    className="h-10 w-10 object-cover rounded-full"
                    src="./images/dashboard/profile.png"
                    alt=""
                  />
                  <p className="mx-2">Monjurul</p>
                </li>
                <li className="">
                  <PersonOutlineOutlinedIcon className="mr-2" />
                  Edit My Profile
                </li>
                <li>
                  <CreateOutlinedIcon className="mr-2" /> My Complaints
                </li>
                <li>
                  <NotificationsNoneOutlinedIcon className="mr-2" /> My
                  Notifications
                </li>
                <li>
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
                <li>
                  <Link to="/file-complaint">
                    <button className="bg-violet-600 text-white w-full rounded-full py-2">
                      File a Complaint
                      <CreateOutlinedIcon className="mx-2" />
                    </button>
                  </Link>
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
    </>
  );
}

export default MobileMenu;
