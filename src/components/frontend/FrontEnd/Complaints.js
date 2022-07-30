import React from "react";
import Filter from "./Complaits/Filter";
import SingleComplaints from "./Complaits/SingleComplaints";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function Complaints() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-3 my-12 container mx-auto">
        <div className="lg:col-span-8 col-span-12 lg:order-1 order-2 pr-6">
          <div className="md:flex items-center mb-10">
            <h1 className="text-3xl md:text-4xl text-gray-400 font-bold tracking-wider mr-3">
              All Complaints
            </h1>
            <h5 className="text-xl text-gray-400 mt">
              <span className="">|</span>{" "}
              <span className="md:ml-7">9.012.094 complaints</span>
            </h5>
          </div>
          <hr />
          <SingleComplaints />
        </div>
        <div className="lg:col-span-4 col-span-12 lg:order-2 order-1 mb-10">
          <Filter />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Complaints;
