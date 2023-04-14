import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import Products from "../views/Products";
import Root from "./root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
export default router;
