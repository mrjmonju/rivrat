import React from "react";

function Banner() {
  return (
    <div className="bg-gray-100 ">
      <div className="grid grid-cols-12 content-center container mx-auto">
        <div className="col-span-12 md:col-span-12 2xl:col-span-5 order-2 md:order-1 h-full">
          <div className="flex flex-col py-10">
            <h1 className="xl:text-6xl md:text-3xl text-3xl font-normal text-gray-600 mt-5 ">
              <span className="font-bold">
                Turn your Roast into a Boast: <br />
              </span>
              from complaints to compliments
            </h1>
            <p className="md:my-10 my-8 text-lg">
              Don’t just record the complaints- manage them! RivRat is a
              consolidated system that allows a brand to manage the progress of
              the complaint, identify those that need immediate action, and work
              through any issue until it is resolved which increases the
              productivity of the workforce.
            </p>
            <div className="relative  lg:mb-0">
              <input
                type="text"
                placeholder="Search for branda, models, products"
                className="w-full text-xl font-semibold tracking-wider py-3 pl-5 rounded-full outline-none shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-0 h-full bg-green-400 text-white font-semibold px-7 text-xl rounded-full"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 2xl:col-span-7 order-1 md:order-2">
          <img
            src="./images/Online-Customer-Service.png"
            className="object-cover ml-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
