import React from "react";

function AdminSendEmail() {
  return (
    <>
      <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-center py-7">
        <h2 className="w-12/12 md:w-3/12 text-2xl font-semibold">Send Email</h2>
      </div>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="w-full md:w-8/12 overflow-auto rounded-lg bg-white shadow p-6 md:p-10">
        <form action="" className="w-full" method="post">
          <label class="block my-3">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email subject"
              required
            />
          </label>
          <label class="block my-3">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Message
            </span>
            <textarea
              name="message"
              cols="10"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              required
            />
          </label>
          <button
            className="bg-violet-600 w-full text-white py-2 px-8 hover:bg-violet-500 ease-in duration-300 rounded my-4"
            type="submit"
          >
            Send Email
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminSendEmail;
