import React, { useContext } from "react";
import { MovieCT } from "../../context/moviecontext";
import Chair from "./Chair";

const ChairList = () => {
  const { chairList } = useContext(MovieCT);
  return (
    <div>
      {chairList.map((item) => {
        return (
          <div key={item.hang} style={{ display: "flex" }}>
            <span
              style={{
                display: "inline-block",
                width: 60,
                textAlign: "center",
                lineHeight: "36px",
              }}
            >
              {item.hang}
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              {item.danhSachGhe.map((chair) => {
                return <Chair chair={chair} key={chair.soGhe} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChairList;
