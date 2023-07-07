/** @format */

import ProductCarpetPage from "../app/pages/product-carpet-page/ProductCarpetPage";

const routes = [
  {
    path: "/product-carpet",
    exact: true,
    component: <ProductCarpetPage />,
    main: () => <ProductCarpetPage />,
  },
];

export default routes;
