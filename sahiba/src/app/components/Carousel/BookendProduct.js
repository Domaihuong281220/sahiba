/** @format */

import Slider from "react-slick";

import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { BookendContext } from "../../pages/product-furniture-page/ProductFurniturePage";
import { useContext } from "react";
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

const BookendProduct = () => {
  const DataProductBookend = useContext(BookendContext);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {DataProductBookend.map(({ url, description, title, price }) => {
        return (
          <CardProduct
            url={url}
            description={description}
            title={title}
            price={price}
          />
        );
      })}
    </Slider>
  );
};

export default BookendProduct;
