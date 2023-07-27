/** @format */

import React from "react";
import { Icon } from "@iconify/react";

const DeliveryOption = () => {
  return (
    <div>
      <div className=" flex justify-start items-start gap-x-2 border-2 border-orange-300 h-auto w-3/12 rounded-lg pt-3 pl-3 ">
        <div className="h-6 w-6  rounded-full bg-green-700 flex items-center justify-center">
          <Icon icon="typcn:tick" className="text-white"></Icon>
        </div>
        <div className="flex flex-col items-start ">
          <p className="">2$</p>
          <p className="">Standard Delivery</p>
          <p className="">Recevie on,July 27, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
