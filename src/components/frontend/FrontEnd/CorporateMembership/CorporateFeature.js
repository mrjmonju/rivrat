import React from "react";

function CorporateFeature() {
  return (
    <div className="feature-container">
      <div className="grid grid-cols-12 text-center container mx-auto">
        <div className="col-span-12 lg:col-span-3 sm:col-span-6 feature-div">
          <div>
            <img
              src="./images/feature-brand-count.svg"
              className="feature-img mx-auto"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-700 mb-3">
              150 thousand
            </h1>
            <h5 className="text-xl text-gray-500 font-medium tracking-wide">
              Registered Brand
            </h5>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 sm:col-span-6 feature-div">
          <img
            src="./images/feature-member-count.svg"
            className="feature-img mx-auto"
            alt=""
          />
          <h1 className="text-4xl font-semibold text-gray-700 mb-3">
            7.8 million
          </h1>
          <h5 className="text-xl text-gray-500 font-medium tracking-wide">
            Number of Individual Members
          </h5>
        </div>
        <div className="col-span-12 lg:col-span-3 sm:col-span-6 feature-div">
          <div>
            <img
              src="./images/feature-visible-count.svg"
              className="feature-img mx-auto"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-700 mb-3">
              20 million
            </h1>
            <h5 className="text-xl text-gray-500 font-medium tracking-wide">
              Visitors in the Last 30 Days
            </h5>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 sm:col-span-6 feature-div">
          <div>
            <img
              src="./images/feature-page-count.svg"
              className="feature-img mx-auto"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-700 mb-3">
              70 million
            </h1>
            <h5 className="text-xl text-gray-500 font-medium tracking-wide">
              Monthly Page Views
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateFeature;
