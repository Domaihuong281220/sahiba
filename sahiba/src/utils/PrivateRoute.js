/** @format */

import DashBoard from "../Admin/pages/Dashboard/Dashboard";
import ProductAdd from "../Admin/pages/Ecommerce/ProductAdd/ProductAdd";
import ProductEdit from "../Admin/pages/Ecommerce/ProductEdit/ProductEdit";
import ProductManage from "../Admin/pages/Ecommerce/ProductManage/ProductManage";
import UserAdd from "../Admin/pages/User/UserAdd/UserAdd";
import UserEdit from "../Admin/pages/User/UserEdit/UserEdit";
import UserList from "../Admin/pages/User/UserList/UserList";

const routes = [
  // manage user
  {
    path: "/dashboard",
    exact: true,
    component: <DashBoard />,
    main: () => <DashBoard />,
  },
  {
    path: "/userlist",
    exact: true,
    component: <UserList />,
    main: () => <UserList />,
  },
  {
    path: "/useredit",
    exact: true,
    component: <UserEdit />,
    main: () => <UserEdit />,
  },
  {
    path: "/useradd",
    exact: true,
    component: <UserAdd />,
    main: () => <UserAdd />,
  },

  // manage product
  {
    path: "/productmanage",
    exact: true,
    component: <ProductManage />,
    main: () => <ProductManage />,
  },
  {
    path: "/productmanage/createproduct",
    exact: true,
    component: <ProductAdd />,
    main: () => <ProductAdd />,
  },
  {
    path: "/productmanage/editproduct",
    exact: true,
    component: <ProductEdit />,
    main: () => <ProductEdit />,
  },
];

export default routes;
