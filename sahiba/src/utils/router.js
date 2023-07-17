/** @format */

import { Homepage } from "../Pages";
import ContactPage from "../app/pages/contact-page/ContactPage";
import ManagementPage from "../app/pages/management-page/ManagementPage";
import MediaPage from "../app/pages/media-page/MediaPage";
import OurStoryPage from "../app/pages/ourStory-page/OurStoryPage";
import ProductCarpetPage from "../app/pages/product-carpet-page/ProductCarpetPage";
import ProductFurniturePage from "../app/pages/product-furniture-page/ProductFurniturePage";
import  Sarees  from "../Pages/Sarees/Sarees";

const routes = [
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
