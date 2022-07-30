import React from "react";

function CommunicateDirectly() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12 order-2 lg:order-1 px-4">
          <h1 className="text-4xl text-gray-700 font-medium lg:w-8/12 leading-relaxed tracking-wider mb-5 lg:pt-28">
            Know Your Customers.
          </h1>
          <h1 className="sm:text-2xl text-xl text-gray-500 tracking-wide leading-10 lg:w-10/12">
            Your market research and customer development operations will need
            to map out potential online customer journeys from start to finish
            Customers always perceive good ideas by reading different brand
            complaints and their resolution processes
          </h1>
          {/* <h1 className="sm:text-2xl text-xl text-gray-500 tracking-wide leading-10 lg:w-10/12">
            You can easily track all complaints from the Complaints management
            panel, and instantly communicate with your customers.
          </h1> */}
        </div>
        <div className="lg:col-span-6 col-span-12 order-1 lg:order-2 lg:px-0 px-3">
          <img
            src="./images/customer-service.png"
            className="my-12 lg:my-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CommunicateDirectly;
