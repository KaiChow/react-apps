import { Card, List, Layout } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  border: "1px solid #7dbcea ",
  backgroundColor: "#fff",
  boxSizing: "border-box",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  border: "1px solid #108ee9 ",
  backgroundColor: "#fff",
  boxSizing: "border-box",
};

const siderStyle = {
  width: "200px",
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  border: "1px solid #3ba0e9 ",
  backgroundColor: "#fff",
  marginRight: "2px",
  boxSizing: "border-box",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#fff",
  border: "1px solid #7dbcea ",
  boxSizing: "border-box",
};
// 子组件
const Items = ({ name, path, selectKey, onClick }) => {
  return (
    <div
      className={selectKey === path ? "active-link menu-item" : "menu-item"}
      onClick={onClick}
    >
      <span>{name}</span>
    </div>
  );
};
export default function Root() {
  const data = [
    {
      name: "工作台",
      path: "dashboard",
    },
    {
      name: "购物车",
      path: "products",
    },
    {
      name: "留言板",
      path: "comments",
    },
  ];
  const [selectKey, setSelectKey] = useState("");
  const navigate = useNavigate();
  const handleClick = (item) => {
    setSelectKey(item.path);
    navigate(`/${item.path}`);
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sider style={siderStyle}>
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Items
                name={item.name}
                path={item.path}
                selectKey={selectKey}
                onClick={() => handleClick(item)}
              />
            </List.Item>
          )}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Card>
            <Outlet />
          </Card>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
