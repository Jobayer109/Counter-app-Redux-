import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../Services/Actions/Actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementCounter());
  };
  const decrementHandler = () => {
    dispatch(decrementCounter());
  };
  const resetHandler = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
