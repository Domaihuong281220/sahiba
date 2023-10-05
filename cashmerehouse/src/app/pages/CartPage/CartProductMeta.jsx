/** @format */

import { HStack, Stack, useColorModeValue as mode } from "@chakra-ui/react";

import { Icon } from "@iconify/react";

export const CartProductMeta = (props) => {
  const { isGiftWrapping = true, image, name, description } = props;
  return (
    <div className="w-full flex justify-start pl-10 pt-5 pb-5">
      <img src={image} alt={name} className="rounded-lg w-[120px] h-[120px] " />

      <div className="pt-4 flex  flex-col items-start pl-4 justify-around">
        <div className="flex flex-col items-start">
          <p className="text-lg">{name}</p>
          <p className="text-lg">{description}</p>
        </div>
        {isGiftWrapping && (
          <div className="flex justify-center items-center gap-x-4">
            <Icon icon="mdi:gift-outline"></Icon>
            <p className="">Add gift wrapping</p>
          </div>
        )}
      </div>
    </div>
  );
};
