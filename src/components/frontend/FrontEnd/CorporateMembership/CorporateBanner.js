import React from "react";

function CorporateBanner() {
  return (
    <div className="container mx-auto mb-10 2xl:mb-0">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-7 col-span-12 order-2 px-7 md:px-0 lg:order-1 lg:mb-0 mb-20">
          <h1 className="text-4xl text-gray-800 leading-relaxed font-bold tracking-wide mt-20 mb-10   w-11/12">
            <span className="">
              Turn your customer complaint into direct-to-customer (DTC)
            </span>
            <span className="text-3xl font-normal"></span>
          </h1>
          <h1 className="text-xl text-gray-400 mb-12">
            have a complaintCorporate MembershipDiscover Its Advantages.
          </h1>
          <button className="bg-green-400 px-7 py-3 rounded-full text-white hover:bg-green-300 font-bold">
            Sign Up Now
          </button>
        </div>
        <div className="lg:col-span-5 col-span-12 order-1 lg:order-2">
          <img src="./images/satisfaction.svg" className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CorporateBanner;
