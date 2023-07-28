/** @format */

import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";

export const CartPage = () => (
  <div className="w-full h-auto p-10">
    <Stack
      direction={{ base: "column", lg: "row" }}
      align={{ lg: "flex-start" }}
      spacing={{ base: "8", md: "16" }}
    >
      <Stack spacing={{ base: "8", md: "10" }} flex="2">
        <Heading className="text-2xl font-mar">
          Shopping Cart ({cartData.length} item)
        </Heading>

        <Stack spacing="6" className="overflow-y-scroll h-[600px]">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <div className="flex justify-center items-center gap-x-3">
          <p className="">or</p>
          <a className="hover:text-blue-600" href="/">
            Continue shopping
          </a>
        </div>
      </Flex>
    </Stack>
  </div>
);
