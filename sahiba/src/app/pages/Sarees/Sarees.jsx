/** @format */
import "./style.css";



import React from "react";
import img1 from "../../../assets/image/Sarees/img1.png";
import imagePayment from "../../../assets/image/payments/secure-payment-min.webp";
import imageHandmade from "../../../assets/image/payments/100-handmade-min.webp";
import imageFreeShipping from "../../../assets/image/payments/shipping-min.webp";
import imageDesign from "../../../assets/image/payments/1000+design-min.webp";
import collection1 from "../../../assets/image/Sarees/Category1.png";
import sareeimg1 from "../../../assets/image/Sarees/saree1.jpg";
import { Carousel, Col, Row } from "antd";

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
  }
];


const Sarees = () => {
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
      <h1 className=" text-center font-bold font-mar tittle-collection mt-10">Our latest collection</h1>
      </div>
      <Carousel autoplay className="collection">
        <div className="slider">
          <Row gutter={16} className="slider-in">
            {collection.map((item, index) => {
              if (index < 2) {
                return (
                  <Col span={12}>
                    <Row gutter={16}>
                      <Col span={24}><img src={item.image} alt="collection1" /></Col>
                      <Col span={16} className="font-mei collection-name">{item.title}</Col>
                      <Col span={8}>{item.link}</Col>
                    </Row>
                  </Col>
                )
              }
              return <></>
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
                      <Col span={24}><img src={item.image} alt="collection1" /></Col>
                      <Col span={16} className="font-mei collection-name">{item.title}</Col>
                      <Col span={8}>{item.link}</Col>
                    </Row>
                  </Col>
                )
              }
              return <></>
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
                      <Col span={24}><img src={item.image} alt="collection1" /></Col>
                      <Col span={16} className="font-mei collection-name">{item.title}</Col>
                      <Col span={8} className="shopnow">{item.link}</Col>
                    </Row>
                  </Col>
                )
              }
              return <></>
            })}
          </Row>
        </div>
      </Carousel>
      <h1 className="font-mar text-center  tittle-saree mt-10">Saree</h1>
      <p className="font-mar text-center text-sm saree-desc">The sari or saree has seen a renewed interest in Indian fashion in recent years. Many of our favourite designers like Anamika Khanna, Tarun Tahiliani have experimented with draped sarees and dhoti sarees. There has been an amazing interest in labels like Raw Mango and Anavila that are entirely focused on the sari and are reinventing the handloom sari in beautiful new ways. Here, we present our curation of embroidered and handwoven saris, belted saris, great drapes and smart, unusual blouses.</p>
      
       




    </>
  );
};
export default Sarees;  