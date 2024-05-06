import React from "react";
import ShoeShopList from "./shoeshoplist";
import ShoeShopDetail from "./shoeshopdetail";
import ShoeContext from "../../context/shoeshopcontext";
import Header from "./header";
// rafce

const ShoeShopContext = () => {
  return (
    <ShoeContext>
      <Header />
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        <ShoeShopList />
        <ShoeShopDetail />
      </div>
    </ShoeContext>
  );
};

export default ShoeShopContext;
