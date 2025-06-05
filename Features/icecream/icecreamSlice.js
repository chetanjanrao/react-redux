const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
      numOfIceCreams: 20
}

const icecreamSlice = createSlice({
      name: 'icecream',
      initialState,
      reducers: {
            ordered: (state) => {
                  state.numOfIceCreams--;
            }, 
            restocked: (state, action) => {
                  state.numOfIceCreams += action.payload;
            }
      }
})

console.log('icecreamSlice', icecreamSlice.actions);
module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;