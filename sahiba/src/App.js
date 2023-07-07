/** @format */

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import DefaultLayout from "./app/Layouts/DefaultLayout";
import ProductCarpetPage from "./app/pages/product-carpet-page/ProductCarpetPage";

function App() {
  return (
    <div className="App">
      {/* <Header />
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
      </div> */}
      {/* start shop by weaving type */}
      {/* <div className="w-full py-4">
        <p className=" text-3xl font-medium pb-10 font-mei">
          Shop By Weaving Type
        </p>
        <div className="flex justify-center  ">
          {cardDataShopByWeavingType.map(({ title, url }) => {
            return <CardImage title={title} url={url} />;
          })}
        </div>
      </div> */}

      {/* start shop by style */}
      {/* <div className="w-full py-4 ">
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

      <Footer /> */}
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Router>
      {/* <ProductCarpetPage /> */}
    </div>
  );
}

export default App;
