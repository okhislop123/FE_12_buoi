import React, { useContext } from "react";
import ShoeShopItem from "./shoeshopitem";
import { Col, Row } from "antd";
import { ShopContext } from "../../context/shoeshopcontext";

const ShoeShopList = ({ onClickItem }) => {
  const { shoeListData } = useContext(ShopContext);

  return (
    <div>
      <Row gutter={16}>
        {shoeListData?.map((item) => {
          return (
            <Col key={item.id} className="gutter-row" span={6}>
              <ShoeShopItem shoe={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ShoeShopList;
