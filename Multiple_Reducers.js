const redux = require("redux");
const createStore = redux.createStore;


// store 
 
const initialState = {
     numOfCakesInShelf : 10,
     numOfIcecreamsInFreezer : 20
}

const BUY_CAKES = "BUY_CAKES";
const BUY_ICECREAMS = "BUY_ICECREAMS";
function buyCakes(){
      return{
            type: BUY_CAKES,
            info : "React Redux first Reducer"
      }
}
function buyIcecreams(){
      return{
            type : BUY_ICECREAMS,
            info : "React Redux first Reducer"
      }
}
function  reducer(state = initialState, action){
      switch(action.type){
        case BUY_CAKES : {
            return{
                  ...state,
                  numOfCakesInShelf : state.numOfCakesInShelf - 1
            }
        }
        case BUY_ICECREAMS : {
            return{
                  ...state,
                  numOfIcecreamsInFreezer : state.numOfIcecreamsInFreezer -1
            }
        }
        default: return state;
      }
}

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>{console.log("updated state",store.getState())})
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
unsubscribe(); // to stop the subscription
