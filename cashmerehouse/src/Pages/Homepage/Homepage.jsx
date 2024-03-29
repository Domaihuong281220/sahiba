/** @format */
import "./style.css";

import img1 from "../../assets/image/Homepage/img1.jpg";
import imgslider1 from "../../assets/image/Homepage/Saree.jpg";
import imgslider2 from "../../assets/image/Homepage/furniture.jpg";
import contentimg1 from "../../assets/image/Homepage/content1.jpg";
import contentimg2 from "../../assets/image/Homepage/content2.jpg";
import feedbackimg1 from "../../assets/image/Homepage/feedback1.jpg";
import feedbackimg2 from "../../assets/image/Homepage/feedback2.jpg";
import feedbackimg3 from "../../assets/image/Homepage/feedback3.png";
import feedbackerimg1 from "../../assets/image/Homepage/feedbacker1.png";
import feedbackerimg2 from "../../assets/image/Homepage/feedbacker2.png";
import feedbackerimg3 from "../../assets/image/Homepage/feedbacker3.png";
import blogimg1 from "../../assets/image/Homepage/blog1.jpg";

import { Carousel, Col, Row } from "antd";
import { InstagramOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const blogs = [
  {
    id: 1,
    img: blogimg1,
    title: "The Bungalow",
    desc: "A hundred - year legacy Intergrated into every product.",
    link: "https://www.obeetee.com/",
  },
  {
    id: 2,
    img: blogimg1,
    title: "The Bungalow",
    desc: "A hundred - year legacy Intergrated into every product.",
    link: "https://www.obeetee.com/",
  },
  {
    id: 3,
    img: blogimg1,
    title: "The Bungalow",
    desc: "A hundred - year legacy Intergrated into every product.",
    link: "https://www.obeetee.com/",
  },
  {
    id: 4,
    img: blogimg1,
    title: "The Bungalow",
    desc: "A hundred - year legacy Intergrated into every product.",
    link: "https://www.obeetee.com/",
  },
  {
    id: 5,
    img: blogimg1,
    title: "The Bungalow",
    desc: "A hundred - year legacy Intergrated into every product.",
    link: "https://www.obeetee.com/",
  },
  {
    id: 6,
    img: blogimg1,
    title: "The Bungalow",
    desc: "A hundred - year legacy Intergrated into every product.",
    link: "https://www.obeetee.com/",
  },
];

const Homepage = () => {
  return (
    <>
      <div className="Head-container">
        {/* Part 1 */}
        <div className="Head-intro">
          <img src={img1} alt="Logo" border="0" className="logo" />
          <h1 className="Head-intro font-mei">
            A hundred - year legacy Intergrated into every product.
          </h1>
          <button class="glow-on-hover" type="button">
            OUR CATEGORIES
          </button>
        </div>

        {/* Part 2 */}
        <div className="Head-intro2 font-mar">
          <h1>Since 1990</h1>
          <p>
            Located on the banks of the Ganges on the ancient Grand Trunk Route,
            Obeetee is the largest handmade rug maker in India. But there’s more
            to us than our craft. Garden parties and silver service for a
            century - A charming way of life is kept alive at The Bungalow. Meet
            the company behind the product. Located on the banks of the Ganges
            on the ancient Grand Trunk Route, Obeetee is the largest handmade
            rug maker in India. But there’s more to us than our craft. Garden
            parties and silver service for a century - A charming way of life is
            kept alive at The Bungalow. Meet the company behind the product.
            Located on the banks of the Ganges on the ancient Grand Trunk Route,
            Obeetee is the largest handmade rug maker in India. But there’s more
            to us than our craft. Garden parties and silver service for a
            century - A charming way of life is kept alive at The Bungalow. Meet
            the company behind the product.
          </p>
          <a href="https://www.obeetee.com/" target="_blank" rel="noreferrer">
            OUR LEGACY
          </a>
        </div>

        {/* Part 3 */}

        <Row className="top-head3" gutter={16}>
          <Col className="gutter-row intro-head3" span={8}>
            <h1 className="font-mei introhead3">Indian designs</h1>
          </Col>
          <Col className=" gutter-row" span={16}>
            <p className="font-mar deschead3">
              The first documented India-inspired Carpets.We turned to India’s
              best designers to create an indigenous Indian design language for
              carpets otherwise dominated by Persian and Chinese motifs.
            </p>
          </Col>
        </Row>

        <div className="Head-intro3">
          <Carousel autoplay>
            <div>
              <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                  <img
                    src={imgslider1}
                    alt="Logo"
                    border="0"
                    className="logo"
                  />
                </Col>
                <Col className="row2 gutter-row" span={24}>
                  <Row className="row2-in" gutter={16}>
                    <Col className="gutter-row" span={8}>
                      <h1 className="font-mei">Sarees</h1>
                    </Col>
                    <Col className=" col2-row2 gutter-row" span={16}>
                      <p className="font-mar">
                        A celebrated revisit to Shantanu & Nikhil’s iconic
                        collections over the years and what the brand stands
                        for. Power, Progressiveness and Pride now takes centre
                        stage and finds its way into the luxurious world of
                        Obeetee’s handcrafted carpets.
                      </p>
                    </Col>
                    <Col className="gutter-row" span={8}></Col>
                    <Col className=" col2-row2 gutter-row" span={16}>
                      <a
                        className="font-mar"
                        href="https://www.obeetee.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SHOP NOW
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                  <img
                    src={imgslider2}
                    alt="Logo"
                    border="0"
                    className="logo"
                  />
                </Col>
                <Col className="row2 gutter-row" span={24}>
                  <Row className="row2-in" gutter={16}>
                    <Col className="gutter-row" span={8}>
                      <h1 className="font-mei">Furniture</h1>
                    </Col>
                    <Col className=" col2-row2 gutter-row" span={16}>
                      <p className="font-mar">
                        A celebrated revisit to Shantanu & Nikhil’s iconic
                        collections over the years and what the brand stands
                        for. Power, Progressiveness and Pride now takes centre
                        stage and finds its way into the luxurious world of
                        Obeetee’s handcrafted carpets.
                      </p>
                    </Col>
                    <Col className="gutter-row" span={8}></Col>
                    <Col className=" col2-row2 gutter-row" span={16}>
                      <a
                        className="font-mar"
                        href="/product-carpet"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SHOP NOW
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                  <img
                    src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    alt="Logo"
                    border="0"
                    className="logo"
                  />
                </Col>
                <Col className="row2 gutter-row" span={24}>
                  <Row className="row2-in" gutter={16}>
                    <Col className="gutter-row" span={8}>
                      <h1 className="font-mei">Carpets</h1>
                    </Col>
                    <Col className=" col2-row2 gutter-row" span={16}>
                      <p className="font-mar">
                        A celebrated revisit to Shantanu & Nikhil’s iconic
                        collections over the years and what the brand stands
                        for. Power, Progressiveness and Pride now takes centre
                        stage and finds its way into the luxurious world of
                        Obeetee’s handcrafted carpets.
                      </p>
                    </Col>
                    <Col className="gutter-row" span={8}></Col>
                    <Col className=" col2-row2 gutter-row" span={16}>
                      <a
                        className="font-mar"
                        href="/product-carpet"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SHOP NOW
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
        {/* Part 4 */}
        <div className="Head-intro4">
          <Row className="part4" gutter={16}>
            <Col className="gutter-row content1" span={24}>
              <img
                src={contentimg1}
                alt="Logo"
                border="0"
                className="contentimg1"
              />
            </Col>
            <Col className=" gutter-row content2" span={24}>
              <h1 className="">Who we are?</h1>
            </Col>
            <Col className=" gutter-row content3" span={24}>
              <p className="font-mar">
                With a strong legacy of intricate patterns, technological
                innovations, and cultural heritage in rug making,Saraswatii
                Global has taken the rug manufacturing industry to the next
                level of artisanship.
              </p>
            </Col>
            <Col className=" gutter-row content4" span={24}>
              <a className="font-mar" href="#" target="_blank" rel="noreferrer">
                KNOW MORE
              </a>
            </Col>
            <Col className=" gutter-row content5" span={24}>
              <img
                src={contentimg2}
                alt="Logo"
                border="0"
                className="contentimg2"
              />
            </Col>
            <Col className=" gutter-row content6" span={24}>
              <h1 className="">Creating Sustainable Live</h1>
            </Col>
            <Col className=" gutter-row content7" span={24}>
              <p className="font-mar">
                It's about supporting communities and their craft, as well as
                encouraging a happier, healthier way oflife for every individual
                for a better future.
              </p>
            </Col>
            <Col className=" gutter-row content8" span={24}>
              <a className="font-mar" href="#" target="_blank" rel="noreferrer">
                KNOW MORE
              </a>
            </Col>
          </Row>
        </div>

        {/* Part 5 */}
        <div className="Head-intro5">
          <Row className="part5" gutter={16}>
            <Col className="gutter-row part5-incol" span={24}>
              <Row className="part5-inrow" gutter={16}>
                <Col className="gutter-row" span={8}>
                  <div className="feedback-box">
                    <img
                      src={feedbackimg1}
                      alt="Logo"
                      border="0"
                      className="feedbackimg1"
                    />
                    <img
                      src={feedbackerimg1}
                      alt="Logo"
                      border="0"
                      className="feedbackerimg1"
                    />
                    <InstagramOutlined
                      className="IGicon"
                      style={{ fontSize: "150%" }}
                    />
                    <p className="IGID">Danny021_1</p>
                    <p className="IGcomment font-mar">
                      "I love the quality of the carpet and the design is so
                      unique. I am so happy with my purchase."
                    </p>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="feedback-box">
                    <img
                      src={feedbackimg2}
                      alt="Logo"
                      border="0"
                      className="feedbackimg1"
                    />
                    <img
                      src={feedbackerimg2}
                      alt="Logo"
                      border="0"
                      className="feedbackerimg1"
                    />
                    <InstagramOutlined
                      className="IGicon"
                      style={{ fontSize: "150%" }}
                    />
                    <p className="IGID">Danny021_1</p>
                    <p className="IGcomment font-mar">
                      "I love the quality of the carpet and the design is so
                      unique. I am so happy with my purchase."
                    </p>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="feedback-box">
                    <img
                      src={feedbackimg3}
                      alt="Logo"
                      border="0"
                      className="feedbackimg1"
                    />
                    <img
                      src={feedbackerimg3}
                      alt="Logo"
                      border="0"
                      className="feedbackerimg1"
                    />
                    <InstagramOutlined
                      className="IGicon"
                      style={{ fontSize: "150%" }}
                    />
                    <p className="IGID">Danny021_1</p>
                    <p className="IGcomment font-mar">
                      "I love the quality of the carpet and the design is so
                      unique. I am so happy with my purchase."
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        {/* Part 6 */}
        <div className="Head-intro6">
          <Row className="part6" gutter={16}>
            <Col className="gutter-row part6-incol" span={24}>
              <h1 className="">Testimonials</h1>
            </Col>
            <Col className="gutter-row part6-incol" span={24}>
              <p className="font-mar part6-p1">Kind Words For Our Customers</p>
            </Col>
            <Col className="gutter-row part6-incol" span={24}>
              <p className="font-mar part6-p2">
                When there are so many choices present no one stick to a product
                until it is exceptional. We know we have the best products but
                this is for you and because of you. Thanks for trusting us.
              </p>
            </Col>
          </Row>
        </div>
        {/* Part 7 */}
        <div className="Head-intro7">
          <h1 className="font-mar">If you have any question. Contact us</h1>
          <div className="part7-in"></div>
          <div className="part7-in2">FAQ</div>
          <div className="part7-in3">
            <ArrowRightOutlined className="iconpart7" />
          </div>
          <div className="part7-in4">Ask Expert</div>
          <div className="part7-in5">
            <ArrowRightOutlined className="iconpart7" />
          </div>
        </div>

        {/* Part 8 */}
        <div className="Head-intro8">
          <h1 className="">Our Blog</h1>
          <p className="font-mar">
            Read our blog to stay up to date on the latest décor trends, Rugs
            details & tips.
          </p>
        </div>

        {/* Part 9 */}
        <div className="Head-intro9">
          {/* <div className="blog">
            <img src={blogimg1} alt="Logo" border="0" className="blogimg1" />
            <p className="blogp1">How to choose the right rug for your home</p>
          </div> */}
          <Carousel autoplay>
            <div className="blogs">
              <Row className="blogs-row" gutter={16}>
                {blogs.map((item, index) => {
                  if (index < 3) {
                    return (
                      <Col className=" gutter-row blog-in" span={8}>
                        <div className="blog">
                          <img
                            src={item.img}
                            alt="Logo"
                            border="0"
                            className="blogimg1"
                          />
                          <p className="blogp1">{item.title}</p>
                        </div>
                      </Col>
                    );
                  }
                  return <></>;
                })}
              </Row>
            </div>
            <div className="blogs">
              <Row className="blogs-row" gutter={16}>
                {blogs.map((item, index) => {
                  if (index >= 3 && index < 6) {
                    return (
                      <Col className=" gutter-row blog-in" span={8}>
                        <div className="blog">
                          <img
                            src={item.img}
                            alt="Logo"
                            border="0"
                            className="blogimg1"
                          />
                          <p className="blogp1">{item.title}</p>
                        </div>
                      </Col>
                    );
                  }
                  return <></>;
                })}
              </Row>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Homepage;
