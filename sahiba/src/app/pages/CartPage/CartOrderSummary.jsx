/** @format */

import {
  Heading,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <div className="flex justify-around text-lg">
      <p className=""> {label}</p>
      {value ? <p className="">{value}</p> : children}
    </div>
  );
};

export const CartOrderSummary = () => {
  return (
    <div className="w-10/12 rounded-lg border-2 h-auto ">
      <div className="text-xl pt-4">Order Summary</div>

      <div className="flex flex-col">
        <OrderSummaryItem label="Subtotal" value={formatPrice(359.91)} />
        <OrderSummaryItem label="Shipping + Tax">
          <a href="#" className="underline hover:text-blue-500">
            Calculate shipping
          </a>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <a href="#" className="underline hover:text-blue-500">
            Add coupon code
          </a>
        </OrderSummaryItem>

        <div className=" flex justify-around">
          <p className="text-lg">Total</p>
          <p className="text-lg"> {formatPrice(359.91)}</p>
        </div>
      </div>
      <div className="w-full h-auto p-4  bg-gradient-to-r from-orange-300 to-red-300 hover:bg-gradient-to-l  rounded-lg flex justify-center items-center hover: cursor-pointer">
        <a
          className="flex justify-center items-center gap-x-4"
          href="/checkout"
        >
          <p className="text-lg text-white font-bold">Checkout</p>
          <FaArrowRight className="text-white font-bold"></FaArrowRight>
        </a>
      </div>
    </div>
  );
};
