/** @format */

// /** @format */

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import HumanProduct from "../Carousel/HumanProduct";
import BookendProduct from "../Carousel/BookendProduct";
import VaseProduct from "../Carousel/VaseProduct";
import StorageProduct from "../Carousel/StorageProduct";
import CandleProduct from "../Carousel/CandleProduct";
import GingerProduct from "../Carousel/GingerProduct";

const TabComponent = () => {
  return (
    <div className=" h-auto w-full px-2">
      <Tabs>
        <TabList className="flex justify-center items-center gap-x-3 py-3 ">
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200 ">
            TEMPLATE & GINGER JARS
          </Tab>
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            BOOKENDS
          </Tab>
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            HUMAN FIGURINES
          </Tab>
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            CANDLES STANDS
          </Tab>
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            VASES
          </Tab>
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            DECORATIVE STORAGE
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="px-10 py-4">
            <GingerProduct />
          </TabPanel>
          <TabPanel className="px-10 py-4">
            <BookendProduct />
          </TabPanel>
          <TabPanel className="px-10 py-4">
            <HumanProduct />
          </TabPanel>
          <TabPanel className="px-10 py-4">
            <VaseProduct />
          </TabPanel>
          <TabPanel className="px-10 py-4">
            <CandleProduct />
          </TabPanel>
          <TabPanel className="px-10 py-4">
            <StorageProduct />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabComponent;
