import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { productsReducer } from "./productsReducer";
import { userReducer } from "./userReducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  category: categoryReducer,
});
