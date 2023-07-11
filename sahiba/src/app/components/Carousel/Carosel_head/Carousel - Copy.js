/** @format */

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Typography, Button } from "@material-tailwind/react";
import "./style.css";
function Carousel_Copy({ autoSlide = false, autoSlideInterval = 3000 }) {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1603913996638-c01100417b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

    {
      url: "https://images.unsplash.com/photo-1546550879-3b71f2427ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
      >
      </div>
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            A Life To Your Home
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            With the finest handmade carpet and rugs for contemporary living
            spaces
          </Typography>
          <div className="flex justify-center ">
            <Button className="text-white bg-black h-[50] w-[100] rounded-lg">
              SHOP NOW
            </Button>
          </div>
        </div>
        <p className="trycarosel"> Try the div carosel</p>
        <p className="trycarosel"> Try the div carosel</p>
        <p className="trycarosel"> Try the div carosel</p>
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
}

export default Carousel_Copy;
