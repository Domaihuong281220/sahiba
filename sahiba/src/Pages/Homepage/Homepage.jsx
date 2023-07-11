/** @format */
import "./style.css";

import img1 from "../../assets/image/Homepage/img1.jpg";
import imgslider1 from "../../assets/image/Homepage/Saree.jpg";
import imgslider2 from "../../assets/image/Homepage/furniture.jpg";

import { Carousel, Col, Row } from 'antd';
import React from "react";

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };


const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Homepage = () => {
  return (
    <>
      <div className="Head-container">

        {/* Part 1 */}
        <div className="Head-intro">
          <img src={img1} alt="Logo" border="0" className="logo" />
          <h1 className="Head-intro font-mei">A hundred - year legacy Intergrated into every product.</h1>
          <button class="glow-on-hover" type="button">OUR CATEGORIES</button>
        </div>

        {/* Part 2 */}
        <div className="Head-intro2 font-mar">
          <h1>Since 1990</h1>
          <p>Located on the banks of the Ganges on the ancient Grand Trunk Route, Obeetee is the largest handmade rug maker in India. But there’s more to us than our craft. Garden parties and silver service for a century - A charming way of life is kept alive at The Bungalow. Meet the company behind the product.
            Located on the banks of the Ganges on the ancient Grand Trunk Route, Obeetee is the largest handmade rug maker in India. But there’s more to us than our craft. Garden parties and silver service for a century - A charming way of life is kept alive at The Bungalow. Meet the company behind the product.
            Located on the banks of the Ganges on the ancient Grand Trunk Route, Obeetee is the largest handmade rug maker in India. But there’s more to us than our craft. Garden parties and silver service for a century - A charming way of life is kept alive at The Bungalow. Meet the company behind the product.
          </p>
          <a href="https://www.obeetee.com/" target="_blank" rel="noreferrer">OUR LEGACY</a>
        </div>

        {/* Part 3 */}
        <div className="Head-intro3">
          

          <Carousel autoplay>
            <div>
            <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <img src={imgslider1} alt="Logo" border="0" className="logo" />
            </Col>
            <Col className="row2 gutter-row" span={24}>
              <Row className="row2-in" gutter={16}>
                <Col className="gutter-row" span={8}>
                  <h1 className="font-mei">Sarees</h1>
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <p className="font-mar">A celebrated revisit to Shantanu & Nikhil’s iconic collections over the years and what the brand stands for. Power, Progressiveness and Pride now takes centre stage and finds its way into the luxurious world of Obeetee’s handcrafted carpets.</p>

                </Col>
                <Col className="gutter-row" span={8}>
                  
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <a className="font-mar" href="https://www.obeetee.com/" target="_blank" rel="noreferrer">SHOP NOW</a>

                </Col>
              </Row>
            </Col>
          </Row>
            </div>
            <div>
            <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <img src={imgslider2} alt="Logo" border="0" className="logo" />
            </Col>
            <Col className="row2 gutter-row" span={24}>
              <Row className="row2-in" gutter={16}>
                <Col className="gutter-row" span={8}>
                  <h1 className="font-mei">Sarees</h1>
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <p className="font-mar">A celebrated revisit to Shantanu & Nikhil’s iconic collections over the years and what the brand stands for. Power, Progressiveness and Pride now takes centre stage and finds its way into the luxurious world of Obeetee’s handcrafted carpets.</p>
                </Col>
                <Col className="gutter-row" span={8}>
                  
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <a className="font-mar" href="https://www.obeetee.com/" target="_blank" rel="noreferrer">SHOP NOW</a>

                </Col>
              </Row>
            </Col>
          </Row>
            </div>
            <div>
            <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <img src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Logo" border="0" className="logo" />
            </Col>
            <Col className="row2 gutter-row" span={24}>
              <Row className="row2-in" gutter={16}>
                <Col className="gutter-row" span={8}>
                  <h1 className="font-mei">Sarees</h1>
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <p className="font-mar">A celebrated revisit to Shantanu & Nikhil’s iconic collections over the years and what the brand stands for. Power, Progressiveness and Pride now takes centre stage and finds its way into the luxurious world of Obeetee’s handcrafted carpets.</p>
                </Col>
                <Col className="gutter-row" span={8}>
                  
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <a className="font-mar" href="https://www.obeetee.com/" target="_blank" rel="noreferrer">SHOP NOW</a>

                </Col>
              </Row>
            </Col>
          </Row>
            </div>
          </Carousel>
          {/* <div>
            <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <img src={imgslider1} alt="Logo" border="0" className="logo" />
            </Col>
            <Col className="row2 gutter-row" span={24}>
              <Row className="row2-in" gutter={16}>
                <Col className="gutter-row" span={8}>
                  <h1 className="font-mei">Sarees</h1>
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <p className="font-mar">A celebrated revisit to Shantanu & Nikhil’s iconic collections over the years and what the brand stands for. Power, Progressiveness and Pride now takes centre stage and finds its way into the luxurious world of Obeetee’s handcrafted carpets.</p>

                </Col>
                <Col className="gutter-row" span={8}>
                  
                </Col>
                <Col className=" col2-row2 gutter-row" span={16}>
                  <a className="font-mar" href="https://www.obeetee.com/" target="_blank" rel="noreferrer">SHOP NOW</a>

                </Col>
              </Row>
            </Col>
          </Row>
            </div> */}

        </div>
      </div>
    </>
  );
};

export default Homepage;  
