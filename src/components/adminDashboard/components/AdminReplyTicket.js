import React from "react";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function AdminAdvertisement() {
  return (
    <>
      <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-center py-7">
        <h2 className="w-12/12 md:w-3/12 text-2xl font-semibold">
          All Advertisement
        </h2>
      </div>
      <hr className="w-full h-1 mb-6 bg-slate-500" />
      <div className="w-full overflow-auto rounded-lg bg-white shadow p-6 md:p-10">
        <div className="flex gap-x-4 mb-4">
          <p className="border-2 px-3 bg-green-300 border-green-400 text-center rounded-full">
            Active
          </p>
          <p>[Ticket#25578] test</p>
        </div>
        <form action="" className="w-full relative" method="post">
          <textarea
            name="message"
            id=""
            className="w-full border p-5"
            cols=""
            placeholder="Your message...."
            rows="6"
          ></textarea>
          <label className="block mb-2 mt-5">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "
            />
          </label>
          <p className="text-slate-500">
            Allowed File Extensions: .jpg, .jpg, .png, .pdf, .doc, .docx
          </p>
          <button
            className="bg-violet-600 text-white py-2 px-8 ease-in duration-300 rounded md:absolute hover:px-14  bottom-2 right-2 md:my-0 my-4"
            type="submit"
          >
            <ReplyOutlinedIcon />
            Reply
          </button>
        </form>
        <div className="mt-8">
          <div
            class="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-x-2 border-blue-300 border-2
          "
          >
            <div className="text-right col-span-1 p-4">
              <h2 className="text-2xl text-slate-600 font-semibold">
                RS Coder
              </h2>
              <p className="text-xl text-slate-800 font-normal py-2">
                @RSCODER
              </p>
              <button className="bg-red-600 text-white py-1 px-4 ease-in duration-300 rounded  hover:px-5">
                <DeleteOutlineOutlinedIcon />
                Delete
              </button>
            </div>
            <div className="text-left col-span-2 p-4">
              <h2 className="text-xl text-slate-500 font-semibold">
                Posted on Monday, 11th April 2022 @ 03:29
              </h2>
              <p className="text-xl text-slate-500 font-normal py-2">Testing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAdvertisement;
