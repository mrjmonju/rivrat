import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function AdminAllCompanies() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="w-12/12 md:w-3/12 text-2xl font-semibold py-7">
          All Companies
        </h2>
        <div className="w-12/12 md:w-4/12">
          <form action="" method="post">
            <div className="relative flex items-center text-gray-600">
              <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="User or email"
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
                S.N.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                User
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Category
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                URL
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 test-sm text-gray-700">1</td>
              <td className="p-3 test-sm text-gray-700">Jhon</td>
              <td className="p-3 test-sm text-gray-700">jhone521</td>
              <td className="p-3 test-sm text-gray-700">Education</td>
              <td className="p-3 test-sm text-gray-700">
                https://www.demo.com
              </td>
              <td className="p-3 test-sm text-gray-700">test@example.com</td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">1</td>
              <td className="p-3 test-sm text-gray-700">Jhon</td>
              <td className="p-3 test-sm text-gray-700">jhone521</td>
              <td className="p-3 test-sm text-gray-700">Education</td>
              <td className="p-3 test-sm text-gray-700">
                https://www.demo.com
              </td>
              <td className="p-3 test-sm text-gray-700">test@example.com</td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">1</td>
              <td className="p-3 test-sm text-gray-700">Jhon</td>
              <td className="p-3 test-sm text-gray-700">jhone521</td>
              <td className="p-3 test-sm text-gray-700">Education</td>
              <td className="p-3 test-sm text-gray-700">
                https://www.demo.com
              </td>
              <td className="p-3 test-sm text-gray-700">test@example.com</td>
            </tr>
            <tr>
              <td className="p-3 test-sm text-gray-700">1</td>
              <td className="p-3 test-sm text-gray-700">Jhon</td>
              <td className="p-3 test-sm text-gray-700">jhone521</td>
              <td className="p-3 test-sm text-gray-700">Education</td>
              <td className="p-3 test-sm text-gray-700">
                https://www.demo.com
              </td>
              <td className="p-3 test-sm text-gray-700">test@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminAllCompanies;
