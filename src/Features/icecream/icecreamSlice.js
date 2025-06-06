// const { cakeActions } = require('../cake/cakeSlice');

// const createSlice = require('@reduxjs/toolkit').createSlice;
//import { cakeActions } from '../cake/cakeSlice';
 import { createSlice } from '@reduxjs/toolkit';
 import { ordered as cakeOrdered } from '../cake/cakeSlice';
const initialState = {
      numOfIcecreams: 20
}

const icecreamSlice = createSlice({
      name: 'icecream',
      initialState,
      reducers: {
            ordered: (state) => {
                  state.numOfIcecreams--;
            },
            restocked: (state, action) => {
                  state.numOfIcecreams += action.payload;
            }
      },
      // extraReducers: {
      //       ['cake/ordered']: (state) => {
      //             state.numOfIceCreams--;
      //       }
      // }                                          // 1st approach to handle actions from other slices
      extraReducers: (builder) => {              // 2nd approach to handle actions from other slices
            builder.addCase(cakeOrdered, (state) => {
                  state.numOfIcecreams--;
            })
      }
})

console.log('icecreamSlice', icecreamSlice.actions);
export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;