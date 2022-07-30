import React from "react";

import CircularProgressBar from "./subComponents/CircularProgressBar";

function AdminDashboard() {
  const dashboardValues = [
    {
      key: 1,
      number: 37,
      name: "Total Companies",
      color: "#1E9FF2",
    },
    {
      key: 2,
      number: 8,
      name: "Total Approved Comppanies",
      color: "#28C76F",
    },
    {
      key: 3,
      number: 29,
      name: "Total Pending Companies",
      color: "#FF9F43",
    },
    {
      key: 4,
      number: 29,
      name: "Total Rejected Companies",
      color: "#FF9F43",
    },
    {
      key: 5,
      number: 98,
      name: "Total Users",
      color: "#7367F0",
    },
    {
      key: 6,
      number: 98,
      name: "Total Active Users",
      color: "#4CAF50",
    },
    {
      key: 7,
      number: 0,
      name: "Total Email Unverified Users",
      color: "#F44336",
    },
    {
      key: 8,
      number: 0,
      name: "Total SMS Unverified Users",
      color: "#EA5455",
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold py-7">Dashboard</h2>
        <hr className="w-full h-1 mb-6 bg-slate-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
          {dashboardValues.map((values) => (
            <div
              style={{ backgroundColor: values.color }}
              className="rounded-lg py-5 px-4 text-white"
            >
              <h2 className="text-2xl font-semibold">{values.number}</h2>
              <p className="my-2">{values.name}</p>
              <button className="text-black bg-white px-2 py-1 rounded">
                View All
              </button>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-14 gap-x-14 my-10">
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressBar title="Login By Browser" value="66" />
          </div>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressBar title="Login By OS" value="20" />
          </div>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressBar title="Login By Country" value="88" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
