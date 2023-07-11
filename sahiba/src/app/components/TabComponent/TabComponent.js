/** @format */

// /** @format */

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CarouselProduct from "../Carousel/CarouselProduct";

const TabComponent = () => {
  return (
    <div className=" h-[400px] w-full px-2">
      <Tabs>
        <TabList className="flex justify-center items-center gap-x-3 py-3 overflow-x-scroll ">
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            TEMPLATE & GINGER
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
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            RING DISH
          </Tab>
          <Tab className="w-auto h-auto  rounded-xl py-2 px-2 hover:bg-orange-200 active:bg-orange-200  focus:bg-orange-200">
            HOME GARDEN
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CarouselProduct />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>true!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabComponent;
