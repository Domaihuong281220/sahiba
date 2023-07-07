/** @format */

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./app/components/Carousel/Carousel";
import Footer from "./app/components/Footer/Footer";
import Header from "./app/components/Header/Header";
import imagePayment from "./assets/image/payments/secure-payment-min.webp";
import imageHandmade from "./assets/image/payments/100-handmade-min.webp";
import imageFreeShipping from "./assets/image/payments/shipping-min.webp";
import imageDesign from "./assets/image/payments/1000+design-min.webp";
import CardImage from "./app/components/CardImage/CardImage";

//shop by type
import imageCard_1 from "./assets/image/shop-by-weaving-type/hand-tufted-min.webp";
import imageCard_2 from "./assets/image/shop-by-weaving-type/hand-woven-min.webp";
import imageCard_3 from "./assets/image/shop-by-weaving-type/hand-knotted-min.webp";
import imageCard_4 from "./assets/image/shop-by-weaving-type/flat-weave-min.webp";

//Shop by style
import imageCard_5 from "./assets/image/shop-by-style/classic.jpg";
import imageCard_6 from "./assets/image/shop-by-style/traditional.jpg";
import imageCard_7 from "./assets/image/shop-by-style/transitional.jpg";
import imageCard_8 from "./assets/image/shop-by-style/geomatric.jpg";
import imageCard_9 from "./assets/image/shop-by-style/modern.jpg";
import imageCard_10 from "./assets/image/shop-by-style/solid.jpg";
import imageCard_11 from "./assets/image/shop-by-style/abstract.jpg";
import imageCard_12 from "./assets/image/shop-by-style/natural.jpg";
import imageCard_13 from "./assets/image/shop-by-style/kilim.jpg";
import imageCard_14 from "./assets/image/shop-by-style/texture.jpg";

//shop By color
import img1 from "./assets/image/shop-by-color/beige.jpg";
import img2 from "./assets/image/shop-by-color/blue-rugs.jpg";
import img3 from "./assets/image/shop-by-color/black-rugs.jpg";
import img4 from "./assets/image/shop-by-color/camel.jpg";
import img6 from "../assets/image/shop-by-color/gold-rugs.jpg";
import img7 from "./assets/image/shop-by-color/graphite-rugs.jpg";
import img8 from "./assets/image/shop-by-color/green-rugs.jpg";
import img9 from "./assets/image/shop-by-color/grey-rugs.jpg";
import img10 from "./assets/image/shop-by-color/ivory-rugs.jpg";
import img11 from "./assets/image/shop-by-color/khaki.jpg";
import img12 from "./assets/image/shop-by-color/multicolor-rugs.gif";
import img13 from "./assets/image/shop-by-color/orange-rugs.jpg";
import img14 from "./assets/image/shop-by-color/pink-rugs.jpg";
import img15 from "./assets/image/shop-by-color/purple-rugs.jpg";
import img16 from "../assets/image/shop-by-color/red-rugs.jpg";
import img17 from "./assets/image/shop-by-color/yellow-rugs.jpg";

import CarouselBySize from "./app/components/Carousel/CarouselBySize";
import CarouselByColor from "./app/components/Carousel/CarouselByColor";

function App() {
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
  const dataColor = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
  ];
  return (
    <div className="App">
      <Header />
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
            return <CardImage title={title} url={url} classname2 />;
          })}
        </div>
      </div>
      <div className="py-12 px-12 w-full h-[550px] ">
        <p className="font-mei text-3xl pb-4">Shop By Size</p>
        <CarouselBySize />
      </div>
      <div className="w-full h-[400] py-12 px-12">
        {dataColor.map(({img}) => {
          <CarouselByColor />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
