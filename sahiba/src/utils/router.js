/** @format */

import { Homepage } from "../Pages";
import ProductCarpetPage from "../app/pages/product-carpet-page/ProductCarpetPage";
import ProductFurniturePage from "../app/pages/product-furniture-page/ProductFurniturePage";

const routes = [
  {
    path: "/carpetshop",
    exact: true,
    component: <ProductCarpetPage />,
    main: () => <ProductCarpetPage />,
  },
  {
    path: "/furniture",
    exact: true,
    component: <ProductFurniturePage />,
    main: () => <ProductFurniturePage />,
  },
  {
    path: "/",
    exact: true,
    component: <Homepage />,
    main: () => <Homepage />,
  },
];

export default routes;
