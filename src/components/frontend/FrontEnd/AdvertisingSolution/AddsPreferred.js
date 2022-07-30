import React from "react";

function AddsPreferred() {
  return (
    <div>
      <div className="grid grid-cols-12 mt-20 container mx-auto">
        <div className="lg:col-span-6 col-span-12">
          <div className="">
            <div className="">
              <img src="./images/happy-user.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-8 add-blue"></div>
            <div className="col-span-4 add-green"></div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 lg:pl-16 md:pr-10 2xl:pr-16 sm:px-0 px-4 2xl:mt-24 lg:mt-0 mt-20">
          <p className="text-2xl font-semibold text-gray-400 mb-20">
            Why are Complaints Ads Preferred?
          </p>
          <p className="text-4xl mb-10 text-slate-900">
            The most accurate channel that brings your brand to your target
            audience
          </p>
          <p className="text-xl text-gray-500">
            RivRat receives 20 million visits per month. The majority of the
            visitors are potential customers between the ages of 25-55 with high
            purchasing power . 95% of them come to RivRat to get information
            about the brand before making a purchase decision.Because
            complainant is a decision-making platform for consumers . That's why
            you can reach the right audience at the right time in RivRat.
            Remember, behind every decision there is a Complaint.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddsPreferred;
