import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import configStore from "./redux/configStore";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers/index";

const store = configStore();
const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
