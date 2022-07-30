import React from "react";

function NewComparision() {
  return (
    <div>
      <div
        className="px-10 py-10 rounded-3xl"
        style={{ backgroundColor: "#272635" }}>
        <h1 className="text-white text-2xl font-semibold mb-6">
          New Commparison
        </h1>
        <input
          type="text"
          placeholder="1. Brand"
          className="text-lg w-full px-6 py-2 rounded-full outline-none mb-3"
          style={{ backgroundColor: "#3a384a" }}
        />
        <p className="text-center text-gray-500">with</p>
        <input
          type="text"
          placeholder="2. Brand"
          className="text-lg w-full px-6 py-2 rounded-full outline-none mt-3"
          style={{ backgroundColor: "#3a384a" }}
        />
        <div className="text-center bg-white hover:bg-green-300 text-xl text-gray-500 hover:text-white mt-9 py-2 rounded-full ">
          <button type="submit" className="font-semibold tracking-wide" >
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewComparision;
