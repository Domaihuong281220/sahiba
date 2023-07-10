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
          className={`text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500 w-[30px] h-[30px] bg-slate-300 rounded-lg`}
          onClick={handleTogleActive}
        >
          {">"}
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
                  <label className="py-2 flex w-full cursor-pointer items-center">
                    <ListItemPrefix className="mr-3">
                      <Checkbox
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
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
