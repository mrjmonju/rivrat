import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function SliderNegative() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: -1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 1,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: -1,
            },
          },
          {
            breakpoint: 985,
            settings: {
              slidesToShow: 2,
              slidesToScroll: -1
            }
          }
        ],
      };
      const [datas, setData] = useState([]);
      useEffect(() => {
        fetch("http://localhost:3000/slider.json")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
      console.log(datas);
    return (
        <div className="slider-negative-container">
      <Slider {...settings}>
        {datas.map((dt) => (
          <div>
            <div className="single-card-slider h-40">
              <div className="flex mb-3">
                <img src={dt.img} className="slider-person-img mr-3" alt="" />
                <div>
                  <div className="flex">
                    <h4 className="mr-3">{dt.name}</h4>
                    <div className="flex items-start">
                      <img src="./images/reply.svg" className="pt-2 pr-2" alt="" />
                      <span>{dt.from}</span>
                    </div>
                  </div>
                  <p>{dt.time}</p>
                </div>
              </div>
              <h5>{dt.title}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
}

export default SliderNegative;