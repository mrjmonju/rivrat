import React from "react";
import Comparision from "./CompareBrands/Comparision";
import PopularCompare from "./CompareBrands/PopularCompare";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function CompareBrands() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="mt-6 text-sm text-gray-400 font-semibold">
          Home Page &nbsp; &gt; &nbsp; Compare Brands{" "}
        </h1>
        <Comparision />
        <PopularCompare />
      </div>
      <Footer />
    </>
  );
}

export default CompareBrands;
