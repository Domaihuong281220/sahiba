/** @format */

import React from "react";
import CheckoutAdress from "./CheckoutAdress";
import CheckoutCartProduct from "./CheckoutCartProduct";
import { Divider } from "antd";
import { Icon } from "@iconify/react";
import CheckoutMethodPayCart from "./CheckoutMethodPayCart";
import { cartData } from "../CartPage/_data.js";
const CheckoutPage = () => {
  return (
    <div className="w-[80%] m-auto flex py-8 font-mar gap-x-2">
      <div className="w-8/12 rounded-lg">
        <CheckoutAdress />
        <Divider style={{ marginLeft: "0px" }}></Divider>
        <div className="overflow-y-scroll h-[600px] ">
          {cartData.map((item, index) => {
            return (
              <>
                <CheckoutCartProduct></CheckoutCartProduct>
                <Divider style={{ marginLeft: "0px" }}></Divider>
              </>
            );
          })}
        </div>
      </div>

      <div className="w-4/12 bg-blue-100 rounded-lg">
        <div className="flex justify-between px-2 pb-4 pt-4">
          <p className="">Choose payment method</p>
          <div className="text-blue-500 flex items-center justify-between  hover:text-blue-700 cursor-pointer">
            <p className=""> See All</p>
            <Icon icon="ep:arrow-right" width={20} height={20}></Icon>
          </div>
        </div>
        <CheckoutMethodPayCart />
        <div className="flex flex-col items-start px-4 pt-4">
          <p className="pb-2">DISCOUNT CODE</p>
          <div className="flex gap-x-1 w-full">
            <input
              type="text"
              className="rounded-lg w-full px-2"
              placeholder="Enter discount code"
            ></input>
            <button className=" rounded-lg h-auto w-auto p-2 bg-gradient-to-r from-orange-300 to-red-300 hover:bg-gradient-to-l text-white font-thin">
              APPLY
            </button>
          </div>
        </div>
        <Divider style={{ marginLeft: "0px" }}></Divider>
        <div className="flex justify-between px-4 pt-4">
          <p className="">Invoice contact information</p>
          <button className="w-auto h-auto p-1 ">
            <p className="text-blue-400 hover:text-blue-700">Edit</p>
          </button>
        </div>
        <div className="flex justify-start px-4 pb-4">
          <p className="">Order information</p>
        </div>
        <div className="flex justify-between px-4">
          <p className="">{"Provisional (4 items)"} </p>
          <p className=""> {"$1000"}</p>
        </div>
        <div className="flex justify-between px-4">
          <p className="">{"Shipping fee"} </p>
          <p className=""> {"$3"}</p>
        </div>
        <Divider style={{ marginLeft: "0px" }}></Divider>
        <div className=" flex justify-between px-4 pb-4">
          <p className="">Total</p>
          <p className="">{"$1003"}</p>
        </div>
        <div className="w-full">
          <button className="rounded-lg h-auto w-[90%] p-2 mx-auto bg-gradient-to-r from-orange-300 to-red-300 hover:bg-gradient-to-l text-white font-thin">
            ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
