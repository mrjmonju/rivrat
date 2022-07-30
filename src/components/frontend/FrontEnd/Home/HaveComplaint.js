import React from "react";

function HaveComplaint() {
  return (
    <div className="md:relative overflow-hidden md:pt-44 pt-20 md:pb-32 mt-10 mb-20 md:mb-0 bg-white">
      <div className="container mx-auto grid grid-cols-12 gap-x-10 ">
        <div className=" p-6 md:p-0  col-span-12 md:col-span-5  md:order-1 order-2 relative 2xl:mt-40 md:mt-24 mb:mb-0 mb-20">
          <h1 className="text-2xl md:text-5xl xl:leading-relaxed text-gray-400 mb-10">
            <span className="font-medium break-">Have a Complaint</span> <br />
            <span className="font-bold">Why is it important?</span>
          </h1>
          <p className="text-gray-400 2xl:text-2xl break-words md:w-full w-3/4">
            The first step in exceeding your customer’s expectations is to know
            those expectations and the best way to know this is through customer
            complaints. Where the product or service disappointed them,
            Customers don’t expect you to be perfect. They do expect you to fix
            things when they go wrong.” And it will help build a loyal customer
            base.
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 md:order-2 order-1">
          {/* <div className="green-circle md:block hidden"></div>
          <div className="gray-circle md:block hidden"></div>
          <div className="blue-half-circle md:block hidden"></div>
          <div className="green-half-circle md:block hidden"></div>
          <div className="yellow-circle  md:block hidden"></div> */}
          <img
            src="./images/video-cover-image.png"
            className="object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HaveComplaint;
