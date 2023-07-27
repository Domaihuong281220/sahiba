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
    <Stack className="w-10/12 rounded-lg border-2  space-x-1">
      <Heading size="md">Order Summary</Heading>

      <div className="flex flex-col">
        <OrderSummaryItem label="Subtotal" value={formatPrice(359.91)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>

        <div className=" flex justify-around">
          <p className="text-lg">Total</p>
          <p className="text-lg"> {formatPrice(359.91)}</p>
        </div>
      </div>

      <button className=" h-auto p-4 bg-gradient-to-r from-orange-300 to-red-300 hover:bg-gradient-to-l  rounded-lg flex justify-center items-center gap-x-4">
        <a
          className="flex justify-center items-center gap-x-4"
          href="/checkout"
        >
          <p className="text-lg">Checkout</p>
          <FaArrowRight></FaArrowRight>
        </a>
      </button>
    </Stack>
  );
};
