import React, { createContext, useState } from "react";
import data from "../data/movie.json";

export const MovieCT = createContext();

const MovieContext = ({ children }) => {
  const [chairList, setChairList] = useState(data);
  const [selectedChairs, setSelectedChairs] = useState([]);
  // Tạo 1 cái state để chứa danh sách ghê đã chọn (tương tự card)
  // 1 cái hàm để click chọn ghế (tương tự thêm giỏ hàng)
  // lấy danh sách ghế đã chọn map vào component Order Detail
  // Tính tổng

  const handleChair = (chair) => {
    const cloneChairs = [...selectedChairs];
    const index = cloneChairs.findIndex((item) => item.soGhe === chair.soGhe);
    if (index === -1) {
      cloneChairs.push(chair);
      handleChangeColor(chair, true);
    } else {
      cloneChairs.splice(index, 1);
      handleChangeColor(chair, false);
    }
    setSelectedChairs(cloneChairs);
  };

  const handleChangeColor = (chair, isSelected) => {
    const rowName = chair.soGhe.substring(0, 1);
    const cloneChairList = [...chairList];
    const rowIndex = cloneChairList.findIndex((item) => item.hang === rowName);

    const chairIndex = cloneChairList[rowIndex].danhSachGhe.findIndex(
      (item) => item.soGhe === chair.soGhe
    );
    cloneChairList[rowIndex].danhSachGhe[chairIndex].daChon = isSelected;

    setChairList(cloneChairList);
  };

  const handlePayment = () => {
    const cloneSelectedChair = [...selectedChairs];
    const cloneChairList = [...chairList];

    cloneSelectedChair.forEach((chair) => {
      const rowName = chair.soGhe.substring(0, 1);
      const rowIndex = cloneChairList.findIndex(
        (item) => item.hang === rowName
      );
      const chairIndex = cloneChairList[rowIndex].danhSachGhe.findIndex(
        (item) => item.soGhe === chair.soGhe
      );
      cloneChairList[rowIndex].danhSachGhe[chairIndex].daDat = true;
    });

    setChairList(cloneChairList);
    setSelectedChairs([]);
  };

  return (
    <MovieCT.Provider
      value={{
        chairList,
        selectedChairs,
        handleChair,
        handlePayment,
      }}
    >
      {children}
    </MovieCT.Provider>
  );
};

export default MovieContext;
