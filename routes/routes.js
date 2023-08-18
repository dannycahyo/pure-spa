import HomePage from "../components/HomePage";
import ProductPage from "../components/ProductPage";

import { getProductData } from "../fetcher/getProductData";

const routes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/product",
    element: ProductPage,
    loader: getProductData,
  },
];

export { routes };
