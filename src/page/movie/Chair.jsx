import { Button } from "antd";
import React, { useContext } from "react";
import { MovieCT } from "../../context/moviecontext";

const Chair = ({ chair }) => {
  const { handleChair } = useContext(MovieCT);

  if (chair.gia === 0) {
    return (
      <div
        style={{
          minWidth: 80,
          textAlign: "center",
          lineHeight: "36px",
        }}
        key={chair.soGhe}
      >
        {chair.soGhe}
      </div>
    );
  }
  return (
    <Button
      onClick={() => handleChair(chair)}
      disabled={chair.daDat}
      style={{
        minWidth: 80,
        textAlign: "center",
        background: !chair.daDat && chair.daChon ? "green" : "#fff",
      }}
      key={chair.soGhe}
    >
      {chair.soGhe}
    </Button>
  );
};

export default Chair;
