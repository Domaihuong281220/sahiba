/** @format */

import React from "react";
import DeliveryOption from "./DeliveryOption";
import CheckoutCardItem from "./CheckoutCardItem";
import { Icon } from "@iconify/react";
const CheckoutCartProduct = () => {
  return (
    <div className="font-mar ">
      <div className="flex justify-between bg-slate-200 px-4 py-2">
        <p className="">Package 1 of 3</p>
        <div className="flex gap-x-1 ">
          <p className="">Delivered by</p>
          <p className="font-bold">Sahiba</p>
        </div>
      </div>
      <div className="flex justify-start">
        <p className="">Delivery options</p>
      </div>
      <DeliveryOption />
      <div className="flex justify-between items-center px-4">
        <CheckoutCardItem />
        <div className=" flex flex-col justify-center items-center gap-y-3">
          <p className="text-red-500">39.99$</p>
          <button>
            <Icon
              icon="material-symbols:delete-outline"
              width={24}
              height={24}
            ></Icon>
          </button>
        </div>
        <p className="">Quantity : 1</p>
      </div>
    </div>
  );
};

export default CheckoutCartProduct;
