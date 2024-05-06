import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const ShopContext = createContext();

const ShoeContext = ({ children }) => {
  const [shoeListData] = useState(data);
  const [shoeDetail, setDetail] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    /** Từ Json về kiểu bình thường(array, object) */
    const data = JSON.parse(localStorage.getItem("cart"));
    if (!data) return;
    setCart(data);
  }, []);

  const handleClickShoe = (shoe) => {
    setDetail(shoe);
  };

  const handleChangeQuantity = (shoe, amount) => {
    const cloneCart = [...cart];
    const index = cloneCart.findIndex((item) => item.id === shoe.id);
    // Khong tim thay => -1, tim thay se la 0 tro len

    if (index !== -1) {
      cloneCart[index].quantity += amount;
    }

    localStorage.setItem("cart", JSON.stringify(cloneCart));
    setCart(cloneCart);
  };

  const handleAddCart = (shoe) => {
    const cloneCart = [...cart];
    const index = cloneCart.findIndex((item) => item.id === shoe.id);
    // Khong tim thay => -1, tim thay se la 0 tro len

    if (index === -1) {
      const data = { ...shoe, quantity: 1 };
      cloneCart.push(data);
    } else {
      cloneCart[index].quantity += 1;
    }
    /* Từ kiểu bình thường(array, object) thành String JSON */
    localStorage.setItem("cart", JSON.stringify(cloneCart));
    setCart(cloneCart);
  };

  console.log(cart);

  return (
    <ShopContext.Provider
      value={{
        shoeListData,
        shoeDetail,
        handleClickShoe,
        cart,
        handleAddCart,
        handleChangeQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShoeContext;
