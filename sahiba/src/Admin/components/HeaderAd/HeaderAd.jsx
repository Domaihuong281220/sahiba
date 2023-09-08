/** @format */

import React from "react";
import Headroom from "react-headroom";
import { Icon } from "@iconify/react";

const HeaderAd = () => {
  return (
    <div>
      <Headroom style={{ zIndex: "10" }}>
        <div className="bg-orange-100 w-full h-auto py-4 flex justify-between px-10">
          <div className="flex items-center gap-x-5 ">
            <button className="w-auto h-auto p-2 rounded-full active:bg-orange-200">
              <Icon icon="material-symbols:menu" width={36} height={36}></Icon>
            </button>
            <div className="">
              <p className="text-2xl">Cashmere house Admin</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <div className="w-9 h-9 ">
              <img
                src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/362986939_2605878022904631_4056306678071544124_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5CKOzwditsUAX8VBeK3&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCN4hM5Z5loVY827Fl_1OdozspnBIWEHicEGD9tibmXwA&oe=64CD84B7"
                className="object-fill w-full h-full rounded-full"
              ></img>
            </div>
            <p className="text-xl"> Hi, Admin</p>
          </div>
        </div>
      </Headroom>
    </div>
  );
};

export default HeaderAd;
