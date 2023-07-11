/** @format */

import Slider from "react-slick";
import img1 from "../../../assets/image/slide-homedecor/Wall-Decor-11.webp";
import img2 from "../../../assets/image/slide-homedecor/Wall-Decor-26.webp";
import img3 from "../../../assets/image/slide-homedecor/Wall-Decor-29.webp";
import img4 from "../../../assets/image/slide-homedecor/Wall-Decor-32.webp";
import React from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        background: "white",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        borderRadius: "50px",
        alignItems: "center",
        right: "-30px",
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
        background: "white",
        height: "30px",
        width: "30px",
        borderRadius: "50px",
        left: "-30px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}
const DataSlides = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
  {
    url: img4,
  },
];
const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="flex items-center" ider>
      {DataSlides.map(({ url }) => {
        return (
          <div className="">
            <img src={url} className="object-fit h-full w-full"></img>
          </div>
        );
      })}
    </Slider>
  );
};

export default CarouselSlider;
