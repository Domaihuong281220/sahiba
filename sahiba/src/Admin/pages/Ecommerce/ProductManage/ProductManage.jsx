/** @format */

import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";

const ProductManage = () => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name Product", dataIndex: "nameproduct", key: "nameproduct" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src="https://flexhouse.vn/wp-content/uploads/2022/09/Tham-chui-chan-hinh-anh-3D-sinh-dong-TXC3116-4.jpg"
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Subtitle",
      dataIndex: "subtitle",
      key: "subtitle",
    },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",

      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <div className="">
            <p className="">{"4.6"}</p>
          </div>
          <div className="">
            <Icon
              icon="ic:baseline-star"
              height={24}
              width={24}
              className="text-yellow-400"
            ></Icon>
          </div>
        </div>
      ),
    },
    { title: "Categories", dataIndex: "categories", key: "categories" },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <a className="" href="/productmanage/editproduct">
            <button className="w-auto h-auto p-2 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg">
              <Icon
                icon="material-symbols:box-edit-sharp"
                height={24}
                width={24}
              ></Icon>
              <p className="">Edit</p>
            </button>
          </a>

          <button className="w-auto h-auto p-2 bg-red-400 hover:bg-red-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg">
            <Icon icon="material-symbols:delete" height={24} width={24}></Icon>
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      id: i,
      nameproduct: `Carpet slick India ${i}`,
      title: `Carpet Sahiba ${i}`,
      subtitle: `Ticking 3D woven floor mats with sharp bottom weaving (3D layers technology) help the space have more depth, creating a visual effect that captures the whole view. Besides, the durability of floor mats is up to 7-8 years of use, 2 times more than soft fur carpets`,
      price: `$1000`,
      categories: "Carpet",
    });
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

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
            E-Commerce
          </a>
          <a href="#" className="font-bold text-blue-400">
            ProductManage
          </a>
        </Breadcrumbs>
      </div>

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">PRODUCT MANAGE</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className=" lg:w-3/12 h-10 sm:w-10/12 md:w-full xl:w-3/12 2xl:w-4/12">
              <InputGroup className="flex  items-center w-full">
                <Input
                  type="text"
                  placeholder="Search Product"
                  className="text-black w-full h-10 border-b-2 border-black border-solid p-2"
                />

                <InputRightElement>
                  <button className="text-black  h-10 flex justify-center items-center">
                    <Icon icon="material-symbols:search" fontSize={24}></Icon>
                  </button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="flex items-center gap-x-3">
              <a className="" href="/productmanage/createproduct">
                <button className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg">
                  <Icon
                    icon="mdi:package-variant-add"
                    width={24}
                    height={24}
                  ></Icon>
                  <p className="">Add New Product</p>
                </button>
              </a>

              <button className="w-auto h-auto p-2 rounded-lg border-2 border-red-300 hover:border-red-500  flex items-center gap-x-2 hover:shadow-lg">
                <Icon icon="wpf:delete" width={24} height={24}></Icon>
                <p className="">Delete Product</p>
              </button>
            </div>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5, position: ["bottomCenter"] }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
