import { Button, Card } from "antd";
import React from "react";

const ShoeShopItem = ({ shoe, onClickItem }) => {
  return (
    <Card hoverable cover={<img alt="example" src={shoe?.image} />}>
      <h1>{shoe?.name}</h1>
      <p>{shoe?.description}</p>
      <Button type="primary" onClick={() => onClickItem(shoe)}>
        View detail
      </Button>
    </Card>
  );
};

export default ShoeShopItem;
