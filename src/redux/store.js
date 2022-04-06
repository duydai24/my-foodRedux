import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import pReducer from "./reducer/index";
import { persistStore } from "redux-persist";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  pReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
persistStore(store);

export default store;
