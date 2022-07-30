import React from "react";
import Toggle from "./subComponents/Toggle";

function AdminGeneralSetting() {
  return (
    <>
      <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-center py-7">
        <h2 className="w-12/12 md:w-3/12 text-2xl font-semibold">
          General Setting
        </h2>
      </div>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="w-full overflow-auto rounded-lg bg-white shadow p-6 md:p-10">
        <form action="" className="w-full" method="post">
          <label class="block my-3">
            <span class="block text-sm font-medium text-slate-700">
              Site Title
            </span>
            <input
              type="text"
              name="subject"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Site Title"
            />
          </label>

          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-4">
            <Toggle title="Force Secure Password" />
            <Toggle title="Agree Policy" />
            <Toggle title="User Registration" />
            <Toggle title="Force SSL" />
            <Toggle title="Email Verification" />
            <Toggle title="SMS Verification" />
            <Toggle title="SMS Notification" />
          </div>
          <button
            className="bg-violet-600 w-full text-white py-2 px-8 hover:bg-violet-500 ease-in duration-300 rounded my-4"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminGeneralSetting;
