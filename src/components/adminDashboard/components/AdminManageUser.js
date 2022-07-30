import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";

function AdminManageUser() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="w-12/12 md:w-3/12 text-2xl font-semibold py-7">
          Manage Users
        </h2>
        <div className="w-12/12 md:w-4/12">
          <form action="" method="post">
            <div className="relative flex items-center text-gray-600">
              <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="Username or email"
                autoComplete="off"
                aria-label="Search talk"
                className="w-full pr-3 pl-10 px-4 py-3 font-semibold placeholder-gray-400 text-gray-500 rounded-3xl border-none bg-white ring-0 focus:ring-0"
              />
            </div>
          </form>
        </div>
      </div>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="w-full overflow-auto rounded-lg shadow">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                User
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Email-Phone
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Country
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Joined At
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 test-sm text-gray-700">
                <p>Jos mbolomnyoi</p>
                <p>@rate dd</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>josmbhfd@gmail.com</p>
                <p>12345678</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>US</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>2022--05-18 06:10AM</p>
                <p>1 day ago</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
                    <TvOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">
                <p>Jos mbolomnyoi</p>
                <p>@rate dd</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>josmbhfd@gmail.com</p>
                <p>12345678</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>US</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>2022--05-18 06:10AM</p>
                <p>1 day ago</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
                    <TvOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">
                <p>Jos mbolomnyoi</p>
                <p>@rate dd</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>josmbhfd@gmail.com</p>
                <p>12345678</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>US</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>2022--05-18 06:10AM</p>
                <p>1 day ago</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
                    <TvOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">
                <p>Jos mbolomnyoi</p>
                <p>@rate dd</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>josmbhfd@gmail.com</p>
                <p>12345678</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>US</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p>2022--05-18 06:10AM</p>
                <p>1 day ago</p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
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

export default AdminManageUser;
