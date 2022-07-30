import React from "react";
import { Link } from "react-router-dom";

function Comparision() {
  return (
    <div className="py-12">
      <div
        className="sm:px-10 px-4 py-12 rounded-3xl"
        style={{ backgroundColor: "#272635" }}
      >
        <h1 className="text-white sm:text-4xl text-2xl mb-10 font-bold tracking-wider">
          Brand Comparison
        </h1>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-4 col-span-12 mb-5 lg:mb-0">
            <input
              type="text"
              className="lg:w-10/12 w-full bg-gray-600 pl-6 py-3 rounded-full text-xl outline-none"
              placeholder="1. Brand"
            />
          </div>
          <div className="lg:col-span-1 col-span-12 text-center lg:text-left  mb-5 lg:mb-0">
            <h1 className="pt-3 text-gray-400">With</h1>
          </div>
          <div className="lg:col-span-4 col-span-12 mb-9 lg:mb-0">
            <input
              type="text"
              className="lg:w-10/12 w-full  bg-gray-600 pl-6 py-3 rounded-full text-xl outline-none"
              placeholder="2. Brand"
            />
          </div>
          <div className="lg:col-span-3 col-span-12">
            {" "}
            <button
              type="submit"
              className="text-white bg-green-400 text-xl px-9 rounded-full py-3 w-full"
            >
              <Link to="/compare-brands-details">Compare</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparision;
