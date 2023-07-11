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
import Logo from "../../../assets/image/logo/Logo.png";
import { Input } from "antd";
const { Search } = Input;

export default function Header() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-black hover:bg-orange-100 py-3 rounded-xl"
      >
        <a href="#" className="text-sm font-medium text-center px-6 font-mar">
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
            <Button className="text-sm font-medium text-black flex items-center justify-start hover:bg-orange-100 py-3 rounded-xl">
              SHOP
              <Icon icon="gridicons:dropdown" width={24} height={24} />
            </Button>
          </MenuHandler>
          <MenuList className="flex flex-col items-center bg-white z-10 font-mar ">
            <MenuItem className="hover:bg-zinc-200 px-6 py-2 rounded-md ">
              Carpet
            </MenuItem>
            <MenuItem className="hover:bg-zinc-200 px-6 py-2 rounded-md">
              Furniture
            </MenuItem>
            <MenuItem className="hover:bg-zinc-200 px-6 py-2 rounded-md">
              Sarees
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
            <Button className="text-sm font-medium text-black flex items-center justify-start hover:bg-orange-100 py-3 rounded-xl">
              ABOUT US
              <Icon icon="gridicons:dropdown" width={24} height={24} />
            </Button>
          </MenuHandler>
          <MenuList className="flex flex-col items-center bg-white z-10 font-mar">
            <MenuItem className="px-4 py-2 hover:bg-zinc-200 rounded-md">
              Our Story
            </MenuItem>
            <MenuItem className="px-4 py-2 hover:bg-zinc-200  rounded-md">
              Our Foundation
            </MenuItem>
            <MenuItem className=" px-4 py-2 hover:bg-zinc-200 rounded-md">
              Management
            </MenuItem>
            <MenuItem className="px-4 py-2 hover:bg-zinc-200  rounded-md">
              Media
            </MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-mar text-black hover:bg-orange-100 py-3 rounded-xl"
      >
        <a href="#" className="text-sm font-medium px-6">
          CONTACT
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto px-4 lg:px-8 w-full sticky top-0 z-10 rounded-none py-0">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer font-medium">
          <img src={Logo} className="w-36 h-24"></img>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="w-80 h-10">
          <Search placeholder="Search Product" allowClear size="large" />
        </div>
        <div className="flex justify-between w-28">
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
  );
}
