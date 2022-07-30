import React from "react";
import { HashLink } from "react-router-hash-link";

function OnlineReputation() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 mb-10">
        <div className="lg:col-span-6 col-span-12 lg:px-0 px-3">
          <img
            className="object-cover"
            src="./images/online-reputation.svg"
            alt=""
          />
        </div>
        <div className="lg:col-span-6 col-span-12 lg:pl-20 md:pl-3 px-5">
          <div className="lg:pt-28">
            <h1 className="lg:text-5xl text-3xl text-gray-800 font-medium leading-relaxed mb-12">
              Boost your online reputation
            </h1>
            <h1 className="text-lg text-gray-500 font-medium leading-9 mb-10">
              A complaint from one customer may indicate that other customers
              are experiencing a similar problem. Thus, responding promptly to a
              complaint will help you to boost your online customer
              relationships.
            </h1>
            <div className="bg-green-400 text-xl text-white font-medium px-5 py-3 rounded-full lg:w-fit w-full text-center">
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                to={"/#work-us"}
                className=""
              >
                Become a Corporate Member
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineReputation;
