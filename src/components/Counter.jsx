import React from "react";

const Counter = () => {
  const incrementHandler = () => {};
  return (
    <div>
      <h3>Count: 0</h3>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};

export default Counter;
