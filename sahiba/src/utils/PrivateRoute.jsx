/** @format */

import DashBoard from "../Admin/pages/Dashboard/Dashboard";
import CategoriesEdit from "../Admin/pages/Ecommerce/CategoriesEdit/CategoriesEdit";
import CategoriesManage from "../Admin/pages/Ecommerce/CategoriesManage/CategoriesManage";
import ProductAdd from "../Admin/pages/Ecommerce/ProductAdd/ProductAdd";
import ProductEdit from "../Admin/pages/Ecommerce/ProductEdit/ProductEdit";
import ProductManage from "../Admin/pages/Ecommerce/ProductManage/ProductManage";
import ProductView from "../Admin/pages/Ecommerce/ProductView/ProductView";
import Profile from "../Admin/pages/Profile/Profile";
import UserAdd from "../Admin/pages/User/UserAdd/UserAdd";
import UserEdit from "../Admin/pages/User/UserEdit/UserEdit";
import UserList from "../Admin/pages/User/UserList/UserList";
import UserView from "../Admin/pages/User/UserView/UserView";

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

  {
    path: "/userview",
    exact: true,
    component: <UserView />,
    main: () => <UserView />,
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
  {
    path: "/productmanage/viewproduct",
    exact: true,
    component: <ProductView />,
    main: () => <ProductView />,
  },

  // Categories
  {
    path: "/categoriesmanage",
    exact: true,
    component: <CategoriesManage />,
    main: () => <CategoriesManage />,
  },
  {
    path: "/categoriesmanage/categoriesedit",
    exact: true,
    component: <CategoriesEdit />,
    main: () => <CategoriesEdit />,
  },

  // Profile
  {
    path: "/profile",
    exact: true,
    component: <Profile />,
    main: () => <Profile />,
  },
];

export default routes;
