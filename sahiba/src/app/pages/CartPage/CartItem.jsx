/** @format */

import {
  CloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";

export const CartItem = (props) => {
  const {
    isGiftWrapping,
    name,
    description,
    imageUrl,
    currency,
    price,
    onClickDelete,
    quantity,
    size,
  } = props;
  return (
    <div className="flex justify-between items-center  ">
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />
      <div className="flex w-full items-center justify-around h-auto  ">
        <div className="w-28">
          <NumberInput
            className="w-full h-auto border-2 border-gray-300 rounded-xl"
            defaultValue={quantity}
            min={0}
          >
            <NumberInputField className="h-[30px] rounded-xl pl-2 " />
            <NumberInputStepper className="flex justify-center items-center">
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>

        <div className="">
          <p className="">{size}</p>
        </div>
        <PriceTag price={price} currency={currency} />
        <div className="flex justify-center gap-x-3">
          <button>
            <Icon
              icon="mdi:heart-outline"
              width={24}
              height={24}
              color="red"
            ></Icon>
          </button>
          <button>
            <Icon
              icon="material-symbols:delete-outline"
              width={24}
              height={24}
            ></Icon>
          </button>
        </div>
      </div>
    </div>
  );
};
