import React from "react";

import TvOutlinedIcon from "@mui/icons-material/TvOutlined";

function AdminSupportTickets() {
  return (
    <>
      <h2 className="w-12/12 md:w-3/12 text-2xl font-semibold py-7">
        Support Tickets
      </h2>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="w-full overflow-auto rounded-lg shadow">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Subject
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Submitted By
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Priority
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Last Reply
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 test-sm text-gray-700">
                [ticket#199586878] test
              </td>
              <td className="p-3 test-sm text-gray-700">Nabil</td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-sky-300 border-sky-400 text-center rounded-full">
                  open
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">
                <p className="border-2 bg-green-300 border-green-400 text-center rounded-full">
                  Medium
                </p>
              </td>
              <td className="p-3 test-sm text-gray-700">2 days ago</td>
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
    </>
  );
}

export default AdminSupportTickets;
