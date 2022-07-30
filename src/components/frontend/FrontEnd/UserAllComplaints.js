import React, { Fragment, useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
function UserAllComplaints() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sikayetlerData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <Navbar />
      {posts.slice(0, 1).map((post) => (
        <div className="container mx-auto">
          <div className="flex items-center mb-14 pl-5 sm:pl-0">
            <img
              src={post.img}
              alt=""
              className="h-32 w-32 rounded-full mr-4"
            />
            <h1 className="text-slate-700 text-2xl font-semibold">
              {post.name}
            </h1>
          </div>

          <div>
            <Tab.Group>
              <Tab.List className="px-3 sm:px-0">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "bg-blue-500 border border-gray-200 rounded-full px-7 py-2 text-lg text-white font-bold mr-8 outline-none mb-5"
                          : "border border-gray-200 rounded-full px-7 py-2 text-lg text-gray-400 font-bold mr-8 mb-5"
                      }>
                      Complaints(one)
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "bg-blue-500 border border-gray-200 rounded-full px-7 py-2 text-lg text-white font-bold mr-8 outline-none mb-5"
                          : "border border-gray-200 rounded-full px-7 py-2 text-lg text-gray-400 font-bold mr-8 mb-5"
                      }>
                      Complaints Wrote Comments(0)
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "bg-blue-500 border border-gray-200 rounded-full px-7 py-2 text-lg text-white font-bold mr-8 outline-none mb-5"
                          : "border border-gray-200 rounded-full px-7 py-2 text-lg text-gray-400 font-bold mr-8 mb-5"
                      }>
                      Supported Complaints(0)
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-10 mb-24">
                <Tab.Panel>
                  <div className="w-11/12 mx-auto md:mx-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          src={post.img}
                          alt=""
                          className="h-16 w-16 rounded-full mr-4 border"
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h1 className="mr-3 text-lg text-slate-700 font-bold">
                            {post.name}
                          </h1>
                          <img
                            src="./images/reply.svg"
                            className="mr-1"
                            alt=""
                          />
                          <h1 className="text-blue-600 font-semibold text-lg">
                            {post.from} <i class="fa-solid fa-circle-check"></i>
                          </h1>
                        </div>
                        <p className="text-gray-400 font-semibold tracking-wider">
                          {post.time}
                        </p>
                      </div>
                    </div>
                    <h1 className="text-2xl text-slate-800 font-bold tracking-wider my-5">
                      {post.title}
                    </h1>
                    <h5 className="text-lg text-gray-600 font-semibold tracking-wider mb-3 pr-10">
                      {post.description.slice(0, 260)}
                      <span>{post.description.length > 250 ? "..." : ""}</span>
                    </h5>
                    {post.description.length > 150 ? (
                      <a
                        href="#readmore"
                        className="text-lg text-green-500 font-semibold tracking-wider underline ">
                        Read more
                      </a>
                    ) : (
                      ""
                    )}
                    <hr className="mt-6" />
                    <div className="flex justify-between lg:w-4/12 md:w-3/4 mt-5">
                      <h1 className="text-gray-400 font-bold tracking-wider">
                        <i class="fa-solid fa-thumbs-up"></i> Support
                      </h1>
                      <h1 className="text-gray-400 font-bold tracking-wider">
                        <i class="fa-solid fa-comment"></i> Comment
                      </h1>
                      <h1 className="text-gray-400 font-bold tracking-wider">
                        <i class="fa-solid fa-bookmark"></i> Save
                      </h1>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-lg">No complaints were found matching your query.</h1>
                </Tab.Panel>
                <Tab.Panel>
                <h1 className="text-lg">No complaints were found matching your query.</h1>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
}

export default UserAllComplaints;
