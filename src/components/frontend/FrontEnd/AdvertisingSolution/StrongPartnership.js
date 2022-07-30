import React from "react";

function StrongPartnership() {
  return (
    <div>
      <div className="grid grid-cols-12 lg:mt-28 mt-0 container mx-auto">
        <div className="lg:col-span-6 col-span-12 text-justify  sm:pt-20 pt-14 sm:px-20 px-10 order-2 lg:order-1 mb-10 lg:mb-0">
          <p className="text-4xl lg:mt-20 text-slate-800 mb-10">
            A strong business partnership with an experienced team
          </p>
          <p className="text-xl text-gray-500 font-semibold">
            You can manage complaints in the most appropriate and effective way
            for your company's strategies. With our different advertising models
            and our experienced team, we support you to grow your business and
            reach your goals.
          </p>
        </div>
        <div className="lg:col-span-6 col-span-12 order-1 lg:order-2 lg:mt-0 mt-20">
          <img src="./images/strong-partnership.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default StrongPartnership;
