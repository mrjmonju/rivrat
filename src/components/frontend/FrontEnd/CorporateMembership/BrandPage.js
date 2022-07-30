import React from "react";

function BrandPage() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 brand-page-container">
        <div className="col-span-12 lg:col-span-6 brand-page-des-div px-7 md:px-0 lg:order-1 order-2 ">
          <h4 className="text-2xl text-gray-400 font-semibold tracking-wider mb-10 2xl:pt-32">
            Brand Page
          </h4>
          <h1 className="brand-page-title md:text-5xl text-3xl  md:w-3/4">
            Get ranking in search result
          </h1>
          <p className="brand-page-p">
            The brand who have a good customer engagement and resolving history
            will appear on the complaint page in RivRat where thousands of
            visitors visit every month which will increase their brand value.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:order-2 order-1">
          <img
            src="./images/desktop-row-search-result.png"
            alt=""
            className="brand-page-img w-fit"
            title="Arama Sonuçlarında Dikkat Çekin"
          />
        </div>
      </div>
    </div>
  );
}

export default BrandPage;
