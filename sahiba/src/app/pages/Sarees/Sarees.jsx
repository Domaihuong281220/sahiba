/** @format */
import "./style.css";

import { React, useState } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/image/Sarees/img1.png";
import imagePayment from "../../../assets/image/payments/secure-payment-min.webp";
import imageHandmade from "../../../assets/image/payments/100-handmade-min.webp";
import imageFreeShipping from "../../../assets/image/payments/shipping-min.webp";
import imageDesign from "../../../assets/image/payments/1000+design-min.webp";
import collection1 from "../../../assets/image/Sarees/Category1.png";

import sareeimg2 from "../../../assets/image/Sarees/saree2.jpg";
import latestimg1 from "../../../assets/image/Sarees/latest1.png";
import latestimg2 from "../../../assets/image/Sarees/latest2.png";
import latestimg3 from "../../../assets/image/Sarees/latest3.png";
import latestimg4 from "../../../assets/image/Sarees/latest4.png";
import Sarres1 from "../../../assets/image/sarres1.png";
import Sarres2 from "../../../assets/image/sarres2.png";
import Sarres3 from "../../../assets/image/sarres03.png";
import Sarres4 from "../../../assets/image/sarres04.png";
import Sarres5 from "../../../assets/image/sarres05.png";
import Sarres6 from "../../../assets/image/sarres06.png";
import imageProductsarres from "../../../assets/image/sareesproduct.png";
import imageBanner from "../../../assets/image/bannersarres.png";

import { Carousel, Col, Row } from "antd";
import AcconrdionComponent from "../../components/Acconrdion/AcconrdionComponent";
import { IconButton } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

const collection = [
  {
    id: 1,
    image: collection1,
    title: "Made in Heaven",
    link: "Shop Now",
  },
  {
    id: 2,
    image: collection1,
    title: "Blooming Blossoms",
    link: "Shop Now",
  },
  {
    id: 3,
    image: collection1,
    title: "Lost in Paradise",
    link: "Shop Now",
  },
  {
    id: 4,
    image: collection1,
    title: "Angel in Disguise",
    link: "Shop Now",
  },
  {
    id: 5,
    image: collection1,
    title: "Peach Perfect",
    link: "Shop Now",
  },
  {
    id: 6,
    image: collection1,
    title: "Pretty in Pink",
    link: "Shop Now",
  },
];

const products = [
  {
    id: 0,
    name: "PUNIT BALANA",
    image: Sarres1,
    desription: "Ivory Strappy Short Kurti Paired with Gharara & Dupatta",
  },
  {
    id: 1,
    name: "REIK",
    image: Sarres2,
    desription: "Red and Black Minoli Drape Skirt with Alice Bustier and cape",
  },
  {
    id: 2,
    name: "ABHINAV MISHRA",
    image: Sarres3,
    desription: "Multicoloured Floral Pattern Lehenga",
  },
  {
    id: 3,
    name: "PUNIT BALANA",
    image: Sarres4,
    desription: "Ivory Strappy Short Kurti Paired with Gharara & Dupatta",
  },
  {
    id: 4,
    name: "REIK",
    image: Sarres5,
    desription: "Red and Black Minoli Drape Skirt with Alice Bustier and cape",
  },
  {
    id: 5,
    name: "ABHINAV MISHRA",
    image: Sarres6,
    desription: "Multicoloured Floral Pattern Lehenga",
  },
  {
    id: 6,
    name: "ABHINAV MISHRA",
    image: Sarres2,
    desription: "Multicoloured Floral Pattern Lehenga",
  },

  // Add more products here...
];
const filterProductData = [
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    id: 1,
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
  {
    image: imageProductsarres,
    name: "PREMYA BY MANISHII",
    title: "Hand Embroidered Floral Jaal Ivory Saaree",
    price: "$878.40",
  },
];

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

const Sarees = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
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
      <div className="w-full  flex flex-row  items-center justify-around mt-[50px]">
        <img className="w-full h-screen" src={img1} alt="Sarees" />
      </div>

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

      {/* collection */}
      <div className="tittle-wrap">
        <h1 className=" text-center font-bold font-mar tittle-collection mt-10">
          Our latest collection
        </h1>
      </div>
      <Carousel autoplay className="collection">
        <div className="slider">
          <Row gutter={16} className="slider-in">
            {collection.map((item, index) => {
              if (index < 2) {
                return (
                  <Col span={12}>
                    <Row gutter={16}>
                      <Col span={24}>
                        <img src={item.image} alt="collection1" />
                      </Col>
                      <Col span={24} className="font-mei collection-name">
                        {item.title}
                      </Col>
                      {/* <Col span={8}>{item.link}</Col> */}
                    </Row>
                  </Col>
                );
              }
              return <></>;
            })}
          </Row>
        </div>
        <div className="slider">
          <Row gutter={16} className="slider-in">
            {collection.map((item, index) => {
              if (index > 1 && index < 4) {
                return (
                  <Col span={12}>
                    <Row gutter={16}>
                      <Col span={24}>
                        <img src={item.image} alt="collection1" />
                      </Col>
                      <Col span={24} className="font-mei collection-name">
                        {item.title}
                      </Col>
                      {/* <Col span={8}>{item.link}</Col> */}
                    </Row>
                  </Col>
                );
              }
              return <></>;
            })}
          </Row>
        </div>
        <div className="slider">
          <Row gutter={16} className="slider-in">
            {collection.map((item, index) => {
              if (index > 3 && index < 6) {
                return (
                  <Col span={12}>
                    <Row gutter={16}>
                      <Col span={24}>
                        <img src={item.image} alt="collection1" />
                      </Col>
                      <Col span={16} className="font-mei collection-name">
                        {item.title}
                      </Col>
                      <Col span={8} className="shopnow">
                        {item.link}
                      </Col>
                    </Row>
                  </Col>
                );
              }
              return <></>;
            })}
          </Row>
        </div>
      </Carousel>
      <h1 className="font-mar text-center  tittle-saree mt-10">Saree</h1>
      <p className="font-mar text-center text-sm saree-desc">
        The sari or saree has seen a renewed interest in Indian fashion in
        recent years. Many of our favourite designers like Anamika Khanna, Tarun
        Tahiliani have experimented with draped sarees and dhoti sarees. There
        has been an amazing interest in labels like Raw Mango and Anavila that
        are entirely focused on the sari and are reinventing the handloom sari
        in beautiful new ways. Here, we present our curation of embroidered and
        handwoven saris, belted saris, great drapes and smart, unusual blouses.
      </p>

      <img className="w-full h-2/6" src={sareeimg2} alt="Sarees" />
      <div className="latestandline">
        <h1 className="font-mei text-center  tittle-saree mt-10">
          The lastest
        </h1>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      <p className="font-mar text-center text-sm latest-desc">
        Our freshest arrivals
      </p>
      <Row gutter={16} className="Latest">
        <Col span={8} className="latest-row1">
          <img className="w-full h-auto" src={latestimg1} alt="Latest" />
        </Col>
        <Col span={16} className="latest-row1">
          <img
            className="w-full h-auto latest-ladgeimg"
            src={latestimg2}
            alt="Latest"
          />
        </Col>
        <Col span={16}>
          <img
            className="latest-ladgeimg w-full h-auto"
            src={latestimg3}
            alt="Latest"
          />
        </Col>
        <Col span={8}>
          <img className="w-full h-auto" src={latestimg4} alt="Latest" />
        </Col>
      </Row>
      {/* Carousel Favorite */}
      <div className="w-full h-auto bg-[#743E0D] mt-10">
        <div className="flex  items-center justify-center gap-x-2 pt-10">
          <div className="w-[100px] h-[2px] bg-[#FFD18B]"></div>
          <p className="font-mei text-[#FFD18B] text-[50px]">
            Our Favorite This Week
          </p>
          <div className="w-[100px] h-[2px] bg-[#FFD18B]"></div>
        </div>
        <p className="font-mar text-[25px] text-[#FFD18B] tracking-[10px]">
          Our best selling pieces that you shouldn't miss
        </p>
        <div className="w-full p-20">
          <Slider {...settings} className="flex items-center" ider>
            {products.map(({ name, image, desription }) => {
              return (
                <div className="px-4">
                  <img
                    src={image}
                    className="object-fit h-auto w-full rounded-md"
                  ></img>
                  <p className="font-mar text-lg text-white">{name}</p>
                  <p className=" font-mar text-sm text-white">{desription}</p>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="pb-10">
          <button className="w-44 h-16 bg-[#FFD18B] text-[#484848] text-[36px] rounded-lg ">
            Shop All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 py-8">
        <div className="pl-8 w-full h-full font-mar">
          <p className="text-2xl font-mar">FILTERS</p>
          {list.map((item, key) => {
            return <AcconrdionComponent key={key} datas={item} />;
          })}
        </div>
        <div className="h-full w-full flex flex-wrap justify-center gap-x-20 gap-y-10 col-span-3 ">
          {filterProductData.map(({ image, title, name, price }) => {
            return (
              <div className=" w-[400px] h-auto flex flex-col items-start relative">
                <img src={image} className="h-[400px] w-full"></img>
                <p className="font-bold">{name}</p>
                <p className="">{title}</p>
                <p className=""> {price}</p>
                <div className="w-7 h-7 flex justify-center items-center absolute">
                  <Icon
                    icon="mdi:heart-outline"
                    width={24}
                    height={24}
                    color="white"
                  ></Icon>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <img className="w-full" src={imageBanner}></img>
    </>
  );
};
export default Sarees;
