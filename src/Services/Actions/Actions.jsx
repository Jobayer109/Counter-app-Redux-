import { DECREMENT, INCREMENT, RESET } from "../Constants/Constants";

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

export { incrementCounter, decrementCounter, resetCounter };
