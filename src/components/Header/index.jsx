import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const items = [
    {
      label: <Link to="/home">Home</Link>,
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/movie">Movie</Link>,
      key: "app",
      icon: <AppstoreOutlined />,
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
