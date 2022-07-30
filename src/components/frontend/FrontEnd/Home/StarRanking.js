import React, { useEffect, useState } from "react";
// import Item from "./Item";

function StarRanking() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("output.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="yiliz-container">
      <h1>Star Ranking</h1>
      <div className="select-input-container">
        <select class="form-select select-input-form" id="inputGroupSelect02">
          <option selected>Choose</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div className="check-container">
          <div class="form-check check-div">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Last 1 Year
            </label>
          </div>

          <div class="form-check check-div">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              All Times
            </label>
          </div>
        </div>
      </div>
      <p>
        This ranking is made only according to the complainant satisfaction
        scores, regardless of the size <br /> of the companies, the number of
        complaints and the complaint rates.
      </p>
      <div className="item-div">
        {items.map((item) => (
          <div className="item-container" key={item.id}>
            <div className="grid grid-cols-12">
              <div className="lg:col-span-1 col-span-1  position-div">
                <div className="position-bg">
                  <img src="./images/rank-up.svg" alt="" />
                </div>
              </div>
              <div className="lg:col-span-2 col-span-3 img-container">
                <img src={item.img} className="item-img" alt="" />
              </div>
              <div className="lg:col-span-9 col-span-8  item-details">
                <div className="item-owner-details">
                  <h5>
                    {item.id}. {item.name}
                  </h5>
                  <p>{item.subName}</p>
                </div>
                <div className="flex">
                  <div className="pr-2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <h6>{item.rating}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>Show More</button>
    </div>
  );
}

export default StarRanking;
