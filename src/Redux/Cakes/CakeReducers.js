import { BUY_CAKES } from "./CakesTypes"

const initialState= {
      numOfCakes : 10
}

const cakeReducer = (state = initialState, action) =>{
      switch (action.type) {
            case BUY_CAKES:return {
                  ...state,
                  numOfCakes : state.numOfCakes - 1
            }
            default:return state
      }
}

export default cakeReducer;