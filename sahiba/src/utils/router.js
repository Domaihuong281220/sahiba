/** @format */

import { Homepage } from "../Pages";
import ProductCarpetPage from "../app/pages/product-carpet-page/ProductCarpetPage";

const routes = [
  {
    path: "/product-carpet",
    exact: true,
    component: <ProductCarpetPage />,
    main: () => <ProductCarpetPage />,
  },
  {
    path: "/",
    exact: true,
    component: <Homepage />,
    main: () => <Homepage />,
  }
];

export default routes;
