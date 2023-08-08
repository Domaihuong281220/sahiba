/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";

const UserEdit = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {/* Start Breadcrumbs */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1 flex justify-between">
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
          <div className="hover:font-bold hover:text-blue-400">Users</div>
          <div className="font-bold text-blue-400">UserEdit</div>
        </Breadcrumbs>
      </div>
      {/* End Breadcrumbs  */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">USER EDIT</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        {/* Start Tabs User Edit */}
        <Tabs>
          <TabList className="flex justify-center items-center gap-x-3 py-3 ">
            <Tab className="w-[12%] h-auto  rounded-xl py-2 px-2 flex flex-col  justify-center items-center bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <Icon icon="iconamoon:profile-fill" width={30} height={30}></Icon>
              <p className="">Account</p>
            </Tab>

            <Tab className="w-[12%] h-auto  rounded-xl py-2 px-2 flex flex-col  justify-center items-center bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <Icon icon="mdi:password" width={30} height={30}></Icon>
              <p className="">Change Password</p>
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel className="px-10 py-4 mx-auto w-[50%] ">
              <div className="flex pb-6">
                <p className="text-2xl font-bold">Account</p>
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Full Name</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Full Name"
                  defaultValue={"Nguyen Van Tay"}
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Email</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Email"
                  defaultValue={"taynv@1cinnovation.com"}
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Phone Number</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Phone Number"
                  defaultValue={"0375875162"}
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Date of birth</p>
                {/* <Input className="w-full h-auto" placeholder="Date of birth" /> */}
                <DatePicker
                  selected={startDate}
                  showMonthDropdown={true}
                  showYearDropdown={true}
                  showPopperArrow={true}
                  onChange={(date) => setStartDate(date)}
                  show
                  className="w-full h-full border-2 border-black py-2 rounded-lg px-2"
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Role</p>
                <Select
                  icon={false}
                  placeholder="Please select role"
                  className="border-[3px] border-black w-full h-auto px-2 py-2"
                >
                  <option className="">Admin</option>
                  <option className="">User</option>
                </Select>
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Avatar</p>
                <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
                  <p className="">Upload an image</p>
                </button>
                <p className="">jpg , png , jpeg</p>
              </div>
              <div className="flex justify-between items-center">
                <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
                  <p className="">Reset</p>
                </button>
                <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
                  <p className="">Save</p>
                </button>
              </div>
            </TabPanel>

            <TabPanel className="px-10 py-4 mx-auto w-[50%]">
              <div className="flex pb-6">
                <p className="text-2xl font-bold">Change Password</p>
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Current Password</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Current Password"
                />
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">New Password</p>
                <Input className="w-full h-auto" placeholder="New Password" />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Confirm Password</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex justify-between items-center">
                <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
                  <p className="">Reset</p>
                </button>
                <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg ">
                  <p className="">Save Password</p>
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* End Tabs User Edit */}
      </div>
    </div>
  );
};

export default UserEdit;
