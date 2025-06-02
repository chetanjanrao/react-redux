//import { buyCake } from "../Cake/CakeActions";
import { BUY_ICECREAM } from "./IcecreamTypes";
const initialStateIcecream = {
      numOfIcecreams : 20
}
const icecreamReducer = (state1 = initialStateIcecream, action) =>{
      console.log(state1.numOfIcecreams)
      switch(action.type){
            case BUY_ICECREAM:return{
               ...state1,
               numOfIcecreams : state1.numOfIcecreams - 1
            }
            default:return state1;
      }
}

export default icecreamReducer;