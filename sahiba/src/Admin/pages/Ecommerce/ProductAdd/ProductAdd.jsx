/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input, Textarea } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

import { Select } from "@chakra-ui/react";
const ProductAdd = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <a
            href="/dashboard"
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>

            <p className="">Admin</p>
          </a>
          <a href="#" className="hover:font-bold hover:text-blue-400">
            E-commerce
          </a>
          <a
            href="/productmanage"
            className="hover:font-bold hover:text-blue-400"
          >
            ProductManage
          </a>
          <a href="/createproduct" className="font-bold text-blue-400">
            CreateProduct
          </a>
        </Breadcrumbs>
      </div>

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> CREATE PRODUCT</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Product</p>
            <Input className="w-full h-auto" placeholder="Name Product" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Title</p>
            <Input className="w-full h-auto" placeholder="Title" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Subtitle</p>
            <textarea
              className="w-full h-[100px] border-2 border-black p-2"
              placeholder="Subtitle"
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input className="w-full h-auto" placeholder="Price" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Categories</p>
            <Input className="w-full h-auto" placeholder="Categories" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Role</p>
            <Select
              icon={false}
              placeholder="Please select category"
              className="border-[3px] border-black w-full h-auto px-2 py-2"
            >
              <option className="">Carpet</option>
              <option className="">Furniture</option>
              <option className="">Sarres</option>
            </Select>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Image Product</p>
            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
              <p className="">Upload an image</p>
            </button>
            <p className="">jpg , png , jpeg</p>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <a className="" href="/productmanage">
              <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
                <p className="">Back</p>
              </button>
            </a>

            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg ">
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
