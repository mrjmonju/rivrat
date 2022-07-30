import React from "react";
import SliderNegative from "../SubComponent/SliderNegative";
import SliderPositive from "../SubComponent/SliderPositive";

function Slider() {
  return (
    <div className="mb-24 container mx-auto">
      <h1 className="text-4xl text-gray-400 font-bold mb-16">
        Today’s Complaints
      </h1>
      <SliderNegative />
      <SliderPositive />
    </div>
  );
}

export default Slider;
