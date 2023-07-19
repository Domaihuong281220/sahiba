/** @format */

import { Routes, Route } from "react-router-dom";
import routes from "../utils/router";
import Header from "../app/user/components/Header/Header";
import Footer from "../app/user/components/Footer/Footer";

const DefaultLayout = () => {
  //Routes
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main()}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };

  return (
    <>
      <Header />
      <Routes>{showContentMenu(routes)}</Routes>
      <Footer />
    </>
  );
};

export default DefaultLayout;
