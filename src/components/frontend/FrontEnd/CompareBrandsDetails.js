import React from "react";
import NewComparision from "./ComplaintsDetails/NewComparision";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import CompareComplaints from "./ProductCompare/CompareComplaints";
import CustomerHappiness from "./ProductCompare/CustomerHappiness";
import Dissatisfaction from "./ProductCompare/Dissatisfaction";
import OverView from "./ProductCompare/OverView";
import PopOver from "./ProductCompare/PopOver";
import Satisfaction from "./ProductCompare/Satisfaction";
function CompareBrandsDetails() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="mb-16 pl-3">
          <h1 className="text-sm text-gray-400 mt-4">
            Home Page &nbsp; &gt; &nbsp; Compare &nbsp; &gt; &nbsp; Samsung Vs
            Oppo
          </h1>
          <h1 className="text-4xl mt-16">
            <span className="text-blue-500 font-bold mr-2">Samsung</span> vs{" "}
            <span className="text-blue-500 font-bold ml-2">Oppo</span>
          </h1>
        </div>
        <hr />

        <div className="grid grid-cols-12 mt-16 gap-x-4 px-3 sm:px-0">
          <div className="lg:col-span-8 col-span-12">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-2 col-span-12">
                <h1 className="text-slate-700 text-2xl font-semibold mb-10">
                  Brands
                </h1>
              </div>
              <div className="lg:col-span-5 md:col-span-6 col-span-12 px-3 mb-10 lg:mb-0">
                <div
                  className="border-2 border-gray-200 rounded-3xl"
                  style={{ backgroundColor: " " }}
                >
                  <div
                    className="py-8 rounded-t-3xl"
                    style={{ backgroundColor: "#f4f5f9" }}
                  >
                    <div className="w-1/2 bg-white mx-auto">
                      <img
                        src="./images/samsungLogo.jpg"
                        alt=""
                        className="h-20 w-20 mx-auto"
                      />
                    </div>
                  </div>
                  <div className="text-center pt-5 pb-10">
                    <h1 className="text-xl text-slate-700 font-semibold mb-3">
                      Samsung{" "}
                      <i className="fa-solid fa-circle-check text-base text-blue-600"></i>
                    </h1>
                    <h1 className="flex items-center justify-center">
                      <h1 className="mr-2 relative">
                        {" "}
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </h1>
                      <p className="text-xl text-gray-400 font-bold mr-1">
                        {" "}
                        2.2
                      </p>
                      <PopOver />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 md:col-span-6 col-span-12 px-3">
                <div
                  className="border-2 border-gray-200 rounded-3xl"
                  style={{ backgroundColor: " " }}
                >
                  <div
                    className="py-8 rounded-t-3xl"
                    style={{ backgroundColor: "#f4f5f9" }}
                  >
                    <div className="w-1/2 bg-white mx-auto">
                      <img
                        src="./images/oppoLogo.jpg"
                        alt=""
                        className="h-20 w-20 mx-auto"
                      />
                    </div>
                  </div>
                  <div className="text-center pt-5 pb-10">
                    <h1 className="text-xl text-slate-700 font-semibold mb-3">
                      Samsung{" "}
                      <i className="fa-solid fa-circle-check text-base text-blue-600"></i>
                    </h1>
                    <h1 className="flex items-center justify-center">
                      <h1 className="mr-2 relative">
                        {" "}
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </h1>
                      <p className="text-xl text-gray-400 font-bold mr-1">
                        {" "}
                        2.2
                      </p>
                      <PopOver />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <OverView />
            <CustomerHappiness />
            <CompareComplaints />
            <Satisfaction />
            <Dissatisfaction />
            <div>
              <div className="my-16 ">
                <h3 className="my-5 text-slate-600 text-2xl font-bold tracking-wider">
                  Which is you choice?
                </h3>
                <div className="grid grid-cols-12 ">
                  <div className="lg:col-span-5 md:col-span-4 col-span-12 px-3">
                    <div className="flex items-center justify-between border border-gray-300 py-4 px-5 mb-5 rounded-3xl">
                      <input type="checkbox" name="" id="compare-product-1" />
                      <img
                        src="./images/samsungLogo.jpg"
                        className="h-12 w-20"
                        alt=""
                      />
                      <h5>Samsung</h5>
                    </div>
                  </div>
                  <div className="lg:col-span-5 md:col-span-4 col-span-12 px-3">
                    <div className="flex items-center justify-between border border-gray-300 py-4 px-5 mb-5 rounded-3xl">
                      <input type="checkbox" name="" id="compare-product-1" />
                      <img
                        src="./images/oppoLogo.jpg"
                        className="h-12 w-20"
                        alt=""
                      />
                      <h5>Oppo</h5>
                    </div>
                  </div>
                  <div className="lg:col-span-2 md:col-span-2 col-span-12 flex items-center justify-center">
                    <button className="w-full border-none bg-green-400 text-white text-xl rounded-full mb-10 py-3">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex justify-between border px-10 py-8 mb-10 rounded-full">
              <h1 className="text-slate-700 font-bold">Share</h1>
              <h1 className="text- bg-slate-700 hover:bg-slate-400 cursor-pointer text-white px-4 py-1 rounded-full">
                <i class="fa-brands fa-twitter "></i>
              </h1>
              <h1 className="text- bg-slate-700 hover:bg-slate-400 cursor-pointer text-white px-4 py-1 rounded-full">
                <i class="fa-brands fa-facebook"></i>
              </h1>
              <h1 className="text- bg-slate-700 hover:bg-slate-400 cursor-pointer text-white px-4 py-1 rounded-full">
                <i class="fa-brands fa-linkedin"></i>
              </h1>
              <h1 className="text- bg-slate-700 hover:bg-slate-400 cursor-pointer text-white px-4 py-1 rounded-full">
                <i class="fa-solid fa-link     "></i>
              </h1>
            </div>
            <div className="mb-10">
              <NewComparision />
            </div>
          </div>
        </div>
        <h1 className="text-gray-400 text-xl mb-10 px-3">
          Every day, hundreds of thousands of people come to complain before
          shopping. Here he decides which brand to choose. Compare the
          performances of brands in customer satisfaction and complaint
          management , and make your decision easily.
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default CompareBrandsDetails;
