import { createStore, applyMiddleware,combineReducers } from "redux";
import signinReducer from './reducers/signinReducer';
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [reduxThunk];


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
