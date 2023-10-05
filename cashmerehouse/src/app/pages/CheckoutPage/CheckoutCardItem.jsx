/** @format */

import React from "react";

const CheckoutCardItem = () => {
  return (
    <div className="flex items-center pt-4 w-6/12">
      <img
        src="https://www.saraswatiglobal.com/assets/uploads/product/thumb/CD(V)1200203_MAIN.jpg"
        className="h-[100px] w-[100px]"
      ></img>

      <div className="flex flex-col items-start px-2 w-full">
        <p className="text-lg">W-V-LUXOR-CD-V-120-EBONY</p>
        <div className="flex gap-x-2">
          <p className="text-sm">distributed by </p>
          <p className="text-sm font-bold">Cashmere house</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCardItem;
