/** @format */

import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Input } from "antd";
import { Icon } from "@iconify/react";

const { Search } = Input;

const AcconrdionComponent = (props) => {
  const [item, setItem] = useState(props.datas);

  const handleTogleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <div
      className={`bg-white p-2 border border-gray-300 w-full  duration-500 group ${
        item.active === 1 ? "is-active bg-slate-400" : ""
      }`}
    >
      <div className="flex items-center justify-between  cursor-pointer ">
        <div className=" group-[.is-active]:font-bold duration-500">
          {item.filterType}
        </div>

        <div className="w-48 h-full hidden  ">
          <Search placeholder="Search Product" allowClear size="middle" />
        </div>

        <div
          className={`text-xl rotate-270 group-[.is-active]:rotate-[90deg] duration-500 w-[30px] h-[30px] bg-slate-300 rounded-lg flex justify-center items-center`}
          onClick={handleTogleActive}
        >
          <Icon icon="ic:sharp-arrow-right" className="w-12 h-12"></Icon>
        </div>
      </div>
      <div
        className={`overflow-y-scroll max-h-0 group-[.is-active]:max-h-[300px]  duration-500 my-1`}
      >
        {item.properties.map(({ title }) => {
          return (
            <div className="bg-white  w-full flex justify-start items-center border ">
              <List className="flex-col ">
                <ListItem className="p-0">
                  <label className="py-2 flex w-full cursor-pointer items-center ">
                    <ListItemPrefix className="mr-3">
                      {/* <Checkbox
                        size={24}
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      /> */}
                      <input
                        className="w-4 h-4 hover:cursor-pointer "
                        type="checkbox"
                      ></input>
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-mar">
                      {title}
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AcconrdionComponent;
