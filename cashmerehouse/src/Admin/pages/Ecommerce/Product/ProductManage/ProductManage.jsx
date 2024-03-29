/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
const ProductManage = () => {
  const navigate = useNavigate();
  const [productData, setproductData] = useState([]);
  const data = [];

  for (let i = 0; i < productData.length; i++) {
    data.push({
      key: i,
      id: productData[i].id,
      nameproduct: productData[i].name,
      image: productData[i].image,
      description: productData[i].description,
      price: productData[i].price,
      quatity: "100",
      categories: productData[i].categoryId,
    });
  }

  // Set state for variable
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const handlegetProduct = async () => {
    await axios
      .get("http://103.157.218.126:8000/public/getallproduct")
      .then((res) => {
        setproductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handledeleteProduct = async (id) => {
    await axios
      .delete(`http://103.157.218.126:8000/admin/deleteproduct/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("delete product success");
          handlegetProduct();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditProduct = (record) => {
    navigate("/productmanage/editproduct", {
      state: record,
    });
  };

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    handlegetProduct();
  }, []);
  // Declare label for variable
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: "Name Product",
      dataIndex: "nameproduct",
      key: "nameproduct",

      fixed: "left",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={record.image}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Quatity",
      dataIndex: "quatity",
      key: "quatity",
    },

    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      sorter: (a, b) => a.rating - b.rating,

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
      fixed: "right",
      width: 300,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="w-auto h-auto p-2 bg-violet-400 hover:bg-violet-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg"
            onClick={() => {
              navigate("/productmanage/viewproduct");
            }}
          >
            <Icon icon="carbon:view-filled" height={24} width={24}></Icon>
            <p className="">View</p>
          </button>

          <button
            className="w-auto h-auto p-2 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg"
            onClick={() => handleEditProduct(record)}
          >
            <Icon
              icon="material-symbols:box-edit-sharp"
              height={24}
              width={24}
            ></Icon>
            <p className="">Edit</p>
          </button>

          <button
            className="w-auto h-auto p-2 bg-red-400 hover:bg-red-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg"
            onClick={() => handledeleteProduct(record.id)}
          >
            <Icon icon="material-symbols:delete" height={24} width={24}></Icon>
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {contextHolder}
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
          <div className="hover:font-bold hover:text-blue-400">E-Commerce</div>
          <div className="font-bold text-blue-400">ProductManage</div>
        </Breadcrumbs>
      </div>
      {/* End Breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">PRODUCT MANAGE</p>
        </div>
        {/* Start Table Product Manage */}
        <div className="">
          <div className="flex items-center justify-between gap-x-10 px-4 py-4 ">
            <div className="  flex gap-x-4 w-6/12 justify-center items-center">
              <InputGroup className="flex items-center w-full">
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
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("/productmanage/createproduct");
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Product</p>
              </button>

              <button className="w-auto h-auto p-2 rounded-lg border-2 border-red-300 hover:border-red-500  flex items-center gap-x-2 hover:shadow-lg">
                <Icon icon="wpf:delete" width={24} height={24}></Icon>
                <p className="">Delete Product</p>
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 3, position: ["bottomCenter"] }}
              scroll={{
                x: 1500,
              }}
              style={{
                width: "100%",
                margin: "0",
                padding: "0",
              }}
            />
          </div>
        </div>
        {/* End Table Product Manage */}
      </div>
    </div>
  );
};

export default ProductManage;
