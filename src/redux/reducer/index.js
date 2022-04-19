// import { combineReducers } from "redux";
import { combineReducers, autoMergeLevel2 } from "redux";
import { persistReducer } from "redux-persist";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { productsReducer } from "./productsReducer";
import { userReducer } from "./userReducer";
import storage from "redux-persist/lib/storage";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { orderReducer } from "./orderReduce";
import { testReducer } from "./testRedu";
const reduxStore = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productsReducer,
  categorys: categoryReducer,
  orders: orderReducer,
  db: testReducer
});

const persistConfig = {
  key: "root",
  storage: storage,
  // storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, reduxStore);
export default pReducer;
