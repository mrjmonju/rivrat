import React from "react";

function MyNotifications() {
  return (
    <div>
      {/* While No Notification */}
      <div className="mt-28">
        <div className="bg-gray-300 w-60 mx-auto h-60 rounded-full flex justify-center items-center">
          <h1 className="text-center  text-8xl text-white">
            <i class="fa-solid fa-bell"></i>
          </h1>
        </div>
        <h1 className="text-center text-2xl font-semibold mt-8 text-gray-900">
          No Notificaton Yet
        </h1>
        <h1 className="text-center text-xl mt-8 mb-6 text-gray-400 font-semibold">
        After receiving notification, you can follow it here.
        </h1>
      </div>
    </div>
  );
}

export default MyNotifications;
