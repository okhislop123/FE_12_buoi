import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../../store/reducers/count";

const CountPage = () => {
  const count = useSelector((store) => store.countReducer.count);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 justify-center mt-[50vh]">
      <Button
        onClick={() => dispatch(changeCount(-1))}
        type="primary"
        className="bg-red-500 hover:!bg-red-600"
      >
        -
      </Button>
      <h4>{count}</h4>
      <Button
        onClick={() => dispatch(changeCount(1))}
        type="primary"
        className="bg-red-500 hover:!bg-red-600"
      >
        +
      </Button>
    </div>
  );
};

export default CountPage;
