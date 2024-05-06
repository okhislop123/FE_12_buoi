import React, { useState } from "react";
import ShoeShopList from "./shoeshoplist";
import ShoeShopDetail from "./shoeshopdetail";
import data from "../../data/data.json";
// rafce

const ShoeShop = () => {
  const [shoeListData] = useState(data);
  const [shoeDetail, setDetail] = useState();

  const onClickItem = (shoe) => {
    console.log("shoe", shoe);
    setDetail(shoe);
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      <ShoeShopList shoeListData={shoeListData} onClickItem={onClickItem} />
      <ShoeShopDetail product={shoeDetail} />
    </div>
  );
};

export default ShoeShop;
