import React, { useEffect, useState } from "react";

const Effect = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  //   useEffect(() => {});

  useEffect(() => {
    console.log("First useEffect");
  }, []);

  useEffect(() => {
    console.log("Second useEffect");
  }, [value, value2]);

  useEffect(() => {
    return () => {
      console.log("Unmounting Effect");
    };
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Effect;
