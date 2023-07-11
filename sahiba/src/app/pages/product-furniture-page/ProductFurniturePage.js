/** @format */

import React from "react";
import CarouselFurniture from "../../components/Carousel/CarouselFurniture";
import imageCategory1 from "../../../assets/image/categories-furniture/new_arrivals.webp";
import imageCategory2 from "../../../assets/image/categories-furniture/best_seller.webp";
import imageCategory3 from "../../../assets/image/categories-furniture/decor.webp";
import imageCategory4 from "../../../assets/image/categories-furniture/kitchen.webp";
import imageCategory5 from "../../../assets/image/categories-furniture/lighting.webp";
import imageCategory6 from "../../../assets/image/categories-furniture/walldecor.webp";
import imageSection1 from "../../../assets/image/Section1_600x.webp";
import imageSection2 from "../../../assets/image/Section2_600x.webp";
import imageSection3 from "../../../assets/image/Section3_600x.webp";
import imageSection4 from "../../../assets/image/Section4_600x.webp";
import CategoryEclipse from "../../components/CategoryEclipse/CategoryEclipse";
import CarouselSlider from "../../components/Carousel/CarouselSlider";
import banner_01 from "../../../assets/image/banner-homedecor/Wall-Decor-1.webp";
import banner_02 from "../../../assets/image/banner-homedecor/Wall-Decor-2.webp";
import banner_03 from "../../../assets/image/banner-homedecor/Wall-Decor-3.webp";
import banner_04 from "../../../assets/image/banner-homedecor/Wall-Decor-4_27226737-f9c1-49f7-9bb5-ad99b92a01fc.webp";
import TabComponent from "../../components/TabComponent/TabComponent";

const ProductFurniturePage = () => {
  const CategoryData = [
    {
      title: "New Arrivals",
      url: imageCategory1,
    },
    {
      title: "Best Seller",
      url: imageCategory2,
    },
    {
      title: "Decor",
      url: imageCategory3,
    },
    {
      title: "Kitchen",
      url: imageCategory4,
    },
    {
      title: "Lighting",
      url: imageCategory5,
    },
    {
      title: "Wall decor",
      url: imageCategory6,
    },
  ];
  return (
    <>
      <CarouselFurniture autoSlide={true} />
      <div className="flex items-center justify-center gap-x-28 py-16">
        {CategoryData.map(({ title, url }) => {
          return <CategoryEclipse title={title} url={url} />;
        })}
      </div>
      <div className="w-full h-auto pb-10">
        <CarouselSlider />
      </div>
      <div className="flex items-center justify-center h-[500px] w-full gap-x-10">
        <div className=" h-[380px] w-[280px] hover:h-[400px] hover:w-[300px] duration-500">
          <img src={imageSection1}></img>
        </div>
        <div className=" h-[380px] w-[280px] hover:h-[400px] hover:w-[300px] duration-500">
          <img src={imageSection2}></img>
        </div>
        <div className=" h-[380px] w-[280px] hover:h-[400px] hover:w-[300px] duration-500">
          <img src={imageSection3}></img>
        </div>
        <div className=" h-[380px] w-[280px] hover:h-[400px] hover:w-[300px] duration-500">
          <img src={imageSection4}></img>
        </div>
      </div>

      <div className="w-full h-auto  py-10">
        <img src={banner_04}></img>
        <TabComponent />
      </div>
      <div className="w-full h-auto  py-10">
        <img src={banner_03}></img>
      </div>
      <div className="w-full h-auto  py-10">
        <img src={banner_02}></img>
      </div>
      <div className="w-full h-auto  py-10">
        <img src={banner_01}></img>
      </div>
    </>
  );
};

export default ProductFurniturePage;
