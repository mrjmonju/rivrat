import React from "react";
import { Link } from "react-router-dom";

function StudyTogether() {
  return (
    <div className="bg-indigo-500 py-24 px-5">
      <h1 className="sm:text-5xl text-4xl font-medium text-center text-white tracking-wide mb-16">
        Your Brand : Improving Customer Experience
      </h1>
      <h1 className="text-center text-white sm:text-xl text-lg font-medium tracking-wide mb-12">
        Your most unhappy customers are your greatest source of learning. By
        taking the customer through a professionally
        <br /> managed process, from complaint to resolution, customer
        experience can be.
        <br /> By analyzing the data such a system can capture, you can identify
        improvements for your product
        <br /> or services and therefore improve the experience for future
        customers.
      </h1>
      <div className="lg:w-1/5 md:w-2/4 sm:w-2/4 text-center mx-auto bg-white hover:bg-slate-900 hover:text-white rounded-full">
        <button className="text-xl font-medium py-3">
          <Link to="/corporate-membership">Let's Study Together</Link>
        </button>
      </div>
    </div>
  );
}

export default StudyTogether;
