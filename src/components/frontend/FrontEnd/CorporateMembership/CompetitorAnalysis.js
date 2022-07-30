import React from "react";

function CompetitorAnalysis() {
  return (
    <div className="my-16 container mx-auto">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-5 col-span-12 order-2 lg:order-1 sm:px-0 px-4">
          <h1 className="text-2xl tracking-widest text-gray-500 font-medium mt-24">
            Special for professionals
          </h1>
          <h1 className="text-5xl text-gray-700 font-semibold mt-6 mb-12">
            Competitors analysis
          </h1>
          <h1 className="text-xl text-gray-500 leading-9 tracking-wider lg:pr-5">
            A complaint management system is the best option for analyzing the
            competitor’s data and other sectors’ brands. This data will help you
            to develop company brand strategies for your potential customers.
            Resolve your complaint and increase your customer base with RivRat
            corporate membership.
          </h1>
        </div>
        <div className="lg:col-span-7 col-span-12 order-1 lg:order-2 lg:px-0 px-3">
          <img
            src="./images/analysis.svg"
            alt=""
            className="mt-16 lg:mt-0 px-3 sm:px-0"
          />
        </div>
      </div>
    </div>
  );
}

export default CompetitorAnalysis;
