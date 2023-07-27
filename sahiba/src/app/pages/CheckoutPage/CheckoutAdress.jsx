/** @format */

import React from "react";

const CheckoutAdress = () => {
  return (
    <div className="w-auto h-auto bg-gray-50 font-mar">
      <div className="flex items-center justify-between bg-gray-100 py-2 px-4">
        <p className="">Delivery address</p>
        <button className="w-auto h-auto p-1 ">
          <p className="text-blue-400 hover:text-blue-700">Edit</p>
        </button>
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
