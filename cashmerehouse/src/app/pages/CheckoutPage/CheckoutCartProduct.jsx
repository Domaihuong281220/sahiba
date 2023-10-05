/** @format */

import React, { useState } from "react";
import DeliveryOption from "./DeliveryOption";
import CheckoutCardItem from "./CheckoutCardItem";
import { Icon } from "@iconify/react";
import ModalDeleteProductCart from "./ModalDeleteProductCart";

const CheckoutCartProduct = () => {
  const [showMyModal, setShowModal] = useState(false);
  const handleOnclose = () => {
    setShowModal(false);
  };
  return (
    <div className="font-mar ">
      <div className="flex justify-between bg-slate-200 px-4 py-2">
        <p className="">Package 1 of 3</p>
        <div className="flex gap-x-1 ">
          <p className="">Delivered by</p>
          <p className="font-bold">Cashmere house</p>
        </div>
      </div>
      <div className="flex justify-start pl-2">
        <p className="">Delivery options</p>
      </div>
      <DeliveryOption />
      <div className="flex justify-between items-center px-4">
        <CheckoutCardItem />
        <div className=" flex flex-col justify-center items-center gap-y-3">
          <p className="text-red-500">39.99$</p>

          <button onClick={() => setShowModal(true)}>
            <Icon
              icon="material-symbols:delete-outline"
              width={24}
              height={24}
            ></Icon>
          </button>
          <ModalDeleteProductCart
            onclose={handleOnclose}
            visible={showMyModal}
          />
        </div>
        <p className="">Quantity : 1</p>
      </div>
    </div>
  );
};

export default CheckoutCartProduct;
