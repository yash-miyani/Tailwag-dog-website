import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { ProtfolioData } from "../Data/Data";
import Button from "./Button";

const SlickSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#FBAF03",
          padding: "15px",
          color: "#f1f1f1",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          background: "#FBAF03",
          color: "#f1f1f1",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <div className=" container">
      <div className="row">
        <Slider {...settings}>
          {ProtfolioData.map((data, index) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 my-4 px-5 px-sm-4"
                key={index}
                data-aos="fade-up"
              >
                <div
                  className="overflow-hidden position-relative"
                  style={{
                    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.08)",
                    borderRadius: "8px 8px 0 0",
                  }}
                >
                  <span className="Protfolio-span">{data.year}</span>
                  <div className="overflow-hidden">
                    <img
                      src={data.img}
                      alt={data.title}
                      className=" img-fluid Protfolio-img "
                    />
                  </div>
                  <div className="p-4">
                    <h3 className=" fs-4 fw-bold">{data.title}</h3>
                    <p>{data.text}</p>
                    <div className="mt-3">
                      <Button>Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
