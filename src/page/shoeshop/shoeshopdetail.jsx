import React from "react";

const ShoeShopDetail = ({ product }) => {
  return (
    <div>
      <img src={product?.image} alt="" />
      <h1>{product?.name}</h1>
      <b>{product?.price}</b>
      <p>{product?.description}</p>
    </div>
  );
};

export default ShoeShopDetail;
