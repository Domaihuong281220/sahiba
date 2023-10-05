/** @format */

import { Homepage } from "../Pages";
import ContactPage from "../app/pages/contactPage/ContactPage";
import ManagementPage from "../app/pages/managementPage/ManagementPage";
import MediaPage from "../app/pages/mediaPage/MediaPage";
import OurStoryPage from "../app/pages/ourStoryPage/OurStoryPage";
import ProductCarpetPage from "../app/pages/productCarpetPage/ProductCarpetPage";
import ProductFurniturePage from "../app/pages/productFurniturePage/ProductFurniturePage";
import Sarees from "../app/pages/Sarees/Sarees";
import ProductDetailPage from "../app/pages/productDetailPage/ProductDetailPage";
import { CartPage } from "../app/pages/CartPage/CartPage";
import CheckoutPage from "../app/pages/CheckoutPage/CheckoutPage";

const routes = [
  {
    path: "/productdetail",
    exact: true,
    component: <ProductDetailPage />,
    main: () => <ProductDetailPage />,
  },

  {
    path: "/cart",
    exact: true,
    component: <CartPage />,
    main: () => <CartPage />,
  },
  {
    path: "/checkout",
    exact: true,
    component: <CheckoutPage />,
    main: () => <CheckoutPage />,
  },

  {
    path: "/contact",
    exact: true,
    component: <ContactPage />,
    main: () => <ContactPage />,
  },
  {
    path: "/media",
    exact: true,
    component: <MediaPage />,
    main: () => <MediaPage />,
  },
  {
    path: "/management",
    exact: true,
    component: <ManagementPage />,
    main: () => <ManagementPage />,
  },
  {
    path: "/ourstory",
    exact: true,
    component: <OurStoryPage />,
    main: () => <OurStoryPage />,
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
  {
    path: "/sarees",
    exact: true,
    component: <Sarees />,
    main: () => <Sarees />,
  },
];

export default routes;
