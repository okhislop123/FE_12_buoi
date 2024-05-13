import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Menu, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();

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

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    message.success("Logout success!");
  };

  return (
    <div className="flex items-center justify-between">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div className="px-4 mt-3">
        <Button onClick={onLogout}>Logout</Button>
      </div>
    </div>
  );
};
export default Header;
