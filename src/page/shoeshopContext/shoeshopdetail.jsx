import React, { useContext } from "react";
import { ShopContext } from "../../context/shoeshopcontext";

const ShoeShopDetail = () => {
  const { shoeDetail } = useContext(ShopContext);

  if (!shoeDetail) {
    return <></>;
  }

  return (
    <div>
      <img src={shoeDetail?.image} alt="" />
      <h1>{shoeDetail?.name}</h1>
      <b>{shoeDetail?.price}</b>
      <p>{shoeDetail?.description}</p>
    </div>
  );
};

export default ShoeShopDetail;
