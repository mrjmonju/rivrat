import React from "react";

function YourSuccess() {
  return (
    <div className="my-20 container mx-auto">
      <div className="grid grid-cols-12 px-4 md:px-0">
        <div className="lg:col-span-6 col-span-12">
          <img src="./images/success.jpg" className="h-full" alt="" />
        </div>
        <div className="lg:col-span-6 col-span-12 lg:pl-16 mt-14">
          <h1 className="text-4xl text-zinc-700 font-semibold tracking-widest mb-8">
            Everyone Sees Your Success
          </h1>
          <h1 className="text-xl text-zinc-700 font-semibold tracking-wide mb-10">
            The award is added to the brand's scorecard page in RivRat as a
            badge of success.
          </h1>
          <h1 className="text-gray-500 text-lg font-semibold tracking-wide ">
            The award you receive in RivRat does not stay on the shelf, it is
            displayed in the{" "}
            <span className="text-red-600 text-xl font-bold">Achievements</span>{" "}
            area of ​​your brand scorecard page. You share the reward with your
            customers and site visitors who visit the page.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default YourSuccess;
