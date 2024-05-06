import React, { useContext } from "react";
import { MovieCT } from "../../context/moviecontext";
import { useMemo } from "react";
import { formatVND } from "../../utils/";
import { Button } from "antd";

const OrderDetail = () => {
  const { selectedChairs, handleChair, handlePayment } = useContext(MovieCT);
  const total = useMemo(() => {
    const sum = selectedChairs.reduce((accumulator, currentValue) => {
      return Number(accumulator) + Number(currentValue.gia);
    }, 0);

    return sum;
  }, [selectedChairs]);

  return (
    <div style={{ marginTop: 12 }}>
      <h2>Order detail</h2>
      {selectedChairs?.map((chair) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              width: 300,
            }}
            key={chair.soGhe}
          >
            <div
              style={{
                width: "33.3%",
                padding: 10,
                border: "1px solid #ccc",
              }}
            >
              {chair.soGhe}
            </div>
            <div
              style={{
                width: "33.3%",
                padding: 10,
                border: "1px solid #ccc",
              }}
            >
              {formatVND(chair.gia)}
            </div>
            <div
              onClick={() => handleChair(chair)}
              style={{
                width: "33.3%",
                padding: 10,
                border: "1px solid #ccc",
              }}
            >
              Cancel
            </div>
          </div>
        );
      })}

      <div style={{ marginTop: 10 }}>Total: {formatVND(total)}</div>
      <div style={{ textAlign: "right" }}>
        <Button
          onClick={handlePayment}
          type="primary"
          danger={true}
          size="large"
        >
          Payment
        </Button>
      </div>
    </div>
  );
};

export default OrderDetail;
