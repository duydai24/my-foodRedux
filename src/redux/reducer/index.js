import { combineReducers, autoMergeLevel2 } from "redux";
import { persistReducer } from "redux-persist";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { productsReducer } from "./productsReducer";
import { userReducer } from "./userReducer";
import storage from "redux-persist/lib/storage";
const reduxStore = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  category: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, reduxStore);
export default pReducer;
