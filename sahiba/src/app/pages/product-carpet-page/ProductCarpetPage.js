/** @format */

import React from "react";
import { useState } from "react";
import CarouselBySize from "../../components/Carousel/CarouselBySize";
import CarouselByColor from "../../components/Carousel/CarouselByColor";
import CarouselCarpet from "../../components/Carousel/CarouselCarpet";
import CardProduct from "../../components/CardProduct/CardProduct";
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
import imagePromot from "../../../assets/image/free-shipping-slider.jpg";

//Shop Banner

import imagePayment from "../../../assets/image/payments/secure-payment-min.webp";
import imageHandmade from "../../../assets/image/payments/100-handmade-min.webp";
import imageFreeShipping from "../../../assets/image/payments/shipping-min.webp";
import imageDesign from "../../../assets/image/payments/1000+design-min.webp";
import CardImage from "../../components/CardImage/CardImage";

//Shop Collection
import Imagecollection from "../../../assets/image/canyan-collection/16757461481667293156.jpg";
import Imagecollection1 from "../../../assets/image/canyan-collection/CAN20508_MAIN.jpg";
import Imagecollection2 from "../../../assets/image/canyan-collection/CAN30508_MAIN.jpg";
import Imagecollection3 from "../../../assets/image/canyan-collection/CAN40508_MAIN.jpg";
import Imagecollection4 from "../../../assets/image/canyan-collection/CAN50508_MAIN.jpg";

// How you are
import videowhoyouare from "../../../assets/image/who-we-are.mp4";

// Image store
import Imagestore1 from "../../../assets/image/store/saraswati-global-jaipur.jpg";
import Imagestore2 from "../../../assets/image/store/saraswati-global-newdelhi.jpg";

import AcconrdionComponent from "../../components/Acconrdion/AcconrdionComponent";

const ProductCarpetPage = () => {
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

  const CardProductColection = [
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
  const CardProductFilter = [
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
  const [list, setList] = useState([
    {
      filterType: "Color?",
      properties: [
        { title: "red" },
        { title: "yelow" },
        { title: "blue" },
        { title: "black" },
        { title: "pink" },
        { title: "red" },
        { title: "yelow" },
        { title: "blue" },
        { title: "black" },
        { title: "pink" },
        { title: "red" },
        { title: "yelow" },
        { title: "blue" },
        { title: "black" },
        { title: "pink" },
        { title: "red" },
        { title: "yelow" },
        { title: "blue" },
        { title: "black" },
        { title: "pink" },
        { title: "pink" },
        { title: "pink" },
        { title: "pink" },
      ],
    },
    {
      filterType: "Size",
      properties: [{ title: "s" }, { title: "xl" }, { title: "m" }],
    },
    {
      filterType: "Price",
      properties: [
        { title: "1000$-2000$" },
        { title: "2000$-4000$" },
        { title: "4000$-7000$" },
      ],
    },
  ]);

  return (
    <>
      <CarouselCarpet autoSlide={true} />;
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
      {/* stop shop by weaving type */}
      {/* start shop by style */}
      <div className="w-full py-4 ">
        <p className=" text-3xl font-medium pb-10 font-mei">Shop By Style</p>
        <div className="flex justify-center flex-wrap gap-x-3 gap-y-6  ">
          {cardDataShopByStyle.map(({ title, url }) => {
            return <CardImage title={title} url={url} />;
          })}
        </div>
      </div>
      {/* end shop by style */}
      {/* start shop by size */}
      <div className="py-12 px-12 w-full h-[400px] ">
        <p className="font-mei text-3xl pb-4">Shop By Size</p>
        <CarouselBySize />
      </div>
      {/* end shop by size */}
      {/*  start shop by color */}
      <div className="py-12 px-12 w-full h-[300px] ">
        <p className="font-mei text-3xl pb-4">Shop By Color</p>
        <CarouselByColor />
      </div>
      {/*  end shop by color */}
      {/*  start shop canyan collection */}
      <div className=" h-auto w-full pb-5 ">
        <p className="text-3xl font-mei ">New Canyan Collection</p>
        <div className="flex flex-col items-center justify-center pt-8">
          <p className="text-xl font-mar px-8 font-mar">
            The Canyan Rug is the perfect rug for any room! Its hand-tufted
            construction offers a textured feel underfoot and a delightful
            display of naïve designs. With a multi-level pile height, Canyan
            offers a subtle three- dimensional effect and a high-quality dense
            pile that is soft to the touch
          </p>
          <p className="w-52 h-9 font-mar pt-3 underline underline-offset-8 hover:text-red-500 cursor-pointer">
            View Collection {">>"}
          </p>
        </div>
        <div className="grid grid-cols-2 px-8 pt-6 ">
          <img src={Imagecollection} className="h-full"></img>
          <div className="  h-full w-full flex flex-wrap justify-end gap-x-10 gap-y-10 ">
            {CardProductColection.map(({ url, title, price, description }) => {
              return (
                <CardProduct
                  url={url}
                  title={title}
                  price={price}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/*  end shop canyan collection */}
      {/* Start promot */}
      <div className="w-auto h-auto py-6 mx-8 ">
        <img src={imagePromot} className="w-full h-full"></img>
      </div>
      {/* end promot */}
      {/* start shop milano collection */}
      <div className=" h-auto w-full pb-5">
        <p className="text-3xl font-mei ">New Milano Collection</p>
        <div className="flex flex-col items-center justify-center pt-8">
          <p className="text-xl font-mar px-8 font-mar">
            The Canyan Rug is the perfect rug for any room! Its hand-tufted
            construction offers a textured feel underfoot and a delightful
            display of naïve designs. With a multi-level pile height, Canyan
            offers a subtle three- dimensional effect and a high-quality dense
            pile that is soft to the touch
          </p>
          <p className="w-52 h-9 font-mar pt-3 underline underline-offset-8 hover:text-red-500 cursor-pointer">
            View Collection {">>"}
          </p>
        </div>

        <div className="grid grid-cols-2 px-8 pt-6 ">
          <div className="  h-full w-full flex flex-wrap justify-start gap-x-10 gap-y-10 ">
            {CardProductColection.map(({ url, title, price, description }) => {
              return (
                <CardProduct
                  url={url}
                  title={title}
                  price={price}
                  description={description}
                />
              );
            })}
          </div>
          <img src={Imagecollection} className="h-full"></img>
        </div>
      </div>
      {/* end shop milano collection */}
      {/* start fillter product */}
      <div className="grid grid-cols-4 py-8">
        <div className="pl-8 w-full h-full font-mar">
          <p className="text-2xl font-mar">FILTERS</p>
          {list.map((item, key) => {
            return <AcconrdionComponent key={key} datas={item} />;
          })}
        </div>
        <div className="h-full w-full flex flex-wrap justify-center gap-x-20 gap-y-10 col-span-3 ">
          {CardProductFilter.map(({ url, title, price, description }) => {
            return (
              <CardProduct
                url={url}
                title={title}
                price={price}
                description={description}
              />
            );
          })}
        </div>
      </div>
      {/* end filter product */}
      {/*  start who you are  */}
      <div className=" h-auto w-full pb-10 ">
        <p className="text-3xl font-mei ">Who We Are</p>
        <div className="flex flex-col items-center justify-center pt-8">
          <p className="text-xl font-mar px-8 font-mar">
            With a strong legacy of intricate patterns, technological
            innovations, and cultural heritage in rug making,Saraswatii Global
            has taken the rug manufacturing industry to the next level of
            artisanship.
          </p>
          <p className="w-52 h-9 font-mar pt-3 underline underline-offset-8 hover:text-red-500 cursor-pointer">
            Know More {">>"}
          </p>
        </div>
        <div className="flex justify-center pt-3">
          <video className="h-[500px] w-10/12 rounded-lg" controls autoPlay>
            <source src={videowhoyouare} type="video/mp4" />
          </video>
        </div>
      </div>
      {/*  end who you are */}
      {/*  start who you are  */}
      <div className=" h-auto w-full pb-5 ">
        <p className="text-3xl font-mei ">Our Stores</p>
        <div className="flex flex-col items-center justify-center pt-8">
          <p className="text-xl font-mar px-8 font-mar">
            Explore the wide range of designer Rugs & Carpets at stores with
            amazing deals. We're sure thatyou'll find something special.
          </p>
          <p className="w-52 h-9 font-mar pt-3 underline underline-offset-8 hover:text-red-500 cursor-pointer">
            Know More {">>"}
          </p>
        </div>
        <div className="flex justify-center py-10 gap-x-3 ">
          <div className="relative">
            <img className="" src={Imagestore1}></img>
            <p className=" font-mar absolute text-white font-medium top-[225px] left-20 w-[300px]">
              Jaipur 3 Ganesh Colony, Amer Road, Jaipur-302002, Rajasthan, INDIA
            </p>
          </div>
          <div className="relative">
            <img className="" src={Imagestore2}></img>
            <p className="font-mar absolute text-white font-medium top-[225px] left-20 w-[300px]">
              New Delhi1st Floor, Khasra No.426, Opp. pillar no.132MG.Road ,
              Ghitorni , Delhi 110030
            </p>
          </div>
        </div>
      </div>
      {/*  end who you are */}
    </>
  );
};

export default ProductCarpetPage;
