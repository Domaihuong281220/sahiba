/** @format */

import React from "react";
import "react-gallery-carousel/dist/index.css";
import Carousel from "react-gallery-carousel";
import { Icon } from "@iconify/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
const ProductDetailPage = () => {
  const imageProduct = [
    {
      src: "https://salt.tikicdn.com/cache/750x750/ts/product/08/53/41/d9e40816204d30933023080edb32ddbd.jpg.webp",
    },
    {
      src: "https://salt.tikicdn.com/cache/750x750/ts/product/81/13/e5/958db7f388462d0925a11547426e8d87.jpg.webp",
    },
    {
      src: "https://salt.tikicdn.com/cache/750x750/ts/product/c0/b8/43/f13f9a34850540acb09f1b47879c884e.jpg.webp",
    },
    {
      src: "https://salt.tikicdn.com/cache/750x750/ts/product/83/e3/63/4c42297642118e0872610fb42d0371c4.jpg.webp",
    },
    {
      src: "https://salt.tikicdn.com/cache/750x750/ts/product/72/8e/2f/5d8a00016deda36bec3231627dba815c.jpg.webp",
    },
  ];

  const testData = [{ bgcolor: "#ef6c00", completed: 53 }];
  const countComment = [1, 2, 3, 4, 5];
  return (
    <div className=" ">
      {/* Image Product and Infomation Product */}
      <div className="flex p-8 gap-x-16 h-[700px]">
        <div className="w-6/12 ">
          <Carousel
            images={imageProduct.map((src) => {
              return src;
            })}
            shouldMaximizeOnClick={true}
            shouldMinimizeOnClick={true}
            hasIndexBoard={false}
            hasSizeButton={false}
            hasMediaButton={false}
            widgetsHasShadow={true}
          ></Carousel>
        </div>
        <div className="w-6/12 flex flex-col gap-y-10 overflow-y-scroll pb-5 h-auto">
          <div className="flex justify-start items-start pt-4">
            <p className="text-3xl font-bold">
              ARTISAN SOFT CAMEL BURGUNDY RED
            </p>
          </div>

          <div className="flex ">
            <Icon
              icon="ic:baseline-star"
              className="text-yellow-300 text-2xl"
            ></Icon>
            <Icon
              icon="ic:baseline-star"
              className="text-yellow-300 text-2xl"
            ></Icon>
            <Icon
              icon="ic:baseline-star"
              className="text-yellow-300 text-2xl"
            ></Icon>
            <Icon
              icon="ic:baseline-star"
              className="text-yellow-300 text-2xl"
            ></Icon>
            <Icon
              icon="ic:baseline-star"
              className="text-yellow-300 text-2xl"
            ></Icon>
            <p className="">{"(5)"}</p>
          </div>
          <div className="flex gap-x-4 pt-4">
            <p className="text-2xl">Price:</p>
            <p className="text-2xl">1000$</p>
          </div>

          <div className="">
            <div className="flex gap-x-4 pt-10">
              <p className="text-2xl">Size:</p>
              <div className=" flex gap-x-8 w-full flex-wrap gap-y-4">
                <button className="w-40 h-12 bg-[#936708] rounded-xl hover:bg-[#a67409] ">
                  <p className="text-white">8x10 ft</p>
                </button>
                <button className="w-40 h-12 bg-[#936708] rounded-xl hover:bg-[#a67409]">
                  <p className="text-white">8x10 ft</p>
                </button>
                <button className="w-40 h-12 bg-[#936708] rounded-xl hover:bg-[#a67409]">
                  <p className="text-white">8x10 ft</p>
                </button>
                <button className="w-40 h-12 bg-[#936708] rounded-xl hover:bg-[#a67409]">
                  <p className="text-white">8x10 ft</p>
                </button>
                <button className="w-40 h-12 bg-[#936708] rounded-xl hover:bg-[#a67409]">
                  <p className="text-white">8x10 ft</p>
                </button>
                <button className="w-40 h-12 bg-[#936708] rounded-xl hover:bg-[#a67409]">
                  <p className="text-white">8x10 ft</p>
                </button>
                <button className="w-40 h-12 bg-[#936708] rounded-xl hover:bg-[#a67409]">
                  <p className="text-white">8x10 ft</p>
                </button>
              </div>
            </div>
            <div className=" flex justify-start gap-x-4 pt-10  items-center">
              <input
                className="border-2 border-black h-10 w-96 rounded-xl px-2"
                placeholder="Enter code free ship VietNam"
              ></input>
              <button className="bg-orange-300 w-24 h-10 hover:bg-orange-400  rounded-xl">
                Enter code
              </button>
            </div>

            <div className="flex pt-20 gap-x-20 pr-4">
              <div className=" flex  gap-x-4 ">
                <p className="text-2xl">Quantity:</p>
                <div className="w-20">
                  <NumberInput
                    className="w-full h-[40px] border-4 border-black rounded-xl"
                    defaultValue={1}
                    min={0}
                  >
                    <NumberInputField className="h-[30px] rounded-xl pl-2 " />
                    <NumberInputStepper className="flex justify-center items-center">
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
              </div>

              <button className="bg-orange-200  h-auto  w-[300px]  flex justify-center items-center rounded-xl hover:bg-orange-300 gap-x-2">
                <Icon icon="bx:cart-add"></Icon>
                <p className=""> Add To Cart</p>
              </button>
              <button className=" bg-green-200 h-auto  w-[300px] flex justify-center items-center rounded-xl hover:bg-green-300 gap-x-2">
                <Icon icon="bxs:cart-add"></Icon>
                <a className="" href="/cart">
                  <p className=""> Buy Now</p>
                </a>
              </button>
            </div>

            <div className="pt-20">
              <div className="flex flex-col justify-start items-start">
                <p className="text-xl">Free Shipping All Over Viet Nam</p>
                <p className="text-xl">Same-Day Dispatch</p>
                <p className="text-xl">
                  Hassle free return within 7 days of receipt
                </p>
              </div>
              <div className="flex items-center gap-x-80 pt-10">
                <p className="text-lg">Contact Us</p>
                <div className="flex item items-center gap-x-4 ">
                  <Icon icon="ic:baseline-phone" fontSize={24}></Icon>
                  <p className="text-lg">+0123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Infomation bonus Product  */}
      <div className="pt-40 h-[600px]">
        <Tabs>
          <TabList className="flex justify-center items-center gap-x-3  px-6 border-b-2 border-orange-300 ">
            <Tab className="w-full h-auto  py-2 px-2 hover:border-b-4 hover:border-orange-300  focus:border-orange-300  focus:border-b-4 text-xl ">
              The Details
            </Tab>
            <Tab className="w-full h-auto  py-2 px-2 hover:border-b-4 hover:border-orange-300  focus:border-orange-300  focus:border-b-4 text-xl">
              Shipping And Delivery
            </Tab>
            <Tab className="w-full h-auto  py-2 px-2 hover:border-b-4 hover:border-orange-300  focus:border-orange-300  focus:border-b-4 text-xl">
              Care and Repair
            </Tab>
            <Tab className="w-full h-auto  py-2 px-2 hover:border-b-4 hover:border-orange-300  focus:border-orange-300  focus:border-b-4 text-xl">
              Why Sahiba ?
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="px-10 py-4">
              <div className="flex ">
                <p className="h-auto p-8">
                  Introducing the Abstract Hattie Rug - a contemporary
                  masterpiece hand-tufted with precision and care. This rug
                  boasts a stunning abstract art design with bold and vibrant
                  horizontal lines in rust, coral, ivory, and grey hues set
                  against a neutral grey background, perfect for any modern
                  interior. Made with premium quality materials, this rug is not
                  only durable but also incredibly soft to the touch. Its
                  versatile design makes it ideal for both indoor and outdoor
                  use, making it a practical and stylish addition to any living
                  space. Bring home the Abstract Hattie Rug and elevate your
                  home decor game.
                </p>
              </div>
            </TabPanel>
            <TabPanel className="px-10 py-4 ">
              <div className=" flex flex-col items-start">
                <li> 
                  Free Shipping is available in india, Shipping charges for
                  international Delivery will be charged at Checkout.
                </li>
                <li>Same day dispatch</li>
                <li>
                  ispatch Estimated Delivery time 5-7 Business Days for all over
                  India and 1-2 Weeks for international Deliveries ( In some
                  cases Custom Clearance might take longer)
                </li>
                <li>
                  In case of Return, The item should be returned within 7 days
                  of the receipt
                </li>
              </div>
            </TabPanel>
            <TabPanel className="px-10 py-4">
              <div className="">
                <p className="">
                  Vacuum once a week. Gently brush surface to remove dust. Blot
                  with paper & remove spills immediately. Use professional
                  carpet cleaning services only. *Please note: Colors may differ
                  slightly due to photography lighting and screen variations.
                </p>
              </div>
            </TabPanel>
            <TabPanel className="px-10 py-4">
              <p className="">
                We are India's largest handmade carpet manufacturing company in
                Mirzapur, located on the banks of the Ganges on the ancient
                Grand Trunk Road where for centuries, artisans have woven a long
                and distinguished reputation for excellence. For over a century
                we've chosen to be handmade while collaborating with weavers in
                their homes to keep the age-old skill of weaving a carpet alive.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="pl-[5%] justify-start flex">
        <p className="text-2xl font-mar">Comments and rating customer</p>
      </div>
      <div className=" mx-auto h-auto  ">
        <div className=" h-auto flex w-[90%] mx-auto py-4">
          <div className=" h-auto w-4/12">
            <div className="flex gap-x-2 ">
              <p className="text-4xl">4</p>
              <div className="flex gap-x-3 items-center flex-col">
                <div className="flex">
                  <Icon
                    icon="ic:baseline-star"
                    className="text-yellow-300 text-lg"
                  ></Icon>
                  <Icon
                    icon="ic:baseline-star"
                    className="text-yellow-300 text-lg"
                  ></Icon>
                  <Icon
                    icon="ic:baseline-star"
                    className="text-yellow-300 text-lg"
                  ></Icon>
                  <Icon
                    icon="ic:baseline-star"
                    className="text-yellow-300 text-lg"
                  ></Icon>
                  <Icon
                    icon="ic:baseline-star"
                    className="text-yellow-300 text-lg"
                  ></Icon>
                </div>
                <p className="">180 reviews</p>
              </div>
            </div>
            <div className="flex pt-3 items-center">
              <div className=" flex items-center pr-5">
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
              </div>

              <div className="w-[200px] pr-4">
                <ProgressBar bgcolor="#a67409" completed={66.66} />
              </div>

              <p className="">120 review</p>
            </div>

            <div className="flex pt-3 items-center">
              <div className=" flex items-center pr-5">
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon icon="ic:baseline-star" className=" text-lg"></Icon>
              </div>

              <div className="w-[200px] pr-4">
                <ProgressBar bgcolor="#a67409" completed={22.22} />
              </div>

              <p className="">40 review</p>
            </div>

            <div className="flex pt-3 items-center">
              <div className=" flex items-center pr-5">
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon icon="ic:baseline-star" className=" text-lg"></Icon>
                <Icon icon="ic:baseline-star" className="text-lg"></Icon>
              </div>

              <div className="w-[200px] pr-4">
                <ProgressBar bgcolor="#a67409" completed={5.55} />
              </div>

              <p className="">10 review</p>
            </div>
            <div className="flex pt-3 items-center">
              <div className=" flex items-center pr-5">
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon icon="ic:baseline-star" className=" text-lg"></Icon>
                <Icon icon="ic:baseline-star" className=" text-lg"></Icon>
                <Icon icon="ic:baseline-star" className="text-lg"></Icon>
              </div>

              <div className="w-[200px] pr-4">
                <ProgressBar bgcolor="#a67409" completed={5.55} />
              </div>

              <p className="">10 review</p>
            </div>
            <div className="flex pt-3 items-center">
              <div className=" flex items-center pr-5">
                <Icon
                  icon="ic:baseline-star"
                  className="text-yellow-300 text-lg"
                ></Icon>
                <Icon icon="ic:baseline-star" className=" text-lg"></Icon>
                <Icon icon="ic:baseline-star" className=" text-lg"></Icon>
                <Icon icon="ic:baseline-star" className=" text-lg"></Icon>
                <Icon icon="ic:baseline-star" className="text-lg"></Icon>
              </div>

              <div className="w-[200px] pr-4">
                <ProgressBar bgcolor="#a67409" completed={0} />
              </div>

              <p className="">0 review</p>
            </div>
          </div>
          <div className=" h-auto w-8/12">
            <p> All Image of Products {"30"}</p>
            <div className="flex gap-x-5 justify-center">
              <img
                src="https://d1aakab6fw0jox.cloudfront.net/assets/uploads/product/thumb/FC34BT0810_MAIN.jpg"
                className="w-[200px] h-[200px]"
              ></img>
              <img
                src="https://d1aakab6fw0jox.cloudfront.net/assets/uploads/product/thumb/FC34TB0810_MAIN.jpg"
                className="w-[200px] h-[200px]"
              ></img>
              <img
                src="https://d1aakab6fw0jox.cloudfront.net/assets/uploads/product/thumb/ANQ30203_MAIN.jpg"
                className="w-[200px] h-[200px]"
              ></img>
              <img
                src="https://d1aakab6fw0jox.cloudfront.net/assets/uploads/product/thumb/ANQ-97_WOOD_BROWN_listing.jpg"
                className="w-[200px] h-[200px]"
              ></img>
              <div className="relative w-[200px] h-[200px]">
                <img
                  src="https://d1aakab6fw0jox.cloudfront.net/assets/uploads/product/thumb/ANQ-2_GRAY_BEIGE_MAIN.jpg"
                  className="w-[200px] h-[200px] opacity-60"
                ></img>
                <p className="text-white font-bold absolute top-[40%] left-[40%] text-3xl">
                  26+
                </p>
              </div>
            </div>
          </div>
        </div>

        {countComment.map((index) => {
          return (
            <div className="">
              <div className=" h-[1px] bg-gray-400 w-[90%] mx-auto"></div>
              <div className=" h-auto flex w-[90%] mx-auto py-4">
                <div className=" h-auto w-4/12">
                  <div className="flex gap-x-2 ">
                    <div className="bg-black w-10 h-10 rounded-full">
                      <img
                        className="rounded-full"
                        src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/358426598_2591685974323836_1502708765590252543_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=raxb1k8lL7IAX8zYacJ&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfA-YYMDqhFdQx-skx5f3km-hSbbTd6YQ5Gx21H5l3Nb6Q&oe=64BFEDE8"
                      ></img>
                    </div>
                    <div className="flex gap-x-3 items-start flex-col justify-start">
                      <p className="text-gray-600">Nguyễn Văn Tây </p>
                      <p className="text-gray-600">Đã tham gia 3 năm trước</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-x-2">
                    <Icon icon="carbon:review" className="text-gray-600"></Icon>
                    <p className="text-gray-600">Đã Viết : 8 Đánh giá</p>
                  </div>
                  <div className="flex justify-start items-center gap-x-2">
                    <Icon
                      icon="mdi:like-outline"
                      className="text-gray-600"
                    ></Icon>
                    <p className="text-gray-600">Đã nhận : 0 lượt cảm ơn</p>
                  </div>
                </div>
                <div className="h-auto w-8/12">
                  <div className="flex items-center gap-x-3">
                    <div className="flex ">
                      <Icon
                        icon="fluent:star-24-filled"
                        className="text-yellow-500"
                      ></Icon>
                      <Icon
                        icon="fluent:star-24-filled"
                        className="text-yellow-500"
                      ></Icon>{" "}
                      <Icon
                        icon="fluent:star-24-filled"
                        className="text-yellow-500"
                      ></Icon>{" "}
                      <Icon
                        icon="fluent:star-24-filled"
                        className="text-yellow-500"
                      ></Icon>{" "}
                      <Icon icon="fluent:star-24-filled" className=""></Icon>
                    </div>
                    <p className="text-xl">Hài Lòng</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <Icon
                      icon="fluent-mdl2:completed-solid"
                      className="text-green-600"
                    ></Icon>
                    <p className="text-green-600">Đã mua hàng</p>
                  </div>
                  <div className="flex justify-start py-5">
                    <p className="text-lg">
                      Thảm đẹp, chất lượng . Giao Hàng nhanh tiết kiệm , sẽ quay
                      lại ủng hộp cửa hàng.
                    </p>
                  </div>
                  <div className=" flex justify-center items-center gap-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-[200px] h-[200px]"
                    ></img>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1677620110079-ecc071b44991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      className="w-[200px] h-[200px]"
                    ></img>
                    <img
                      src="https://images.unsplash.com/photo-1564444247765-a377a8bfd0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      className="w-[200px] h-[200px]"
                    ></img>
                    <img
                      src="https://images.unsplash.com/photo-1606121156579-da13cfab2731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      className="w-[200px] h-[200px]"
                    ></img>
                  </div>
                  <div className="flex justify-center items-center gap-x-5 pt-5">
                    <p className="text-gray-600">
                      {" "}
                      Đánh giá vào 1 ngày trước .
                    </p>
                    <p className="text-gray-600"> {"Đã dùng một ngày trước"}</p>
                  </div>
                  <div className="flex justify-center items-center gap-x-8 pt-5">
                    <button className="w-[100px] h-[40px] border-2 border-blue-500 flex  items-center justify-center gap-x-2 rounded-xl hover:bg-blue-500">
                      <Icon icon="mdi:like-outline"></Icon>
                      <p className="">Hữu ích</p>
                    </button>
                    <button className="w-[100px] h-[40px] border-2 border-blue-500 flex  items-center justify-center gap-x-2 rounded-xl hover:bg-blue-500">
                      <Icon icon="material-symbols:comment-outline"></Icon>
                      <p className="">Đánh Giá</p>
                    </button>
                    <button className="w-[100px] h-[40px] border-2 border-blue-500 flex  items-center justify-center gap-x-2 rounded-xl hover:bg-blue-500">
                      <Icon icon="mdi:share-outline"></Icon>
                      <p className="">Chia Sẻ</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailPage;
