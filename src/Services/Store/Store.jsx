const { createStore } = require("redux");
const { counterReducer } = require("../Reducer/CounterReducer");

const store = createStore(counterReducer);

export default store;
