import React, { useEffect, useState } from "react";
import SingleTrend from "./SingleTrend";

const Trend = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("trend.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto pt-12 w-full">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="text-4xl font-semibold text-slate-700 flex">
              <span>Trend </span>
              <span className="pt-3 ml-2">
                <img src="./images/100.svg" alt="100" />
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 col-span-12 mt-5 lg:mt-0">
            <div className="social_icon flex justify-between">
              <p className="more mr-2">
                <i className="fa-solid fa-plus i-icon"></i>
              </p>
              <p className="whatsapp mr-2">
                <i className="fa-brands fa-whatsapp i-icon"></i>
              </p>
              <p className="linkedIn mr-2">
                <i className="fa-brands fa-linkedin i-icon"></i>
              </p>
              <p className="facebook mr-2">
                <i className="fa-brands fa-facebook-f i-icon"></i>
              </p>
              <p className="tweeter mr-2">
                <i class="fa-brands fa-twitter i-icon "></i>
              </p>
              {/* <p className="share text-gray-600">Share</p> */}
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="">
          <div className="part-2 grid grid-cols-2 gap-4 md:mt-20 ml-28 font-bold text-gray-400 md:mb-9 mb-6 mt-10">
            <div className="">
              <h3>Brand</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 flex">
              <div className="">
                <h3>Trend</h3>
              </div>
              <div className="">
                <h3>Visitor Increase</h3>
              </div>
              <div className="">
                <h3>Previous Sort</h3>
              </div>
            </div>
          </div>
          {/* dynamic nicher part */}
          <div className="container t-all">
            {data.map((service) => (
              <SingleTrend
                style={{ backgroundColor: "black" }}
                key={service.id}
                service={service}
              ></SingleTrend>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
