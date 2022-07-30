import React from "react";
import { Link } from "react-router-dom";

import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

function AdminAdvertisement() {
  return (
    <>
      <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-center py-7">
        <h2 className=" text-2xl font-semibold">All Advertisement</h2>
        <div className="">
          <button className="bg-blue-500 rounded py-1 px-3 text-white">
            <AddOutlinedIcon />
            Add New Advertisement
          </button>
        </div>
      </div>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="w-full overflow-auto rounded-lg shadow">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                S.N.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Type
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Size
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Impression
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Click
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Redirect
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
              <td className="p-3 test-sm text-gray-700">1</td>
              <td className="p-3 test-sm text-gray-700">image</td>
              <td className="p-3 test-sm text-gray-700">300x600</td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-slate-300 border-slate-400 text-center rounded-full">
                  2005
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-sky-300 border-sky-400 text-center rounded-full">
                  10
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <Link to="/fdf">
                  <LinkOutlinedIcon />
                </Link>
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
            <tr>
              <td className="p-3 test-sm text-gray-700">2</td>
              <td className="p-3 test-sm text-gray-700">image</td>
              <td className="p-3 test-sm text-gray-700">250x750</td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-slate-300 border-slate-400 text-center rounded-full">
                  352
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-sky-300 border-sky-400 text-center rounded-full">
                  25
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <Link to="/fdf">
                  <LinkOutlinedIcon />
                </Link>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-red-300 border-red-400 text-center rounded-full">
                  Inactive
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-blue-400 rounded mx-1">
                    <TvOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminAdvertisement;
