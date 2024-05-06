import { Button, Card } from "antd";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shoeshopcontext";

const ShoeShopItem = ({ shoe }) => {
  const { handleClickShoe, handleAddCart } = useContext(ShopContext);
  return (
    <Card hoverable cover={<img alt="example" src={shoe?.image} />}>
      <h1>{shoe?.name}</h1>
      <p>{shoe?.description}</p>
      <Button type="primary" onClick={() => handleClickShoe(shoe)}>
        View detail
      </Button>
      <Button
        type="primary"
        onClick={() => handleAddCart(shoe)}
        style={{ marginLeft: 16 }}
      >
        Add cart
      </Button>
    </Card>
  );
};

export default ShoeShopItem;
