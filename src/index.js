import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "antd/dist/reset.css";
import configStore from "./redux/configStore";
import { Provider } from "react-redux";
import Products from "./views/Products";

const store = configStore();
const App = () => (
  <Provider store={store}>
    <Products />
    {/* <Router>
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
    </Router> */}
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
