//const configureStore = require('@reduxjs/toolkit').configureStore;
import { configureStore } from '@reduxjs/toolkit';
//import cakeReducer from '../Features/cake/cakeSlice';
//const cakeReducer = require('../Features/cake/cakeSlice');
//const reduxLogger = require('redux-logger');
//const logger = reduxLogger.createLogger();
//const icecreamReducer = require('../Features/icecream/icecreamSlice');
//const userReducer = require('../Features/user/userSlice');
import icecreamReducer from '../Features/icecream/icecreamSlice';
import userReducer from '../Features/user/userSlice';
import cakeReducer from '../Features/cake/cakeSlice';
const store = configureStore({
      reducer: {
            cake: cakeReducer,
            icecream: icecreamReducer,
            user: userReducer
      },
  //    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;