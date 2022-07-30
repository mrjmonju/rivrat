import React from "react";

function DriveChange() {
  return (
    <div className="my-16 container mx-auto">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-7 col-span-12">
          <img
            src="./images/drive-change.png"
            alt=""
            className="w-full mb-10 lg:mb-0"
          />
        </div>
        <div className="lg:col-span-5 col-span-12 sm:px-0 px-5">
          <h1 className="text-5xl text-gray-700 lg:mt-20 mb-10">
            Consistent Customer Experience
          </h1>
          <h1 className="text-xl text-gray-400 font-medium mb-7 leading-10">
            Managing a complaint effectively will speed up the process, and
            reduce the potential for repeat complaints. Using a complaints
            management system gives your workforce the tools to provide accurate
            feedback to the customer, as to where they are at with dealing with
            their complaint.
          </h1>
          <div className="lg:w-fit w-full text-center bg-emerald-500 px-8 py-3 rounded-full  text-white ">
            <button className="font-bold text-xl">Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriveChange;
