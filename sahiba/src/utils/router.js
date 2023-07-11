/** @format */

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
    path: "/furnitureshop",
    exact: true,
    component: <ProductFurniturePage />,
    main: () => <ProductFurniturePage />,
  },
];

export default routes;
