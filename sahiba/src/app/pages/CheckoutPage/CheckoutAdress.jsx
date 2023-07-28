/** @format */

import React, { useState } from "react";
import { Drawer, Divider } from "antd";

const CheckoutAdress = () => {
  const [openAddress, setOpenAddress] = useState(false);
  const showDrawer = () => {
    setOpenAddress(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpenAddress(false);
  };
  const [placement, setPlacement] = useState("right");

  return (
    <div className="w-auto h-auto bg-gray-50 font-mar ">
      <div className="flex items-center justify-between bg-gray-100 py-2 px-4">
        <p className="">Delivery address</p>
        <button className="w-auto h-auto p-1 " onClick={showDrawer}>
          <p className="text-blue-400 hover:text-blue-700">Edit</p>
        </button>

        <Drawer
          title="Eidt Adress Delivery"
          placement={placement}
          width={500}
          onClose={onClose}
          open={openAddress}
          extra={
            <div className="w-full h-full border-2 border-blue-400  hover:bg-blue-400 p-1 rounded-lg hover: cursor-pointer">
              <button className="text-blue-300 hover:text-white ">
                Add new address
              </button>
            </div>
          }
        >
          <div className="font-mar border-2 border-blue-600 rounded-lg p-2">
            <div className="flex justify-start gap-x-4 ">
              <input type="radio"></input>
              <div className="flex justify-around gap-x-2">
                <p className="">Nguyen Van Tay</p>
                <p className="">0375875162</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-4 px-2 py-2">
              <button className="bg-green-400 rounded-lg text-white font-mar p-1">
                Office
              </button>
              <p className="text-sm">
                No. 58/19a Tan Lap Street 1, Hiep Phu Ward, District 9, Ho Chi
                Minh City, Hiep Phu Ward, District 9, Ho Chi Minh City
              </p>
            </div>
            <div className="">
              <p className="">
                area code : Ho Chi Minh - District 9 - Hiep Phu Ward
              </p>
            </div>
            <div className="flex justify-between px-4">
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default payment address</p>
              </div>
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default shipping address</p>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="font-mar border-2 border-blue-600 rounded-lg p-2">
            <div className="flex justify-start gap-x-4 ">
              <input type="radio"></input>
              <div className="flex justify-around gap-x-2">
                <p className="">Nguyen Van Tay</p>
                <p className="">0375875162</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-4 px-2 py-2">
              <button className="bg-orange-400 rounded-lg text-white font-mar p-1">
                Home
              </button>
              <p className="text-sm">
                No. 58/19a Tan Lap Street 1, Hiep Phu Ward, District 9, Ho Chi
                Minh City, Hiep Phu Ward, District 9, Ho Chi Minh City
              </p>
            </div>
            <div className="">
              <p className="">
                area code : Ho Chi Minh - District 9 - Hiep Phu Ward
              </p>
            </div>
            <div className="flex justify-between px-4">
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default payment address</p>
              </div>
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default shipping address</p>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="font-mar border-2 border-blue-600 rounded-lg p-2">
            <div className="flex justify-start gap-x-4 ">
              <input type="radio"></input>
              <div className="flex justify-around gap-x-2">
                <p className="">Nguyen Van Tay</p>
                <p className="">0375875162</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-4 px-2 py-2">
              <button className="bg-orange-400 rounded-lg text-white font-mar p-1">
                Home
              </button>
              <p className="text-sm">
                No. 58/19a Tan Lap Street 1, Hiep Phu Ward, District 9, Ho Chi
                Minh City, Hiep Phu Ward, District 9, Ho Chi Minh City
              </p>
            </div>
            <div className="">
              <p className="">
                area code : Ho Chi Minh - District 9 - Hiep Phu Ward
              </p>
            </div>
            <div className="flex justify-between px-4">
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default payment address</p>
              </div>
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default shipping address</p>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="font-mar border-2 border-blue-600 rounded-lg p-2">
            <div className="flex justify-start gap-x-4 ">
              <input type="radio"></input>
              <div className="flex justify-around gap-x-2">
                <p className="">Nguyen Van Tay</p>
                <p className="">0375875162</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-4 px-2 py-2">
              <button className="bg-orange-400 rounded-lg text-white font-mar p-1">
                Home
              </button>
              <p className="text-sm">
                No. 58/19a Tan Lap Street 1, Hiep Phu Ward, District 9, Ho Chi
                Minh City, Hiep Phu Ward, District 9, Ho Chi Minh City
              </p>
            </div>
            <div className="">
              <p className="">
                area code : Ho Chi Minh - District 9 - Hiep Phu Ward
              </p>
            </div>
            <div className="flex justify-between px-4">
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default payment address</p>
              </div>
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default shipping address</p>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="font-mar border-2 border-blue-600 rounded-lg p-2">
            <div className="flex justify-start gap-x-4 ">
              <input type="radio"></input>
              <div className="flex justify-around gap-x-2">
                <p className="">Nguyen Van Tay</p>
                <p className="">0375875162</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-4 px-2 py-2">
              <button className="bg-orange-400 rounded-lg text-white font-mar p-1">
                Home
              </button>
              <p className="text-sm">
                No. 58/19a Tan Lap Street 1, Hiep Phu Ward, District 9, Ho Chi
                Minh City, Hiep Phu Ward, District 9, Ho Chi Minh City
              </p>
            </div>
            <div className="">
              <p className="">
                area code : Ho Chi Minh - District 9 - Hiep Phu Ward
              </p>
            </div>
            <div className="flex justify-between px-4">
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default payment address</p>
              </div>
              <div className=" p-1 border-2 border-blue-400 rounded-lg">
                <p className="text-xs">Default shipping address</p>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-3">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-black to-gray-500 h-auto  p-2 rounded text-white w-full"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className=" bg-gradient-to-r from-orange-300 to-red-300 hover:bg-gradient-to-l w-full p-2 rounded text-white"
            >
              OK
            </button>
          </div>
        </Drawer>
      </div>
      <div className="flex items-center justify-start gap-x-3 py-2 px-2">
        <p className="">Nguyen Van Tay</p>
        <p className="">0375875162</p>
      </div>
      <div className="flex items-center justify-start gap-x-4 px-2 py-2">
        <button className="bg-orange-400 rounded-lg text-white font-mar p-1">
          Home
        </button>

        <p className="">
          No. 58/19a Tan Lap Street 1, Hiep Phu Ward, District 9, Ho Chi Minh
          City, Hiep Phu Ward, District 9, Ho Chi Minh City
        </p>
      </div>
    </div>
  );
};

export default CheckoutAdress;
