/** @format */

import React from "react";
import { Icon } from "@iconify/react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Divider } from "antd";
const ProductView = () => {
  return (
    <div className=" w-full h-full bg-gray-100 flex flex-col gap-y-5">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <a
            href="/dashboard"
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>

            <p className="">Admin</p>
          </a>
          <a href="#" className="hover:font-bold hover:text-blue-400">
            E-Commerce
          </a>
          <a href="#" className="hover:font-bold hover:text-blue-400">
            ProductManage
          </a>
          <a href="#" className="font-bold text-blue-400">
            ProductView
          </a>
        </Breadcrumbs>
      </div>
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1 flex ">
        <div className="w-full h-auto flex justify-center items-center  border-2 border-gray-200 shadow-2xl m-8 rounded-xl">
          <img
            src="https://www.artcarpet.com/assets/images/about-us.jpg"
            className="w-[90%] h-auto m-4"
          ></img>
        </div>
        <div className="w-full h-auto border-2 border-gray-200 shadow-2xl m-8 rounded-xl">
          <div className="flex justify-start p-2">
            <p className="text-lg font-bold">Carpet Sahiba</p>
          </div>
          <div className="flex justify-start px-2">
            <p className="text-gray-500 ">Categories : {"Carpet"}</p>
          </div>
          <Divider></Divider>
          <div className="flex flex-col  items-start px-2">
            <p className="text-lg font-bold">Price</p>
            <p className="">$29.9</p>
          </div>
          <Divider></Divider>

          <div className="flex flex-col  items-start px-2">
            <p className="text-lg font-bold">Quatity</p>
            <p className="">100</p>
          </div>
          <Divider></Divider>

          <div className="flex flex-col  items-start px-2">
            <p className="text-lg font-bold">Description</p>
            <div className="flex justify-start items-start">
              <p className="text-left">
                Brand ASUS Processor Intel Core i5-10210U 10th Gen CPU Cache 6MB
                Ram 4GB DDR4 Ram Details 1 x 4 GB Non-Removable Expansion Ram
                Slot1 Storage 512GB PCIE G3 SSD Display 15.6 FHD Antiglare LED
                DisplayResolution 1920×1080 (WxH) FHD Optical Device No Graphics
                Chipset Nvidia MX250 Graphics Graphics Memory 2GB Networking
                WiFi,Bluetooth, Card Reader USB Port 1x USB 3.2 Gen 1 Type-A, 1x
                USB3.2 Gen 1 Type-C Video Port HDMI Audio Port Combo Finger
                Print YesKeyboard Back-lit Yes Operating System Win-10 Home
                Battery 2 CellLi-Ion Power Adapter 65 W AC power adapter
                Specialty Finger PrintSensor, Backlit Keyboard, Voice control
                with Cortana support, BIOSBooting User Password Protection,
                Fingerprint sensor intergrated200nits, Aspect ratio: 16:9, Color
                gamut NTSC: 45%, Screen-to-bodyratio: 88%, Output: 19V DC,
                3.42A, 65W, Input: 100-240V AC 50/60Hzuniversal Warranty 2 years
              </p>
            </div>
          </div>
          <Divider></Divider>
        </div>
      </div>
      <a className="" href="/userlist">
        <button className="w-auto h-auto p-2 bg-blue-400 rounded-lg">
          <p className=""> back</p>
        </button>
      </a>
    </div>
  );
};

export default ProductView;
