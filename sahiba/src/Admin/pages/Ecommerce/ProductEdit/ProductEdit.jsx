/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

import { Select } from "@chakra-ui/react";

const ProductEdit = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {/* Start Breadcrumbs */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <div className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2">
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>

            <p className="">Admin</p>
          </div>
          <div className="hover:font-bold hover:text-blue-400">E-commerce</div>
          <div className="hover:font-bold hover:text-blue-400">
            ProductManage
          </div>
          <div href="/createproduct" className="font-bold text-blue-400">
            EditProduct
          </div>
        </Breadcrumbs>
      </div>
      {/* End Breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT PRODUCT</p>
        </div>
        {/* Start Form Edit Product */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Product</p>
            <Input
              type="text"
              className="w-full h-auto"
              placeholder="Name Product"
              defaultValue={"Carpet slick India"}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Title</p>
            <Input
              className="w-full h-auto"
              placeholder="Title"
              defaultValue={"Carpet Sahiba"}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Subtitle</p>
            <textarea
              className="w-full h-[100px] border-2 border-black p-2"
              placeholder="Subtitle"
              defaultValue={
                "Ticking 3D woven floor mats with sharp bottom weaving (3D layers technology) help the space have more depth, creating a visual effect that captures the whole view. Besides, the durability of floor mats is up to 7-8 years of use, 2 times more than soft fur carpets"
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-auto"
              placeholder="Price"
              defaultValue={"$1000"}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Categories</p>
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
            <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
              <p className="">Back</p>
            </button>

            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg ">
              <p className="">Save</p>
            </button>
          </div>
        </div>
        {/* End Form Edit Product */}
      </div>
    </div>
  );
};

export default ProductEdit;
