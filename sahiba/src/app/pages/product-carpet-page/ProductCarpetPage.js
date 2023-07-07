/** @format */

import React from "react";
//shop by type
import imageCard_1 from "../../../assets/image/shop-by-weaving-type/hand-tufted-min.webp";
import imageCard_2 from "../../../assets/image/shop-by-weaving-type/hand-woven-min.webp";
import imageCard_3 from "../../../assets/image/shop-by-weaving-type/hand-knotted-min.webp";
import imageCard_4 from "../../../assets/image/shop-by-weaving-type/flat-weave-min.webp";

//Shop by style
import imageCard_5 from "../../../assets/image/shop-by-style/classic.jpg";
import imageCard_6 from "../../../assets/image/shop-by-style/traditional.jpg";
import imageCard_7 from "../../../assets/image/shop-by-style/transitional.jpg";
import imageCard_8 from "../../../assets/image/shop-by-style/geomatric.jpg";
import imageCard_9 from "../../../assets/image/shop-by-style/modern.jpg";
import imageCard_10 from "../../../assets/image/shop-by-style/solid.jpg";
import imageCard_11 from "../../../assets/image/shop-by-style/abstract.jpg";
import imageCard_12 from "../../../assets/image/shop-by-style/natural.jpg";
import imageCard_13 from "../../../assets/image/shop-by-style/kilim.jpg";
import imageCard_14 from "../../../assets/image/shop-by-style/texture.jpg";

import imagePayment from "../../../assets/image/payments/secure-payment-min.webp";


import imageHandmade from "../../../assets/image/payments/100-handmade-min.webp";
import imageFreeShipping from "../../../assets/image/payments/shipping-min.webp";
import imageDesign from "../../../assets/image/payments/1000+design-min.webp";
import CardImage from "../../components/CardImage/CardImage";
import CarouselBySize from "../../components/Carousel/CarouselBySize";
import CarouselByColor from "../../components/Carousel/CarouselByColor";

import Carousel from "../../components/Carousel/Carousel";

const cardDataShopByWeavingType = [
  {
    title: "Hand Tufted Rugs",
    url: imageCard_1,
  },
  {
    title: "Hand Woven Rugs",
    url: imageCard_2,
  },
  {
    title: "Hand Knotted Rugs",
    url: imageCard_3,
  },
  {
    title: "Flat Weave Rugs",
    url: imageCard_4,
  },
];

const cardDataShopByStyle = [
  {
    title: "Classic",
    url: imageCard_5,
  },
  {
    title: "Traditional",
    url: imageCard_6,
  },
  {
    title: "Transitional",
    url: imageCard_7,
  },
  {
    title: "Geometric",
    url: imageCard_8,
  },
  {
    title: "Modern",
    url: imageCard_9,
  },
  {
    title: "Soild",
    url: imageCard_10,
  },
  {
    title: "Abstract",
    url: imageCard_11,
  },
  {
    title: "Natural",
    url: imageCard_12,
  },
  {
    title: "Kilim",
    url: imageCard_13,
  },
  {
    title: "Texture",
    url: imageCard_14,
  },
];
const ProductCarpetPage = () => {
  return (
    <div>
      <Carousel autoSlide={true} />
      <div className=" grid grid-cols-4 w-full h-48 ">
        <div className="flex flex-col items-center justify-center">
          <img className="object-fit w-24 h-24" src={imagePayment}></img>
          <p>Secure Payment</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="object-fit w-24 h-24" src={imageHandmade}></img>
          <p>100% Handmade</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="object-fit w-24 h-24" src={imageFreeShipping}></img>
          <p>Free Shiping</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="object-fit w-24 h-24" src={imageDesign}></img>
          <p>Design</p>
        </div>
      </div>
      {/* start shop by weaving type */}
      <div className="w-full py-4">
        <p className=" text-3xl font-medium pb-10 font-mei">
          Shop By Weaving Type
        </p>
        <div className="flex justify-center  ">
          {cardDataShopByWeavingType.map(({ title, url }) => {
            return <CardImage title={title} url={url} />;
          })}
        </div>
      </div>

      {/* start shop by style */}
      <div className="w-full py-4 ">
        <p className=" text-3xl font-medium pb-10 font-mei">Shop By Style</p>
        <div className="flex justify-center flex-wrap gap-x-3 gap-y-6  ">
          {cardDataShopByStyle.map(({ title, url }) => {
            return <CardImage title={title} url={url} />;
          })}
        </div>
      </div>

      <div className="py-12 px-12 w-full h-[550px] ">
        <p className="font-mei text-3xl pb-4">Shop By Size</p>
        <CarouselBySize />
      </div>

      <div className="py-12 px-12 w-full h-[300px] ">
        <p className="font-mei text-3xl pb-4">Shop By Color</p>
        <CarouselByColor />
      </div>

      <div className=" h-auto w-full">
        <p className="text-3xl ">New Canyan Collection</p>
      </div>
    </div>
  );
};

export default ProductCarpetPage;
