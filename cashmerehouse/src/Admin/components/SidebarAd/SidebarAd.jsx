/** @format */

import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  UsersIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function SidebarAd() {
  // Navigate

  const navigate = useNavigate();

  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openUser, setOpenUsers] = useState(false);
  const handleOpenEcommerce = () => setOpenEcommerce((cur) => !cur);
  const handleOpenUsers = () => setOpenUsers((cur) => !cur);

  return (
    <Card className="h-full w-full p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
        <div className=" w-full h-auto  flex justify-between ">
          <div className="flex items-center gap-x-5 ">
            <div className="">
              <p className="text-2xl">Cashmere house Admin</p>
            </div>
            <button className="w-auto h-auto p-2 rounded-full active:bg-orange-200">
              <Icon icon="material-symbols:menu" width={36} height={36}></Icon>
            </button>
          </div>
        </div>
        <ListItem className="text-lg">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>

        <Accordion open={openUser} className="overflow-hidden">
          <AccordionHeader
            onClick={() => handleOpenUsers()}
            className="py-0 text-lg"
          >
            <ListItem className="flex justify-between items-center">
              <div className="flex ">
                <ListItemPrefix>
                  <UsersIcon className="h-5 w-5" />
                </ListItemPrefix>
                <p className="text-lg">Users</p>
              </div>

              <ChevronDownIcon className="h-5 w-5" />
            </ListItem>
          </AccordionHeader>
          <AccordionBody>
            <div
              className=" flex items-center justify-start pl-10 gap-x-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer"
              onClick={() => navigate("/userlist")}
            >
              <Icon icon="ph:user-list" width={20} height={20}></Icon>
              <p className=""> User List</p>
            </div>

            <div
              className=" flex items-center justify-start pl-10 gap-x-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer"
              onClick={() => navigate("/useradd")}
            >
              <Icon icon="mdi:user-add-outline" width={20} height={20}></Icon>
              <p className=""> User Add</p>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={openEcommerce} className="overflow-hidden">
          <AccordionHeader
            onClick={() => handleOpenEcommerce()}
            className="py-0 text-lg"
          >
            <ListItem className="flex justify-between items-center">
              <div className="flex ">
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <p className="text-lg">E-Commerce</p>
              </div>

              <ChevronDownIcon className="h-5 w-5" />
            </ListItem>
          </AccordionHeader>
          <AccordionBody>
            <div
              className=" flex items-center justify-start pl-10 gap-x-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer"
              onClick={() => navigate("/productmanage")}
            >
              <Icon icon="gridicons:product" width={20} height={20}></Icon>
              <p className="">Product Manage</p>
            </div>

            <div
              className=" flex items-center justify-start pl-10 gap-x-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer"
              onClick={() => navigate("/categoriesmanage")}
            >
              <Icon
                icon="icon-park-outline:ad-product"
                width={20}
                height={20}
              ></Icon>
              <p className="">Categories Manage</p>
            </div>
          </AccordionBody>
        </Accordion>

        <div className="" onClick={() => navigate("/profile")}>
          <ListItem className="text-lg">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </div>

        <ListItem className="text-lg">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className=" text-lg">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
