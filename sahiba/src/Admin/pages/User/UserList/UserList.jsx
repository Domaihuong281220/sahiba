/** @format */
import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserList = () => {
  // Declare label for table
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <img src={record.avatar} className="w-10 h-10 rounded-full"></img>
        </div>
      ),
    },
    { title: "Phone Number", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Date Of Birth", dataIndex: "dateofbirth", key: "dateofbirth" },
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
          <button
            className="w-auto h-auto p-2 bg-violet-400 hover:bg-violet-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg"
            onClick={() => navigate("/userview")}
          >
            <Icon icon="carbon:view-filled" height={24} width={24}></Icon>
            <p className="">View</p>
          </button>
          <button
            className="w-auto h-auto p-2 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-x-2 hover:shadow-lg"
            onClick={() => navigate("/useredit")}
          >
            <Icon icon="fa-solid:user-edit" height={24} width={24}></Icon>
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

  // Mock data
  const data = [];
  const [userData, setuserData] = useState([]);
  for (let i = 0; i < userData.length; i++) {
    data.push({
      key: i,
      name: userData[i].name,
      avatar: userData[i].avatar,
      phonenumber: userData[i].phone,
      address: userData[i].address,
      email: userData[i].email,
      role: userData[i].role,
      dateofbirth: "30/02/1999",
      status: ["Online"],
    });
  }

  // set state
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // event select row
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://103.157.218.126:8000/admin/getalluser").then((res) => {
      setuserData(res.data);
    });
  }, []);

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {/* Start Breadcrumbs */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <div
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
            onClick={() => navigate("/dashboard")}
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>
            <p className="">Admin</p>
          </div>
          <div className="hover:font-bold hover:text-blue-400">Users</div>
          <div className="font-bold text-blue-400">UserList</div>
        </Breadcrumbs>
      </div>
      {/* end Breadcrumbs */}

      {/* Start Table UserList */}

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
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("/useradd")}
              >
                <Icon icon="mdi:user-add" width={24} height={24}></Icon>
                <p className="">Add New User</p>
              </button>

              <button className="w-auto h-auto p-2 rounded-lg border-2 border-red-300 hover:border-red-500  flex items-center gap-x-2 hover:shadow-lg">
                <Icon icon="typcn:user-delete" width={24} height={24}></Icon>
                <p className="">Delete User</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* <div>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5, position: ["bottomCenter"] }}
                scroll={{
                  x: [true, "max-content"],
                }}
              />
            </div> */}
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
        </div>
      </div>

      {/* End Table User List */}
    </div>
  );
};

export default UserList;
