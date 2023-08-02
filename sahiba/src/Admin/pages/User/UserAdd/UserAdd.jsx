/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Radio } from "antd";

const UserAdd = () => {
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
            Users
          </a>
          <a href="/useredit" className="font-bold text-blue-400">
            UserAdd
          </a>
        </Breadcrumbs>
      </div>

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">USER ADD</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="flex pb-8">
            <p className="text-3xl">Add User</p>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Full Name</p>
            <Input className="w-full h-auto" placeholder="Full Name" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <Input className="w-full h-auto" placeholder="Phone Number" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Email</p>
            <Input className="w-full h-auto" placeholder="Email" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Date of birth</p>
            <Input className="w-full h-auto" placeholder="Date of birth" />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address</p>
            <Input className="w-full h-auto" placeholder="Address" />
          </div>
          <div className="flex justify-start gap-x-4 ">
            <p className="text-lg">Role</p>
            <Radio.Group onChange={onChange} value={value} className="">
              <Radio value={1}>Admin</Radio>
              <Radio value={2}>User</Radio>
            </Radio.Group>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Avatar</p>
            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
              <p className="">Upload an image</p>
            </button>
            <p className="">jpg , png , jpeg</p>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Password</p>
            <Input className="w-full h-auto" placeholder="Password" />
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg ">
              <p className="">Save</p>
            </button>
            <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
              <p className="">Reset</p>
            </button>
            <button className="w-auto h-auto py-2 px-4 bg-red-50 border-2 border-red-300 rounded-lg hover:bg-red-200 hover:shadow-lg">
              <p className="">Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
