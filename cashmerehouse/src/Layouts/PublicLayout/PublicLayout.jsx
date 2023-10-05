/** @format */

import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../app/components/Footer/Footer";
import Header from "../../app/components/Header/Header";

function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicLayout;
