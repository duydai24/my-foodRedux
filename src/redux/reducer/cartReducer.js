import * as types from "../types";

export const initialState = {
  cartItem: [],
  totalPrice: 0,
  totalQuantity: null,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cartItem: action.payload.cartItem,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    case "UPDATE_CART":
      state = action.cart;
      return state;
    case "DELETE_CART":
      return {
        ...state,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    // let { cartItem, totalQuantity, totalPrice } = state;
    // totalQuantity -= cartItem[action.payload.id].quantity;
    // totalPrice -=
    // cartItem[action.payload.id].price *
    // cartItem[action.payload.id].quantity;
    // cartItem.splice(action.payload.id, 1);
    // let newCart = { cartItem, totalQuantity, totalPrice };
    // state = newCart;
    // return state;
    case "DELETE_ALL_CART":
      state = null;
      return state;
    default:
      return state;
  }
};
