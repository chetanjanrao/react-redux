const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
      numOfCakesInShelf : 10
}

const BUY_CAKES = "BUY_CAKES";
function buyCakes(){
      return {
            type : BUY_CAKES,
            info : "React Redux first action"
      }
}

const reducer = (state = initialState, action) =>{
//      console.log("state",state)
      switch(action.type){
            case "BUY_CAKES": return {
                  ...state,
                  numOfCakesInShelf : state.numOfCakesInShelf - 1
            }
             default : return state;
      }
     
}

const store = createStore(reducer);
console.log("initail State : ",store.getState())
const unsubscribe = store.subscribe(()=>{console.log("updated State : ", store.getState())})
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyCakes())
unsubscribe();