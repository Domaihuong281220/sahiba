/** @format */
// @ts-expect-error

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Radio } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "antd";

const UserAdd = () => {
  const [role, setrole] = useState(1);
  const onChange = (e) => {
    setrole(e.target.value);
  };
  // const [formData, setFormData] = useState({
  //   id: "",
  //   name: "",
  //   phone: "",
  //   email: "",
  //   dateofbirth: "",
  //   address: "",
  //   avatar:
  //     "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/350279337_252231724154593_7305889329858622849_n.jpg?stp=c0.0.385.385a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XHuDlqy2pVsAX_SschY&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfANT7pAN4KRtzPzEmE_XreMWeDqqASSQUOl5u0VHjxgGg&oe=64D309A3",
  //   password: "",
  //   role: "",
  // });

  // set state for variable

  const [startDate, setStartDate] = useState(new Date());

  // declare navigate
  const navigate = useNavigate();

  // const handleGetAPI = () => {
  //   axios
  //     .post("http://103.157.218.126:8000/admin/adduser", formData)
  //     .then((res) => {
  //       console.log(res.data);
  //       <Alert
  //         message="Success Tips"
  //         description="Detailed description and advice about successful copywriting."
  //         type="success"
  //         showIcon
  //       />;
  //     });
  // };

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {/* Start Breadcrums */}
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
          <div className="font-bold text-blue-400">UserAdd</div>
        </Breadcrumbs>
      </div>
      {/* End Breadcrumbs */}

      {/* Start form Add User */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">USER ADD</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="flex pb-8">
            <p className="text-3xl">Add User</p>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">ID</p>
            <Input
              className="w-full h-auto"
              placeholder="Enter ID User only number"
              type="number"
              // onChange={(e) => setFormData({ id: e.target.value })}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Full Name</p>
            <Input
              className="w-full h-auto"
              placeholder="Full Name"
              // onChange={(e) =>
              //   setFormData({ ...formData, name: e.target.value })
              // }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <Input
              className="w-full h-auto"
              placeholder="Phone Number"
              // onChange={(e) =>
              //   setFormData({ ...formData, phone: e.target.value })
              // }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Email</p>
            <Input
              className="w-full h-auto"
              placeholder="Email"
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Date of birth</p>

            <input
              type="date"
              className="w-full h-full border-2 border-black py-2 rounded-lg px-2"
            ></input>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address</p>
            <Input
              className="w-full h-auto"
              placeholder="Address"
              // onChange={(e) =>
              //   setFormData({ ...formData, address: e.target.value })
              // }
            />
          </div>
          <div className="flex justify-start gap-x-4 items-center">
            <p className="text-lg">Role</p>
            <Radio.Group onChange={onChange} value={role} className="">
              <Radio role={1}>Admin</Radio>
              <Radio role={2}>User</Radio>
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
            <Input
              className="w-full h-auto"
              placeholder="Password"
              // onChange={(e) =>
              //   setFormData({ ...formData, password: e.target.value })
              // }
            />
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              // onClick={() => navigate(-1)}
              // onClick={() => handleGetAPI()}
            >
              <p className="">Save</p>
            </button>
            <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
              <p className="">Reset</p>
            </button>
            <button
              className="w-auto h-auto py-2 px-4 bg-red-50 border-2 border-red-300 rounded-lg hover:bg-red-200 hover:shadow-lg"
              onClick={() => navigate(-1)}
            >
              <p className="">Cancel</p>
            </button>
          </div>
        </div>
        {/* End form Add User */}
      </div>
      {/* End form Add User */}
    </div>
  );
};

export default UserAdd;
