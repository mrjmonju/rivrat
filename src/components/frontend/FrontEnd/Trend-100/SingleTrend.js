import React from "react";

const SingleTrend = ({ service }) => {
  const {
    id,
    image,
    title,
    description,
    graph_img,
    percent,
    count_no,
    count_img,
    verification_img,
  } = service;
  return (
    <div className="px-8 mb-8 ">
      <div className="grid grid-cols-12 rounded-3xl bg-white pl-6 pr-2 py-6">
        <div className="lg:col-span-6 col-span-12 mb-3 lg:mb-0">
          <div className="flex items-center">
          <div>
            <h1 className="text-gray-400 text-2xl mr-4 font-bold">{id}.</h1>
          </div>
          <div className="flex items-center lg:justify-start justify-between w-full ">
            <div className="border px-4 py-2 rounded-3xl mr-4 lg:order-1 order-2">
              <img src={image} className="w-20 h-14" alt="" />
            </div>
            <div className="lg:order-2 order-1">
              <div className="flex">
              <h1 className="text-slate-800 font-bold text-lg mr-1">{title}</h1>
              {
                  verification_img &&  <img src={verification_img} alt="" />
              }
              </div>
              <h1 className="text-sm text-gray-500">{description}</h1>
            </div>
          </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12">
            <div className="grid grid-cols-12">
                <div className="lg:col-span-3 col-span-12 mb-3 lg:mb-3">
                    <div className="flex items-center justify-evenly sm:w-1/2 lg:w-full">
                        <img src={graph_img} className="h-14 " alt="" />
                        <h1 className="lg:hidden h-full "><i class="fa-solid fa-caret-down text-gray-400 hover:text-white hover:bg-gray-500 cursor-pointer border px-3  py-2 rounded-full"></i></h1>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12">
                    <div className="flex lg:items-center lg:justify-center justify-between h-full pl-10 lg:pl-0 pr-5 lg:pr-5 mb-5 lg:mb-0">
                        <h1 className="text-xl text-gray-400 font-semibold lg:hidden">Visitor Increase</h1>
                        <h1 className="text-xl text-gray-400 font-semibold">{percent} %</h1>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12">
                    <div className="h-full flex lg:justify-center justify-between pl-10 lg:pl-0 pr-5 lg:pr-0 mb-3 lg:mb-0">
                        <h1 className="text-xl text-gray-400 font-semibold lg:hidden">Previous Sort</h1>
                        <div className="flex justify-center items-center">
                            <h1 className="mr-1 text-xl text-gray-400 font-bold">{count_no}</h1>
                            {
                                count_img && <img src={count_img} className="h-3 w-3" alt="" />
                            }
                        </div>

                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12 lg:block hidden">
                    <h1 className="flex justify-center items-center h-full "><i class="fa-solid fa-caret-down text-gray-400 hover:text-white hover:bg-gray-500 cursor-pointer border px-3  py-2 rounded-full"></i></h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrend;
