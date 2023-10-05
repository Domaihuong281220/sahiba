/** @format */

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderAd from "../../Admin/components/HeaderAd/HeaderAd";
import { SidebarAd } from "../../Admin/components/SidebarAd/SidebarAd";
import { Layout } from "antd";
import Footer from "../../app/components/Footer/Footer";
function PrivateLayout() {
  // const { Footer, Sider, Content } = Layout;

  // Login
  const navigate = useNavigate();

  //   useEffect(() => {
  //       const loggedInUser = sessionStorage.getItem("token");
  //       if (!loggedInUser) {
  //           navigate("/login");
  //       }
  //   }, []);

  return (
    <>
      {/* <HeaderAd /> */}
      <div className=" grid grid-cols-5 h-full bg-gray-100 ">
        <div className="col-span-1 h-full">
          <SidebarAd />
        </div>

        <div className="col-span-4 h-full mt-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PrivateLayout;
