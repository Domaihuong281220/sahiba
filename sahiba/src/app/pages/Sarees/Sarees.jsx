/** @format */
// import "./style.css";



import React from "react";
import img1 from "../../../assets/image/Sarees/img1.png";
import imagePayment from "../../../assets/image/payments/secure-payment-min.webp";
import imageHandmade from "../../../assets/image/payments/100-handmade-min.webp";
import imageFreeShipping from "../../../assets/image/payments/shipping-min.webp";
import imageDesign from "../../../assets/image/payments/1000+design-min.webp";
import collection1 from "../../../assets/image/Sarees/Category1.png";
import { Col, Row } from "antd";

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
<Row gutter={16}>
  <Col span={12}>
  
    <Row gutter={16}>
    <Col span={24}><img src={collection1} alt="collection1" /></Col>
      <Col span={16}>made in Heaven</Col>
      <Col span={8}>Shop Now</Col>
    </Row>
  </Col>
  <Col span={12}>

  
    <Row gutter={16}>
      <Col span={24}><img src={collection1} alt="collection1" /></Col>
      <Col span={16}>made in Heaven</Col>
      <Col span={8}>Shop Now</Col>
    </Row>
  </Col>
</Row>

    
  


    </>
  );
};
export default Sarees;  