import { createStore } from "redux";
import cakeReducer from "../Cake/CakeReducer";
import { combineReducers } from "redux";
import icecreamReducer from "../Icecream/IcecreamReducer";
const rootReducer = combineReducers({icecream : icecreamReducer,cake :cakeReducer
      })
const store = createStore(rootReducer);
console.log(store)
export default store;