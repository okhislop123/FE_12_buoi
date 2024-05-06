import React from "react";
import ShoeShopItem from "./shoeshopitem";
import { Col, Row } from "antd";

const ShoeShopList = ({ shoeListData, onClickItem }) => {
  return (
    <div>
      <Row gutter={16}>
        {shoeListData.map((item) => {
          return (
            <Col key={item.id} className="gutter-row" span={6}>
              <ShoeShopItem shoe={item} onClickItem={onClickItem} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ShoeShopList;
