/** @format */

import { Homepage } from "../Pages";
import ContactPage from "../app/pages/contact-page/ContactPage";
import ProductCarpetPage from "../app/pages/product-carpet-page/ProductCarpetPage";
import ProductFurniturePage from "../app/pages/product-furniture-page/ProductFurniturePage";

const routes = [
  {
    path: "/contact",
    exact: true,
    component: <ContactPage />,
    main: () => <ContactPage />,
  },
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
