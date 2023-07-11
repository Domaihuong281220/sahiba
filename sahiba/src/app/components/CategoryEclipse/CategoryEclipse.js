/** @format */

import React from "react";

const CategoryEclipse = (props) => {
  const { title, url } = props;
  return (
    <div className="w-28 h-32 flex flex-col justify-center items-center">
      <div className="w-24 h-24 border rounded-full flex justify-center items-center">
        <img
          src={url}
          className="w-20 h-20 rounded-full hover:w-24 hover:h-24 duration-500 cursor-pointer"
        ></img>
      </div>
      <p className="font-mar">{title}</p>
    </div>
  );
};

export default CategoryEclipse;
