/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input, Textarea } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
const ProductAdd = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    image: "",
    categoryId: 1,
  });

  const [messageApi, contextHolder] = message.useMessage();

  const handleGetAPI = async () => {
    await axios
      .post("http://103.157.218.126:8000/admin/addproduct", formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          console.log(res.data);
          setTimeout(() => {
            messageApi.success("create product success");
          }, 2000);
          navigate("/productmanage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <div
            className="hover:font-bold hover:text-blue-400"
            onClick={() => {
              navigate("/productmanage");
            }}
          >
            ProductManage
          </div>
          <div className="font-bold text-blue-400">CreateProduct</div>
        </Breadcrumbs>
      </div>
      {/* End Breadcrumbs */}

      {/* Start Form Create Product */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> CREATE PRODUCT</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Product</p>
            <Input
              className="w-full h-auto"
              placeholder="Name Product"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Description</p>
            <textarea
              className="w-full h-[100px] border-2 border-black p-2"
              placeholder="Subtitle"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-auto"
              placeholder="Price"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">category</p>
            <Select
              icon={false}
              placeholder="Please select category"
              className="border-[3px] border-black w-full h-auto px-2 py-2"
              // onChange={(e) =>
              //   setFormData({ ...formData, category: e.target.value })
              // }
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
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate("/productmanage");
              }}
            >
              <p className="">Back</p>
            </button>

            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              onClick={() => handleGetAPI()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>

      {/* End Form Create Product  */}
    </div>
  );
};

export default ProductAdd;
