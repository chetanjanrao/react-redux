const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleWare = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;

const axios = require("axios");

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

function fetchUsersRequest() {
  return { type: FETCH_USERS_REQUEST };
}
function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}
function fetchUsersFailure(error) {
  return { type: FETCH_USERS_FAILURE, payload: error };
}

function reducer(state = initialState, action) {
      
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

function fetchUsers() {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
}

const store = createStore(reducer,applyMiddleware(thunkMiddleWare));
 store.subscribe(() =>
  console.log("Updated State:", store.getState())
);
store.dispatch(fetchUsers());

