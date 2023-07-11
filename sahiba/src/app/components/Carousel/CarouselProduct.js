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
const DataProduct = [
  {
    url: Imagecollection1,
    title: "Hand Tufted Wool & Vicose",
    price: "1800$",
    description: "2x4 ft, 4x6 ft,5x8 ft, 8x10 ft",
  },
  {
    url: Imagecollection2,
    title: "Hand Tufted Wool & Vicose",
    price: "1800$",
    description: "2x4 ft, 4x6 ft,5x8 ft, 8x10 ft",
  },
  {
    url: Imagecollection3,
    title: "Hand Tufted Wool & Vicose",
    price: "1800$ ",
    description: "2x4 ft, 4x6 ft,5x8 ft, 8x10 ft",
  },
  {
    url: Imagecollection4,
    title: "Hand Tufted Wool & Vicose",
    price: "1800$",
    description: "2x4 ft, 4x6 ft,5x8 ft, 8x10 ft",
  },
];
const CarouselProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="flex items-center" ider>
      {DataSize.map(({ url, title, price, description }) => {
        return <CardProduct></CardProduct>;
      })}
    </Slider>
  );
};

export default CarouselProduct;
