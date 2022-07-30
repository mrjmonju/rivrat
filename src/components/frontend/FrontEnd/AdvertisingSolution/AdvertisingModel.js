import React from "react";

function AdvertisingModel() {
  return (
    <div className="advertising-models-container mt-10">
      <div className=" container mx-auto">
        <h1 className="text-4xl font-bold">Advertising Models</h1>
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 lg:col-span-4 advertising-div">
            <img src="./images/model1.png" className="w-fit model-img" alt="" />
            <h3 className="text-2xl">Premium Advertising</h3>
          </div>
          <div className="col-span-12 lg:col-span-4 advertising-div">
            <img src="./images/model2.png" className="w-fit model-img" alt="" />
            <h3 className="text-2xl">Targeted Advertising</h3>
          </div>
          <div className="col-span-12 lg:col-span-4 advertising-div">
            <div className="model-3 model-img">
              <img src="./images/model3.png" className="w-fit h-100" alt="" />
            </div>
            <h3 className="text-2xl">Programmatic Advertising</h3>
          </div>
        </div>
        <p>For detailed information, you can review our Cookie Policy page.</p>
        <div className="advertising-btn-div">
          <button className="advertising-btn">Get Detailed Information</button>
        </div>
      </div>
    </div>
  );
}

export default AdvertisingModel;
