/** @format */

import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";

const UserList = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <img
            src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/362287006_620145923592180_5200456271295311099_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=2NLmpdyN_E4AX_jVCTt&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBRbjswpu5DBJqFq5SHnco684EpdGAdPJ90VjXTkyy1xg&oe=64D05F4B"
            className="w-10 h-10 rounded-full"
          ></img>
        </div>
      ),
    },

    { title: "PhoneNumber", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "DateOfBirth", dataIndex: "dateofbirth", key: "dateofbirth" },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <>
          {status.map((item) => {
            if (item === "Online") {
              return (
                <div className="bg-green-300 w-auto h-auto rounded-xl flex justify-center items-center px-2 border-2 border-green-300 shadow-2xl">
                  <p className="">Online</p>
                </div>
              );
            }
            return (
              <div className="bg-orange-100 w-auto h-auto">
                <p className="">Offline</p>
              </div>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <a className="" href="/userview">
            <button className="w-auto h-auto p-2 bg-violet-400 hover:bg-violet-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg">
              <Icon icon="carbon:view-filled" height={24} width={24}></Icon>
              <p className="">View</p>
            </button>
          </a>
          <a className="" href="/useredit">
            <button className="w-auto h-auto p-2 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg">
              <Icon icon="fa-solid:user-edit" height={24} width={24}></Icon>
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
      name: `Nguyen Van Tay ${i}`,
      avatar: `url/image`,
      phonenumber: "0375875162",
      address: `Ho Chi Minh. ${i}`,
      email: `taynv@1cinnovation.com`,
      role: "admin",
      dateofbirth: "25/06/1999",
      status: ["Online"],
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
            Users
          </a>
          <a href="#" className="font-bold text-blue-400">
            UserList
          </a>
        </Breadcrumbs>
      </div>

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">USER LIST</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className=" lg:w-3/12 h-10 sm:w-10/12 md:w-full xl:w-3/12 2xl:w-4/12">
              <InputGroup className="flex  items-center w-full">
                <Input
                  type="text"
                  placeholder="Search User"
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
              <a className="" href="/useradd">
                <button className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg">
                  <Icon icon="mdi:user-add" width={24} height={24}></Icon>
                  <p className="">Add New User</p>
                </button>
              </a>

              <button className="w-auto h-auto p-2 rounded-lg border-2 border-red-300 hover:border-red-500  flex items-center gap-x-2 hover:shadow-lg">
                <Icon icon="typcn:user-delete" width={24} height={24}></Icon>
                <p className="">Delete User</p>
              </button>
            </div>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10, position: ["bottomCenter"] }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserList;