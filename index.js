const store = require('./App/store');
// console.log('Initial state', store.getState());

const cakeActions = require('../RTK/Features/cake/cakeSlice').cakeActions;
const icecreamActions = require('../RTK/Features/icecream/icecreamSlice').icecreamActions;
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
})
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());

store.dispatch(cakeActions.restocked(3));
store.dispatch(cakeActions.restocked(3));
unsubscribe();