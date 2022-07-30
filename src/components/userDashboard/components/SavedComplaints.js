import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SavedComplaints() {
  return (
    <div className="">
      {/* While No Saved Items */}
      {/* <div className="mt-36">
        <div className="bg-gray-300 w-60 h-60  mx-auto flex items-center justify-center rounded-full">
          <h1 className="text-center  text-8xl text-white">
            <i class="fa-solid fa-bookmark"></i>
          </h1>
        </div>
        <h1 className="text-center text-5xl mt-8 text-gray-800">
          No Complaints Yet
        </h1>
        <h1 className="text-center text-xl mt-8 text-gray-300 font-semibold">
          You can follow the complaints you have recorded here.
        </h1>
      </div> */}

      {/* While Saved Items */}
      <div className="mt-12 md:pl-14 pl-4 md:pr-16 pr-6 ">
        <div className="lg:flex justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-600 mb-3">Saved 1</h1>

          <form action="" method="post">
            <div className="relative flex items-center text-gray-600">
              <SearchIcon className="w-5 h-5 absolute ml-4 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="Search Complaint"
                autoComplete="off"
                aria-label="Search talk"
                className=" w-full pr-3 pl-10  py-2 font-semibold placeholder-gray-400 text-gray-500 rounded-3xl border-solid border-2 outline-none ring-0 focus:ring-0"
                style={{ backgroundColor: "#f4f5f9" }}
              />
            </div>
          </form>
        </div>
        <hr className="mb-6" />
        <div className="bg-white px-4 py-6 md:rounded-3xl rounded-xl">
          <div className="flex">
            <h1 className="bg-blue-700 px-2 rounded-lg mr-3 my-auto">
              <i
                class="fa-solid fa-reply text-white"
                style={{ transform: "rotate(180deg)" }}
              ></i>
            </h1>
            <div className="flex ">
              <h1 className="mr-3">Brand Responded</h1>
              <h1 className="text-gray-400">. 17 hours ago</h1>
            </div>
          </div>
          <div className="md:pl-7 pl-4">
            <div className="flex align-middle mt-5">
              <img
                src="./images/dashboard/profile.png"
                alt=""
                className="w-10 mr-3 rounded-full"
              />
              <h1 className="font-bold pt-2 mr-3">Riyajul Kabir</h1>
              <h1 className="text-blue-600 pt-2 font-bold">
                <i
                  class="fa-solid fa-reply mr-2 text-blue-400"
                  style={{ transform: "rotate(180deg)" }}
                ></i>{" "}
                Kamil Koc
              </h1>
            </div>
            <h1 className="text-2xl font-bold tracking-wider text-gray-800 my-3">
              Disregard Behavior of Kamil Koç Personnel
            </h1>
            <h1 className="text-gray-500 mb-3">
              When we asked Kamil Koç personnel "when will we take a break" on
              the Ankara/Kayseri expedition, we got the answer "we don't take a
              break", "5-hour road needs a washbasin...
            </h1>
            <button className="underline text-green-500 font-bold mb-6">
              Read more
            </button>
            <hr />
            <h1 className="mt-4 mb-2 text-gray-600">
              <i class="fa-solid fa-bookmark">&nbsp;</i> remove
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedComplaints;
