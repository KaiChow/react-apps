import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'antd/dist/reset.css';
import ComponentOne from "./views/ComponentOne";
import ComponentTwo from "./views/ComponentTwo";
import configStore from "./redux/configStore";
import { Provider } from "react-redux";

const store = configStore();
const routerDom = () => (
  <Provider store={store}>
    <Router>
      <div className="primary-layout">
        <header>
          <Link to="/">组件一</Link>
          <br />
          <Link to="/two">组件二</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<ComponentOne />} />
            <Route path="/two" element={<ComponentTwo />} />
          </Routes>
        </main>
      </div>
    </Router>
  </Provider>
);
ReactDom.render(routerDom(), document.getElementById("root"));
