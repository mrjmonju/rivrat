import React from "react";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function AdminReviews() {
  return (
    <>
      <h2 className="text-2xl font-semibold py-7">Review</h2>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="w-full overflow-auto rounded-lg shadow">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                S.N.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Review
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Company
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Username
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Rating
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 test-sm text-gray-700">1</td>
              <td className="p-3 test-sm text-gray-700">Good</td>
              <td className="p-3 test-sm text-gray-700">SpaceX</td>
              <td className="p-3 test-sm text-gray-700">space.jhon</td>
              <td className="p-3 test-sm text-gray-700">5</td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
                    <RemoveRedEyeOutlinedIcon />
                  </button>
                  <button className="p-1 text-white bg-red-600 rounded mx-1">
                    <DeleteOutlineOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">2</td>
              <td className="p-3 test-sm text-gray-700">Great</td>
              <td className="p-3 test-sm text-gray-700">Amazon</td>
              <td className="p-3 test-sm text-gray-700">weakson</td>
              <td className="p-3 test-sm text-gray-700">4</td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
                    <RemoveRedEyeOutlinedIcon />
                  </button>
                  <button className="p-1 text-white bg-red-600 rounded mx-1">
                    <DeleteOutlineOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">3</td>
              <td className="p-3 test-sm text-gray-700">Good</td>
              <td className="p-3 test-sm text-gray-700">Facebook</td>
              <td className="p-3 test-sm text-gray-700">poele</td>
              <td className="p-3 test-sm text-gray-700">5</td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
                    <RemoveRedEyeOutlinedIcon />
                  </button>
                  <button className="p-1 text-white bg-red-600 rounded mx-1">
                    <DeleteOutlineOutlinedIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">4</td>
              <td className="p-3 test-sm text-gray-700">Good</td>
              <td className="p-3 test-sm text-gray-700">Apple</td>
              <td className="p-3 test-sm text-gray-700">mask</td>
              <td className="p-3 test-sm text-gray-700">3</td>
              <td className="p-3 test-sm text-gray-700">
                <div>
                  <button className="p-1 text-white bg-purple-600 rounded mx-1">
                    <RemoveRedEyeOutlinedIcon />
                  </button>
                  <button className="p-1 text-white bg-red-600 rounded mx-1">
                    <DeleteOutlineOutlinedIcon />
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

export default AdminReviews;
