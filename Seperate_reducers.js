const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger")

const logger  = reduxLogger.createLogger();
// store 
 
const initialCakesState = {
     numOfCakesInShelf : 10,
     
}

const initialIcecreamsState = {
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
function  cakeReducer(state = initialCakesState, action){
      switch(action.type){
        case BUY_CAKES : {
            return{
                  ...state,
                  numOfCakesInShelf : state.numOfCakesInShelf - 1
            }
        }
        default: return state;
      }
}
function icecreamsReducer(state= initialIcecreamsState,action){
      switch(action.type){
            case BUY_ICECREAMS:return{
                  ...state,
                  numOfIcecreamsInFreezer : state.numOfIcecreamsInFreezer -1     
            }
            default: return state;
      }
}

const rootReducer = combineReducers({
      cake : cakeReducer,
      icecream : icecreamsReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
unsubscribe(); // to stop the subscription
