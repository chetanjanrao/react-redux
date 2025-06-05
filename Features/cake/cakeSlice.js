const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
      numOfCakes: 10
}
const cakeSlice = createSlice({
      name: 'cake',
      initialState,
      reducers: {
            ordered: (state) => {
                  state.numOfCakes--;
            }, 
            restocked: (state,action) => {
                  state.numOfCakes = state.numOfCakes + action.payload;
            }
      }
}
)

console.log('cakeSlice', cakeSlice.actions);
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;