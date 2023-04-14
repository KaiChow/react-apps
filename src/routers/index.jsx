import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import Products from "../views/Products";
import Root from "./root";
import Dashboard from "../views/Dashboard";
import Comments from "../views/Comments";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);
export default router;
