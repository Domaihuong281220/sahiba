/** @format */

import React from "react";
import { Icon } from "@iconify/react";
const ModalDeleteProductCart = ({ visible, onclose }) => {
  const handleOnClose = () => {
    onclose();
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0  bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded w-auto h-auto ">
        <div className=" flex justify-between items-center ">
          <p className="font-mar text-lg">Remove from cart </p>
          <button className="w-auto h-auto" onClick={handleOnClose}>
            <Icon icon="carbon:close-filled"></Icon>
          </button>
        </div>

        <p className="text-sm">
          Do you agree to remove this product from the order?
        </p>

        <div className="flex justify-center gap-x-4 pt-6">
          <button className="bg-gray-500 py-2 px-4 font-mar font-bold rounded-lg">
            Cancel
          </button>
          <button className="bg-blue-300 py-2 px-4 text-white font-mar font-bold rounded-lg">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteProductCart;
