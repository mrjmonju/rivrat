import React from "react";

function DeleteMyAccount() {
  return (
    <>
      <div className="md:w-5/12 md:ml-14 mt-10 px-10 md:px-0">
        <h1 className="text-2xl text-slate-800 font-semibold tracking-wider mb-5">
          Delete My Account
        </h1>
        <hr />
        <h1 className="mt-7 text-gray-400 font-medium">
          We are sorry that you want to delete your account. Can you explain why
          you want to delete it?
        </h1>
        <div className="my-5">
          <h1 className="text-lg font-bold tracking-wider text-gray-600 pl-2 mb-2">
            Explanation
          </h1>
          <textarea
            name=""
            id=""
            className="w-full outline-none rounded-xl px-3 py-2 tracking-wider"
            placeholder="explanation"
            rows="7"
          ></textarea>
        </div>
        <div className="my-4">
          <h1 className="text-lg font-bold tracking-wider text-gray-600 pl-2 mb-2">
            Password
          </h1>
          <input
            type="password"
            className="text-lg py-2 pl-6 w-full rounded-full tracking-wider"
            placeholder="Confirmation Statement"
            name=""
            id=""
          />
        </div>
        <h1 className="text-sm leading-4 mb-9 text-gray-500">
          Since you are a member of our site with your social media account, you
          do not have a password. For this reason , it is sufficient to write '{" "}
          <span className="text-sky-700 font-bold">Delete My Account</span> ' in
          the confirmation sentence field .
        </h1>
        <button
          className="w-full mb-10 bg-red-600 text-white font-bold py-3 rounded-full"
          type="submit"
        >
          Delete My Account
        </button>
      </div>
    </>
  );
}

export default DeleteMyAccount;
