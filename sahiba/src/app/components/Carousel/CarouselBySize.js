/** @format */

import Slider from "react-slick";
import img1 from "../../../assets/image/shop-by-size/1_4x6_5x8-min.webp";
import img2 from "../../../assets/image/shop-by-size/2_6x9X8X10-min.webp";
import img3 from "../../../assets/image/shop-by-size/3_9x12X10X14-min.webp";
import img4 from "../../../assets/image/shop-by-size/4_2x4-min.webp";
import img5 from "../../../assets/image/shop-by-size/5_9X12_10X14-min.webp";
import React from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
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
        background: "black",
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

const CarouselBySize = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="flex items-center">
      <div className="px-4">
        <img src={img1} className="object-fit h-full w-full"></img>
        <p className="font-mar text-lg">2x3 ft</p>
      </div>
      <div className="px-4">
        <img src={img2} className="object-fit h-full w-full"></img>
        <p className="font-mar text-lg">4x6 ft</p>
      </div>
      <div className="px-4">
        <img src={img3} className="object-fit h-full w-full"></img>
        <p className="font-mar text-lg">5x8 ft</p>
      </div>
      <div className="px-4">
        <img src={img4} className="object-fit h-full w-full"></img>
        <p className="font-mar text-lg">8x10 ft</p>
      </div>
      <div className="px-4">
        <img src={img5} className="object-fit h-full w-full"></img>
        <p className="font-mar text-lg">9x12 ft</p>
      </div>
    </Slider>
  );
};

export default CarouselBySize;
