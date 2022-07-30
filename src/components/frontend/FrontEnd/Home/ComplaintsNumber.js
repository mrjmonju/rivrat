import React from "react";

function ComplaintsNumber() {
  return (
    <div className="my-32 container mx-auto">
      <h1 className="text-center text-5xl text-gray-400 font-medium mb-24 tracking-wider">
        Complaints by Numbers
      </h1>
      <div className="grid grid-cols-12 md:gap-x-8 gap-y-8 px-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white sm:p-8 py-8 rounded-3xl grid grid-cols-12 md:h-72 lg:h-80">
            <div className="md:col-span-12 col-span-4">
              <img
                src="./images/Number-member.svg"
                className="md:mb-12 md:mr-0 mr-10"
                alt=""
              />
            </div>
            <div className="md:col-span-12 col-span-8">
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white sm:p-8 py-8 px-4 rounded-3xl grid grid-cols-12 md:h-72 lg:h-80">
            <div className="md:col-span-12 col-span-4">
              <img
                src="./images/Number-brand.svg"
                className="md:mb-12 md:mr-0 mr-10"
                alt=""
              />
            </div>
            <div className="md:col-span-12 col-span-8">
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white sm:p-8 py-8 px-4 rounded-3xl grid grid-cols-12 md:h-72 lg:h-80">
            <div className="md:col-span-12 col-span-4">
              <img
                src="./images/Number-complaint.svg"
                className="md:mb-12 md:mr-0 mr-10"
                alt=""
              />
            </div>
            <div className="md:col-span-12 col-span-8">
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white sm:p-8 py-8 px-4 rounded-3xl grid grid-cols-12 md:h-72 lg:h-80">
            <div className="md:col-span-12 col-span-4">
              <img
                src="./images/Number-visitor.svg"
                className="md:mb-12 md:mr-0 mr-10"
                alt=""
              />
            </div>
            <div className="md:col-span-12 col-span-8">
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintsNumber;
