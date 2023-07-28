/** @format */

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Typography, Button } from "@material-tailwind/react";

const CarouselFurniture = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const slides = [
    {
      url: "https://faburaa.com/cdn/shop/files/Banner_1.jpg?v=1680279924&width=3000",
    },
    {
      url: "https://faburaa.com/cdn/shop/files/Banner_2_Cushion_cover.jpg?v=1680280410&width=3000",
    },
    {
      url: "https://faburaa.com/cdn/shop/files/Banner_3_V2.jpg?v=1680280641&width=3000",
    },

    {
      url: "https://faburaa.com/cdn/shop/files/Banner_4.jpg?v=1680280755&width=3000",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className=" h-[600px] w-full m-auto relative group font-mar">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full  bg-center bg-cover "
      ></div>
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            The Gypsy Oasis Collection
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            Inspired by tradition. Infused with modernity
          </Typography>
          <div className="flex justify-center ">
            <Button className="text-white bg-gradient-to-t from-black to-orange-500  hover:bg-gradient-to-l h-[50] w-[100] rounded-lg">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default CarouselFurniture;
