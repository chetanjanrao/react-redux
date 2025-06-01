import { createStore } from "redux";
import cakeReducer from "./CakeReducers";
const store = createStore(cakeReducer);
console.log(store)

export default store;