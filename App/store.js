const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../Features/cake/cakeSlice');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const icecreamReducer = require('../Features/icecream/icecreamSlice');

const store = configureStore({
      reducer: {
            cake: cakeReducer,
            icecream: icecreamReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;