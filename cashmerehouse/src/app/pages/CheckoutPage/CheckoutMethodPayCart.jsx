/** @format */

import React from "react";
import { Icon } from "@iconify/react";
import { Divider } from "antd";
const CheckoutMethodPayCart = () => {
  return (
    <>
      <div className="border-2 border-blue-400  rounded-lg  w-[90%] mx-auto h-auto py-6  px-4 ">
        <div className="flex justify-between pb-2">
          <div className="flex items-center justify-start gap-x-6 ">
            <Icon
              icon="arcticons:momo"
              width={24}
              height={24}
              className="text-white bg-pink-700"
            ></Icon>
            <p className="tracking-widest">******5162</p>
          </div>
          <input type="radio"></input>
        </div>
        <Divider className="my-0 "></Divider>
        <div className="flex justify-start pt-4">
          <p className="">Wallet momo</p>
        </div>
      </div>
      <Divider className="my-2"></Divider>

      <div className="border-2 border-blue-400  rounded-lg  w-[90%] mx-auto h-auto py-6  px-4 ">
        <div className="flex justify-between pb-2">
          <div className="flex items-center justify-start gap-x-6 ">
            <Icon
              icon="ic:baseline-payment"
              width={24}
              height={24}
              className="text-white bg-blue-900"
            ></Icon>
            <p className="tracking-widest">Payment on delivery</p>
          </div>
          <input type="radio"></input>
        </div>
        <Divider className="my-0 "></Divider>
        <div className="flex justify-start pt-4">
          <p className="">Payment on delivery</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutMethodPayCart;
