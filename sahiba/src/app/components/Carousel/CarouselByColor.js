/** @format */

import Slider from "react-slick";

import React from "react";
import img1 from "../../../assets/image/shop-by-color/beige.jpg";
import img2 from "../../../assets/image/shop-by-color/blue-rugs.jpg";
import img3 from "../../../assets/image/shop-by-color/black-rugs.jpg";
import img4 from "../../../assets/image/shop-by-color/camel.jpg";
import img6 from "../../../assets/image/shop-by-color/gold-rugs.jpg";
import img7 from "../../../assets/image/shop-by-color/graphite-rugs.jpg";
import img8 from "../../../assets/image/shop-by-color/green-rugs.jpg";
import img9 from "../../../assets/image/shop-by-color/grey-rugs.jpg";
import img10 from "../../../assets/image/shop-by-color/ivory-rugs.jpg";
import img11 from "../../../assets/image/shop-by-color/khaki.jpg";
import img12 from "../../../assets/image/shop-by-color/multicolor-rugs.gif";
import img13 from "../../../assets/image/shop-by-color/orange-rugs.jpg";
import img14 from "../../../assets/image/shop-by-color/pink-rugs.jpg";
import img15 from "../../../assets/image/shop-by-color/purple-rugs.jpg";
import img16 from "../../../assets/image/shop-by-color/red-rugs.jpg";
import img17 from "../../../assets/image/shop-by-color/yellow-rugs.jpg";

function SampleNextArrow(props) {
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

const dataColor = [
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
  {
    url: img4,
  },
  {
    url: img6,
  },
  {
    url: img7,
  },
  {
    url: img8,
  },
  {
    url: img9,
  },
  {
    url: img10,
  },
  {
    url: img11,
  },
  {
    url: img12,
  },
  {
    url: img13,
  },
  {
    url: img14,
  },
  {
    url: img15,
  },
  {
    url: img16,
  },
  {
    url: img17,
  },
];

const CarouselByColor = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {dataColor.map(({ url }) => {
        return (
          <div className="px-4 w-[90px] h-[90px] ">
            <img src={url} className="object-fit h-[90px] w-[90px]"></img>
          </div>
        );
      })}
    </Slider>
  );
};

export default CarouselByColor;
