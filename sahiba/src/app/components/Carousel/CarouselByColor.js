/** @format */

import Slider from "react-slick";

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

const CarouselByColor = () => {
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
    <Slider {...settings}>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
      <div className="px-4">
        <img src={img1} className="object-fit h-[90px] w-[90px]"></img>
      </div>
    </Slider>
  );
};

export default CarouselByColor;
