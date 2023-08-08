/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CategoriesManage = () => {
  const navigate = useNavigate();

  // Declare label for vairiable
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Name Categories",
      dataIndex: "namecategories",
      key: "namecategories",
    },

    { title: "Title", dataIndex: "title", key: "title" },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="w-auto h-auto p-2 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg"
            onClick={() => {
              navigate("/categoriesmanage/categoriesedit");
            }}
          >
            <Icon
              icon="material-symbols:box-edit-sharp"
              height={24}
              width={24}
            ></Icon>
            <p className="">Edit</p>
          </button>

          <button className="w-auto h-auto p-2 bg-red-400 hover:bg-red-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg">
            <Icon icon="material-symbols:delete" height={24} width={24}></Icon>
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // Call API data
  const data = [];
  const [categoryData, setcategoryData] = useState([]);
  useEffect(() => {
    axios
      .get("http://103.157.218.126:8000/public/getallcategory")
      .then((res) => {
        setcategoryData(res.data);
      });
  }, []);
  for (let i = 0; i < categoryData.length; i++) {
    data.push({
      id: categoryData[i].id,
      namecategories: categoryData[i].name,
      title: categoryData[i].title,
    });
  }
  // set state for variable

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {/* Start Breadcrumbs */}
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
            CategoriesManage
          </a>
        </Breadcrumbs>
      </div>
      {/* End Breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">CATEGORIES MANAGE</p>
        </div>

        {/* Start table categories Manage */}
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className=" lg:w-3/12 h-10 sm:w-10/12 md:w-full xl:w-3/12 2xl:w-4/12">
              <InputGroup className="flex  items-center w-full">
                <Input
                  type="text"
                  placeholder="Search Categories"
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
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("/categoriesmanage/categoriesadd");
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Categories</p>
              </button>

              <button className="w-auto h-auto p-2 rounded-lg border-2 border-red-300 hover:border-red-500  flex items-center gap-x-2 hover:shadow-lg">
                <Icon icon="wpf:delete" width={24} height={24}></Icon>
                <p className="">Delete Categories</p>
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5, position: ["bottomCenter"] }}
              style={{
                width: "100%",
                margin: "0",
                padding: "0",
                overflow: "hidden",
              }}
              scroll={{
                x: "max-content",
              }}
            />
          </div>
        </div>
        {/* End table categories Manage */}
      </div>
    </div>
  );
};

export default CategoriesManage;
