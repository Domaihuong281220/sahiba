/** @format */

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Select } from "@chakra-ui/react";
 
const ModalAddnewAddress = ({ visible, onclose }) => {
  const [provinceData, setProvinceData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [wardsData, setwardsData] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setselectedDistrict] = useState("");

  useEffect(() => {
    fetch("https://vapi.vnappmob.com/api/province/")
      .then((response) => response.json())
      .then((results) => {
        setProvinceData(results.results);
      });
  }, []);

  useEffect(() => {
    fetch(`https://vapi.vnappmob.com/api/province/district/${selectedProvince}`)
      .then((response) => response.json())
      .then((results) => {
        setDistrictData(results.results);
      });
  }, [selectedProvince]);

  useEffect(() => {
    fetch(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`)
      .then((response) => response.json())

      .then((results) => {
        setwardsData(results.results);
      });
  }, [selectedDistrict]);

  const handleOnClose = () => {
    onclose();
  };

  if (!visible) return <></>;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded w-5/12 h-auto ">
        <div className=" flex justify-between items-center pb-10 ">
          <p className="font-mar text-xl">Add new payment address</p>
          <button className="w-auto h-auto" onClick={() => handleOnClose()}>
            <Icon icon="carbon:close-filled"></Icon>
          </button>
        </div>
        <div className=" grid grid-cols-2 ">
          <div className="">
            <div className=" pt-2 pb-8 flex flex-col gap-y-2">
              <p className="text-lg">Full Name</p>
              <input
                className="border-2 border-gray-200 w-11/12 px-2 py-1 rounded-lg bg-gray-50"
                type="text"
                placeholder="Enter Full name"
              ></input>
            </div>
            <div className="pt-2 pb-8 flex flex-col gap-y-2">
              <p className="text-lg">Phone Number</p>
              <input
                className="border-2 border-gray-200 w-11/12 px-2 py-1 rounded-lg bg-gray-50"
                type="text"
                placeholder="Enter Phone Number"
              ></input>
            </div>
          </div>
          <div className="">
            <div className="pt-2 pb-8 flex flex-col gap-y-2">
              <p className="text-lg">Delivery address</p>
              <input
                className="border-2 border-gray-200 w-11/12 px-2 py-1 rounded-lg bg-gray-50"
                placeholder="Please enter delivery address"
                type="text"
              ></input>
            </div>

            <div className="pt-2 pb-8 flex flex-col gap-y-2">
              <p className="text-lg">Province / City</p>
              <Select
                icon={false}
                placeholder="Please select province/city"
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="border-2 border-gray-200 w-11/12 px-2 py-1 rounded-lg bg-gray-50"
              >
                {provinceData.map((item, index) => {
                  return (
                    <option value={item.province_id}>
                      {item.province_name}
                    </option>
                  );
                })}
              </Select>
            </div>

            <div className="pt-2 pb-8 flex flex-col gap-y-2">
              <p className="text-lg">District</p>

              <Select
                icon={false}
                placeholder="Please select district"
                className="border-2 border-gray-200 w-11/12 px-2 py-1 rounded-lg bg-gray-50"
                onChange={(e) => setselectedDistrict(e.target.value)}
              >
                {districtData.map((item, index) => {
                  return (
                    <option value={item.district_id}>
                      {item.district_name}
                    </option>
                  );
                })}
              </Select>
            </div>

            <div className="pt-2 pb-8 flex flex-col gap-y-2">
              <p className="text-lg">Wards</p>

              <Select
                icon={false}
                placeholder="please select ward"
                className="border-2 border-gray-200 w-11/12 px-2 py-1 rounded-lg bg-gray-50"
              >
                {wardsData.map((item, index) => {
                  return <option value={item.ward_id}>{item.ward_name}</option>;
                })}
              </Select>
            </div>

            <div className="pt-2 pb-8 flex flex-col gap-y-2">
              <p className="text-lg">
                Choose a name for a frequently used address:
              </p>
              <div className="flex justify-start gap-x-5  items-center w-full h-auto">
                <button className=" w-4/12 flex items-center justify-around bg-blue-100  px-4 py-5 rounded-lg border-2 border-blue-400 active:bg-blue-400 focus:border-2 focus:border-blue-500 focus:bg-blue-500 hover:bg-blue-500">
                  <Icon icon="vaadin:office" width={24} height={24}></Icon>
                  <p className="">OFFICE</p>
                </button>
                <button className=" w-4/12 flex items-center justify-around bg-green-100  px-4 py-5 rounded-lg border-2 border-green-400 active:bg-green-400 focus:border-2 focus:border-green-500 focus:bg-green-500 hover:bg-green-500">
                  <Icon icon="solar:home-bold" width={24} height={24}></Icon>
                  <p className="">HOME</p>
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-3">
                <button
                  onClick={onclose}
                  className="bg-gradient-to-r from-black to-gray-500 h-auto hover:bg-gradient-to-l  p-2 rounded text-white w-full"
                >
                  Cancel
                </button>
                <button
                  onClick={onclose}
                  className=" bg-gradient-to-r from-orange-300 to-red-300 hover:bg-gradient-to-l w-full p-2 rounded text-white"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddnewAddress;
