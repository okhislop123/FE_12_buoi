import React, { useContext, useMemo, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Modal } from "antd";
import { ShopContext } from "../../context/shoeshopcontext";
import { formatNumber } from "../../utils";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, handleChangeQuantity } = useContext(ShopContext);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const total = useMemo(() => {
    const data = cart?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    /**
     * 0
     * 0 + 465 => 465
     * 465 + 375 => 840
     */

    return data ?? 0;
  }, [cart]);

  return (
    <div
      style={{
        height: 80,
        marginRight: "auto",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        background: "#ccc",
        padding: "0 30px",
        marginBottom: 20,
      }}
    >
      <Badge count={cart.length}>
        <ShoppingCartOutlined onClick={showModal} style={{ fontSize: 30 }} />
      </Badge>

      <Modal
        title={<h1>Cart Detail</h1>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
      >
        {cart.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "20%" }}>
                <img src={item.image} alt="" style={{ width: 50 }} />
              </div>

              <div style={{ width: "20%" }}>{item.name}</div>

              <div style={{ width: "20%" }}>{formatNumber(item.price)}</div>

              <div style={{ width: "20%", textAlign: "center" }}>
                <Button onClick={() => handleChangeQuantity(item, -1)}>
                  -
                </Button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <Button onClick={() => handleChangeQuantity(item, 1)}>+</Button>
              </div>

              <div style={{ width: "20%", textAlign: "center" }}>
                <Button type="primary" danger>
                  Delete
                </Button>
              </div>
            </div>
          );
        })}

        <div>Tổng tiền: {formatNumber(total)}</div>
      </Modal>
    </div>
  );
};

export default Header;
