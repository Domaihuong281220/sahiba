/** @format */
import { useState, createContext } from "react";

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

// Image Product Ginger
import imageGinger_01 from "../../../assets/image/ginger-homedecor/ginger_1.webp";
import imageGinger_02 from "../../../assets/image/ginger-homedecor/ginger_2.webp";
import imageGinger_03 from "../../../assets/image/ginger-homedecor/ginger_3.webp";
import imageGinger_04 from "../../../assets/image/ginger-homedecor/ginger_4.webp";
import imageGinger_05 from "../../../assets/image/ginger-homedecor/ginger_5.webp";
import imageGinger_06 from "../../../assets/image/ginger-homedecor/ginger_6.webp";
import imageGinger_07 from "../../../assets/image/ginger-homedecor/ginger_7.webp";
import imageGinger_08 from "../../../assets/image/ginger-homedecor/ginger_8.webp";
import imageGinger_09 from "../../../assets/image/ginger-homedecor/ginger_9.webp";
import imageGinger_10 from "../../../assets/image/ginger-homedecor/ginger_10.webp";

// Image Product Human
import imageHuman_01 from "../../../assets/image/human/human_01.webp";
import imageHuman_02 from "../../../assets/image/human/human_02.webp";
import imageHuman_03 from "../../../assets/image/human/human_03.webp";
import imageHuman_04 from "../../../assets/image/human/human_04.webp";
import imageHuman_05 from "../../../assets/image/human/human_05.webp";
import imageHuman_06 from "../../../assets/image/human/human_06.webp";
// Image Product Bookend
import imageBookend_01 from "../../../assets/image/booked/booken_01.webp";
import imageBookend_02 from "../../../assets/image/booked/booken_02.webp";
import imageBookend_03 from "../../../assets/image/booked/booken_04.webp";
import imageBookend_04 from "../../../assets/image/booked/booken_05.webp";
import imageBookend_05 from "../../../assets/image/booked/booken_01.webp";
import imageBookend_06 from "../../../assets/image/booked/booken_06.webp";
// Image Product Vases
import imageVase_01 from "../../../assets/image/vases/vase_01.webp";
import imageVase_02 from "../../../assets/image/vases/vase_02.webp";
import imageVase_03 from "../../../assets/image/vases/vase_03.webp";
import imageVase_04 from "../../../assets/image/vases/vase_04.webp";
import imageVase_05 from "../../../assets/image/vases/vase_05.webp";
import imageVase_06 from "../../../assets/image/vases/vase_06.webp";
// Image Candle
import imageCandle_01 from "../../../assets/image/candle/candle_01.webp";
import imageCandle_02 from "../../../assets/image/candle/candle_02.webp";
import imageCandle_03 from "../../../assets/image/candle/candle_03.webp";
import imageCandle_04 from "../../../assets/image/candle/candle_04.webp";
import imageCandle_05 from "../../../assets/image/candle/candle_05.webp";
import imageCandle_06 from "../../../assets/image/candle/candle_06.webp";
// Image Storage
import imageStorage_01 from "../../../assets/image/storage/storage_01.webp";
import imageStorage_02 from "../../../assets/image/storage/storage_02.webp";
import imageStorage_03 from "../../../assets/image/storage/storage_03.webp";
import imageStorage_04 from "../../../assets/image/storage/storage_04.webp";
import imageStorage_05 from "../../../assets/image/storage/storage_05.webp";
import imageStorage_06 from "../../../assets/image/storage/storage_06.webp";

import CategoryEclipse from "../../components/CategoryEclipse/CategoryEclipse";
import CarouselSlider from "../../components/Carousel/CarouselSlider";
import banner_01 from "../../../assets/image/banner-homedecor/Wall-Decor-1.webp";
import banner_02 from "../../../assets/image/banner-homedecor/Wall-Decor-2.webp";
import banner_03 from "../../../assets/image/banner-homedecor/Wall-Decor-3.webp";
import banner_04 from "../../../assets/image/banner-homedecor/Wall-Decor-4_27226737-f9c1-49f7-9bb5-ad99b92a01fc.webp";
import banner_bottom from "../../../assets/image/2800x1400_2000x.webp";

import TabComponent from "../../components/TabComponent/TabComponent";

import AcconrdionComponent from "../../components/Acconrdion/AcconrdionComponent";
import CardProduct from "../../components/CardProduct/CardProduct";

export const GingerContext = createContext();
export const HumanContext = createContext();

export const BookendContext = createContext();

export const VaseContext = createContext();

export const CandleContext = createContext();
export const StorageContext = createContext();

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
  const [DataProductGinGer, setDataProductGinGer] = useState([
    {
      url: imageGinger_01,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_02,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_03,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_04,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_05,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_06,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_07,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_08,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_09,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageGinger_10,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
  ]);
  const [DataHuman, setDataHuman] = useState([
    {
      url: imageHuman_01,
      title: "The Blues - Musician Playing Clarinet Bust",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageHuman_02,
      title: "The Blues - Musician Playing Clarinet Bust",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageHuman_03,
      title: "'The Blues - Musician Playing Clarinet Bust",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageHuman_04,
      title: "The Blues - Musician Playing Clarinet Bust",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageHuman_05,
      title: "The Blues - Musician Playing Clarinet Bust",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageHuman_06,
      title: "The Blues - Musician Playing Clarinet Bust",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
  ]);
  const [DataBookend, setDataBookend] = useState([
    {
      url: imageBookend_01,
      title: "'Thoughtful' Silver Bookends",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageBookend_02,
      title: "'Thoughtful' Silver Bookends",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageBookend_03,
      title: "'Thoughtful' Silver Bookends",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageBookend_04,
      title: "'Thoughtful' Silver Bookends",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageBookend_05,
      title: "'Thoughtful' Silver Bookends",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageBookend_06,
      title: "'Thoughtful' Silver Bookends",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
  ]);
  const [DataVases, setDataVases] = useState([
    {
      url: imageVase_01,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageVase_02,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageVase_03,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageVase_04,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageVase_05,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageVase_06,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
  ]);
  const [DataCandle, setDataCandle] = useState([
    {
      url: imageCandle_01,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },

    {
      url: imageCandle_02,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },

    {
      url: imageCandle_03,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },

    {
      url: imageCandle_04,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },

    {
      url: imageCandle_05,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },

    {
      url: imageCandle_06,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
  ]);
  const [DataStorage, setDataStorage] = useState([
    {
      url: imageStorage_01,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageStorage_02,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageStorage_03,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageStorage_04,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageStorage_05,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
    {
      url: imageStorage_06,
      title: "'Renshaw' Temple Jar",
      price: "1800$",
      description: "Dimensions: 23 cm x 23 cm x 45 cm (LxWxH)",
    },
  ]);
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
      <HumanContext.Provider value={DataHuman}>
        <GingerContext.Provider value={DataProductGinGer}>
          <BookendContext.Provider value={DataBookend}>
            <CandleContext.Provider value={DataCandle}>
              <VaseContext.Provider value={DataVases}>
                <StorageContext.Provider value={DataStorage}>
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
                    <TabComponent />
                  </div>
                  <div className="w-full h-auto  py-10">
                    <img src={banner_02}></img>
                    <TabComponent />
                  </div>
                  <div className="w-full h-auto  py-10">
                    <img src={banner_01}></img>
                    <TabComponent />
                  </div>

                  {/* start fillter product */}
                  <div className="grid grid-cols-4 py-8">
                    <div className="pl-8 w-full h-full font-mar">
                      <p className="text-2xl font-mar">FILTERS</p>
                      {list.map((item, key) => {
                        return <AcconrdionComponent key={key} datas={item} />;
                      })}
                    </div>
                    <div className="h-full w-full flex flex-wrap justify-center gap-x-20 gap-y-10 col-span-3 ">
                      {DataProductGinGer.map(
                        ({ url, title, price, description }) => {
                          return (
                            <CardProduct
                              url={url}
                              title={title}
                              price={price}
                              description={description}
                            />
                          );
                        }
                      )}
                    </div>
                  </div>
                  {/* end filter product */}

                  {/* start banner bottom */}
                  <div className="w-full h-[600px] relative">
                    <div className="absolute w-8/12 h-full">
                      <img src={banner_bottom} className="w-full h-full"></img>
                    </div>
                    <div
                      className=" absolute bg-white w-[500px] h-[360px] top-40 right-60 flex flex-col justify-center items-center
                    "
                    >
                      <p className="font-mar text-2xl">Delicately Crafted</p>
                      <p className="font-mar text-xl">
                        At The Decor Kart, we design with purpose and craft with
                        beauty in mind. Every product is a blend of the mind and
                        the soul, it's a fusion of sense and sensuous. Our craft
                        contains both our view of the world and our place in it;
                        Our Purpose
                      </p>
                    </div>
                  </div>
                  {/* end banner */}
                </StorageContext.Provider>
              </VaseContext.Provider>
            </CandleContext.Provider>
          </BookendContext.Provider>
        </GingerContext.Provider>
      </HumanContext.Provider>
    </>
  );
};

export default ProductFurniturePage;
