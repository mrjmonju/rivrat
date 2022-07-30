import React from "react";
import { Link } from "react-router-dom";
// icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

function SidebarContent() {
  return (
    <>
      <img
        className="mt-9 mb-16 object-cover h-30 w-32"
        src="./images/logo.png"
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
              <Link to="">Notification</Link>
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
            <NotificationsNoneOutlinedIcon className="mr-2" /> My Notifications
          </Link>
        </li>
        <li>
          <Link to="/saved-complaints">
            <BookmarkAddedOutlinedIcon className="mr-2" /> Saved
          </Link>
        </li>
        <li>
          <Link to="">
            <ExitToAppIcon className="mr-2" /> Logout
          </Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Admin Dashboard</Link>
        </li>
        <li>
          {/* <a
                  className="bg-violet-600 text-white w-full rounded-full px-6 py-2"
                  href="https://rivrat.testserver.jamtalent.net/sikayetyaz"
                >
                  File a Complaint
                  <CreateOutlinedIcon className="mx-2" />
                </a> */}
          <Link to="/file-complaint">
            <button className="bg-violet-600 text-white w-full rounded-full px-6 py-2">
              File a Complaint
              <CreateOutlinedIcon className="mx-2" />
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default SidebarContent;
