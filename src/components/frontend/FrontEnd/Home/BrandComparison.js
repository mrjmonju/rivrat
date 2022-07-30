import React from "react";

function BrandComparison() {
  return (
    <div className="container mx-auto  bg-gray-100 pb-28">
      <div
        className="px-6 md:px-10 xl:p-16 pt-72 rounded-3xl relative"
        style={{ backgroundColor: "#272635" }}
      >
        <img
          src="./images/brandComparison-home.png
                "
          alt=""
          className="absolute xl:right-0 xl:bottom-0 xl:top-auto top-6 h-64 xl:h-fit md:right-1/3 sm:right-1/4"
        />
        <h1 className="text-4xl text-white font-bold mb-10">
          Brand Comparison
        </h1>
        <h1 className="text-white text-2xl xl:w-4/6 mb-6">
          Millennials don’t shop the way their parents do. Millennials do 60% of
          their shopping online and are quite accustomed to buying directly from
          brands.
        </h1>
        <h2 className="xl:w-2/4 text-gray-400 mb-10">
          Every customer nowadays visits a complaint management system before
          shopping to perceive some overall ideas about the brand-customer
          complaints resolving process. To choose the best one.
        </h2>
        <div className="xl:flex justify-between items-center  xl:w-3/4 w-full">
          <input
            type="text"
            className="bg-slate-700	rounded-full px-6 py-3 font-semibold text-lg w-full xl:w-fit xl:mb-0 mb-5"
            placeholder="1. Brand"
          />
          <h1 className="text-gray-300 text-center xl:mb-0 mb-5">With</h1>
          <input
            type="text"
            className="bg-slate-700	rounded-full px-6 py-3 font-semibold text-lg w-full xl:w-fit xl:mb-0 mb-16"
            placeholder="2. Brand"
          />
          <button
            type="submit"
            className="bg-green-400 text-white text-xl lg:px-7 py-3 rounded-full w-full xl:w-fit xl:mb-0 mb-5"
          >
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrandComparison;
