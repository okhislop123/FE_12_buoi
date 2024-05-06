import React, { useCallback, useMemo, useState } from "react";

const Memorize = () => {
  const [pointList, setPointList] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onAddPoint = useCallback(() => {
    // const clonePointList = [...pointList];
    // clonePointList.push(value);
    // setPointList(clonePointList);
    setPointList((prev) => [...prev, value]);
    setValue("");
  }, [value]);

  const total = useMemo(() => {
    // let sum = 0;
    // for (let i = 0; i < pointList.length; i++) {
    //   sum += Number(pointList[i]);
    // }
    console.log("Total");
    const sum = pointList.reduce((accumulator, currentValue) => {
      return Number(accumulator) + Number(currentValue);
    }, 0);

    return sum;
  }, [pointList]);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onAddPoint}>Add</button>
      <h1>List: {pointList.toString()}</h1>
      <p>Total: {total}</p>
    </div>
  );
};

export default Memorize;
