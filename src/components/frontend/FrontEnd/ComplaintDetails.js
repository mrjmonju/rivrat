import React from "react";
import NewComparision from "./ComplaintsDetails/NewComparision";
import StatusComplaints from "./ComplaintsDetails/StatusComplaints";
import SingleComplaints from "./Complaits/SingleComplaints";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function ComplaintDetails() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <p className="my-3 mb-5 text-sm text-gray-400 ml-10">
          Home Page &gt; Complaint &gt; Complaints Details
        </p>
        <div className="grid grid-cols-12 mb-5 px-3 sm:px-0">
          <div className="lg:col-span-8 col-span-12">
            <div className="md:ml-24 ml-14 mt-9">
              <h1 className="text-4xl text-slate-700 font-semibold">
                Akbank Chip Did Not Deposit Money
              </h1>
              <p className="text-gray-400 text-xl font-medium mt-4">6 views</p>
            </div>
            <div>
              <div className="flex items-center mt-12">
                <img
                  src="https://files.sikayetvar.com/pp/default/o_150x150.svg"
                  alt=""
                  className="h-16 w-16 rounded-full mr-6"
                />
                <h5 className="text-2xl font-semibold text-slate-700 mr-3">
                  Onur
                </h5>
                <p className="text-gray-400 pt-2">22 minutes ago</p>
              </div>
              <div className="border-l-2 pl-16 py-10 pr-10 ml-7 my-2">
                <img
                  src="https://files.sikayetvar.com/complaint/2112/21129938/akbank-chip-para-yatirmadi-1_715x350.jpg"
                  alt=""
                  className="w-fit mb-8"
                />
                <h4 className="text-gray-500 text-2xl ">
                  Akbank did not deposit 200 TL worth of chip money given to two
                  automatic payment orders . This campaign was sent to me as a
                  message on April 19, then I made two automatic payment orders,
                  and although 20 days passed, I was not credited with Chip
                  Money, although I called customer service several times , they
                  dismissed me saying that we opened a registration , we will
                  return, and I was not returned in any way. It seems that
                  Akbank does not keep every promise it makes.
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <img
                  src="https://files.sikayetvar.com/lg/cmp/80/80.svg?1522650125"
                  alt=""
                  className="h-16 w-16 border rounded-full mr-6"
                />
                <h5 className="text-2xl font-semibold text-slate-700 mr-3">Akbank</h5>
                <p className="text-gray-400 pt-2">21 minutes ago </p>
              </div>
              <div className="bg-gray-300 sm:p-10 px-5 py-6 sm:ml-20  ml-10 mt-6 mb-10 rounded-3xl ">
                <p className="text-xl text-slate-600 font-medium">
                  Dear Customer, Your notification has been taken into
                  consideration and detailed information about the result will
                  be sent to you from your contact information registered in our
                  bank. In case of a change in your contact information
                  registered in our bank, you can update your information via
                  our 444 25 25 Telephone Branch, Branches or Akbank Direkt
                  Internet. You can use the "Contact Us" form on our website
                  www.akbank.com for all your complaints, suggestions and
                  requests about our bank's products and services. Best Regards
                  Akbank
                </p>
              </div>
            </div>
            <div className="my-5 sm:block hidden">
          <div className="flex items-center border-t border-l border-r p-10 rounded-tl-3xl rounded-tr-3xl">
            <img src="https://cdn.sikayetvar.com/public/images/avatar.png" className="h-12 w-12 mr-5" alt="" />
            <p className="text-xl text-gray-400">
              <span className="font-bold hover:text-blue-500 hover:cursor-pointer">Login</span> or <span className="font-bold hover:text-blue-500 hover:cursor-pointer">Register</span> to post a comment .
            </p>
          </div>
          <div className="px-10 py-6 bg-gray-200 flex justify-between items-center rounded-bl-3xl rounded-br-3xl">
              <label htmlFor="inputTag" className="cursor-pointer">
              <p className="text-gray-500 cursor-pointer"><i class="fa-solid fa-file-circle-plus text-xl"></i> Add
              Invoice/Photo/Video/Document</p>
            <input type="file" id="inputTag" className="hidden"/>
              </label>
            <button className="text-white bg-green-300 px-6 py-3 rounded-full">
              <p className="font-bold"><i class="fa-solid fa-comment"></i> Comment</p>
            </button>
          </div>
        </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            {/* Status Complaints */}
            <StatusComplaints />
            {/*^^^^^^^^^new Comparison ^^^^^^^^^^^^  */}
            <NewComparision />
          </div>
        </div>
        {/* login or register section */}
        
        {/* ^^^^^^^^^^^^^^^^^^^^ Similer Complaints ^^^^^^^^^^^^^^^^^ */}
        <div>
          <h1 className="text-3xl text-gray-300 font-bold">Similar Complaints</h1>
        </div>
        <div className="px-3 sm:px-0">
        <SingleComplaints />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ComplaintDetails;
