/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const CategoriesAdd = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {/* Start breadcrumbs */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <div
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>
            <p className="">Admin</p>
          </div>
          <div className="hover:font-bold hover:text-blue-400">E-commerce</div>
          <div
            className="hover:font-bold hover:text-blue-400"
            onClick={() => {
              navigate("/categoriesmanage");
            }}
          >
            CategoriesManage
          </div>
          <div className="font-bold text-blue-400">AddCategories</div>
        </Breadcrumbs>
      </div>
      {/* end breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> ADD CATEGORIES</p>
        </div>
        {/* Start form add categories */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Categories</p>
            <Input
              type="text"
              className="w-full h-auto"
              placeholder="Name Product"
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Title</p>
            <Input className="w-full h-auto" placeholder="Title" />
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </button>

            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg ">
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesAdd;
