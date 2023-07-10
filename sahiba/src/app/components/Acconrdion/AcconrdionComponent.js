/** @format */

import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

const AcconrdionComponent = (props) => {
  const [item, setItem] = useState(props.datas);
  const handleTogleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };
  return (
    <div
      className={`bg-white p-2 border border-black rounded-md mb-2 w-[280px]  duration-500 group ${
        item.active === 1 ? "is-active bg-slate-400" : ""
      }`}
    >
      <div
        className="flex items-center cursor-pointer "
        onClick={handleTogleActive}
      >
        <div className="w-full group-[.is-active]:font-bold duration-500">
          {item.filterType}
        </div>
        <div className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500">
          {">"}
        </div>
      </div>
      <div
        className={`overflow-hidden max-h-0 group-[.is-active]:max-h-[${
          item.properties.length * 100
        }px]  duration-500`}
      >
        {item.properties.map(({ title }) => {
          return (
            <div className="bg-slate-500  w-full flex justify-start items-center">
              <List className="flex-col ">
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-react"
                    className="py-2 flex items-start w-full cursor-pointer"
                  >
                    <ListItemPrefix className="mr-3">
                      <Checkbox
                        id="horizontal-list-react"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
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
