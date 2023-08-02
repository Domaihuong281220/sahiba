/** @format */

import { useState, useEffect, react } from "react";
import { Icon } from "@iconify/react";
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import Logo from "../../../assets/image/logo/Logo.png";
import Headroom from "react-headroom";
export default function Header() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-black hover:bg-orange-100 py-3 rounded-xl px-6 "
      >
        <a href="/" className="text-sm font-medium text-center px-0 font-mar ">
          HOME
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-mar">
        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <MenuHandler>
            <button className="text-sm font-medium text-black flex items-center justify-start hover:bg-orange-100 py-3 rounded-xl px-6">
              SHOP
              <Icon icon="gridicons:dropdown" width={24} height={24} />
            </button>
          </MenuHandler>
          <MenuList className="flex flex-col items-center bg-white z-10 font-mar ">
            <MenuItem className="hover:bg-zinc-200 px-6 py-2 rounded-md lg- ">
              <a href="/carpetshop">Carpet</a>
            </MenuItem>
            <MenuItem className="hover:bg-zinc-200 px-6 py-2 rounded-md">
              <a href="/furniture">Furniture</a>
            </MenuItem>
            <MenuItem className="hover:bg-zinc-200 px-6 py-2 rounded-md">
              <a href="/sarees">Sarees</a>
            </MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal font-mar"
      >
        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <MenuHandler>
            <button className="text-sm font-medium text-black flex items-center justify-start hover:bg-orange-100 py-3 rounded-xl px-6">
              ABOUT US
              <Icon icon="gridicons:dropdown" width={24} height={24} />
            </button>
          </MenuHandler>
          <MenuList className="flex flex-col items-center bg-white z-10 font-mar">
            <MenuItem className="px-4 py-2 hover:bg-zinc-200 rounded-md">
              <a href="/ourstory">Our Story </a>
            </MenuItem>

            <MenuItem className=" px-4 py-2 hover:bg-zinc-200 rounded-md">
              <a href="/management">Management</a>
            </MenuItem>
            <MenuItem className="px-4 py-2 hover:bg-zinc-200  rounded-md">
              <a href="/media"> Media </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-mar text-black hover:bg-orange-100 py-3 rounded-xl"
      >
        <a href="/contact" className="text-sm font-medium px-6 ">
          CONTACT
        </a>
      </Typography>
    </ul>
  );

  return (
    <Headroom style={{ zIndex: "10" }}>
      <Navbar className="mx-auto px-4 lg:px-8 w-full sticky top-0  rounded-none py-0 ">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer font-medium"
          >
            <img src={Logo} className="w-36 h-24"></img>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className=" lg:w-3/12 h-10 sm:w-10/12 md:w-full xl:w-3/12 2xl:w-4/12">
            <InputGroup className="flex  items-center w-full">
              <Input
                type="text"
                placeholder="Search Product"
                className="text-black w-full h-10 border-b-2 border-black border-solid p-2"
              />

              <InputRightElement>
                <button className="text-black  h-10 flex justify-center items-center">
                  <Icon icon="material-symbols:search" fontSize={24}></Icon>
                </button>
              </InputRightElement>
            </InputGroup>
          </div>

          <div className="flex justify-evenly w-40 ">
            <button>
              <Icon
                icon="octicon:person-16"
                width={24}
                height={24}
                color="black"
              />
            </button>

            <button>
              <Icon
                icon="mdi:heart-outline"
                width={24}
                height={24}
                color="black"
              />
            </button>

            <button className=" relative">
              <Icon
                icon="mdi:cart-outline"
                width={24}
                height={24}
                color="black"
              />
              <p className="bg-red-600 absolute h-3 w-3 text-[8px] top-[-4px] right-[-2px] rounded-full text-center">
                1
              </p>
            </button>
          </div>
        </div>
      </Navbar>
    </Headroom>
  );
}
