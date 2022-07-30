import React, { useEffect, useState } from "react";

function PopularCompare() {
  const [popularItems, setPopularItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/output.json")
      .then((res) => res.json())
      .then((data) => setPopularItem(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl pl-14 text-gray-400 font-semibold tracking-wider mb-6">
        Popular Comparison
      </h1>
      <div className=" grid grid-cols-12 popular-card-container">
        <div className="lg:col-span-9 col-span-12 ">
          <div className="grid grid-cols-12 my-5 gap-6">
            <div className="lg:col-span-6 col-span-12  single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(0, 2).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 md:col-span-2 col-span-4 popular-item-img-div">
                      <div
                        style={{
                          backgroundColor: "#fff",
                          padding: "0px 5px",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src={populars.img}
                          className="w-full popular-item-img"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(2, 4).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 md:col-span-2 col-span-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="w-full popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12  single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(3, 5).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 col-span-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="w-full popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(4, 6).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 col-span-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="w-full popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(5, 7).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 col-span-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="w-full popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12  single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(6, 8).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 col-span-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="w-full popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(7, 9).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 col-span-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="w-full popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 single-popular-card-div">
              <div className="single-popular-card">
                {popularItems.slice(0, 2).map((populars) => (
                  <div className="grid grid-cols-12 pb-4 popular-item-div">
                    <div className="lg:col-span-4 col-span-4 popular-item-img-div">
                      <img
                        src={populars.img}
                        className="w-full popular-item-img"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 col-span-8 pl-4 my-auto">
                      <h5>{populars.name}</h5>
                      <div className="flex ">
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="pl-3 popular-item-p">2.3</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="submit" id="popular-btn">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCompare;
