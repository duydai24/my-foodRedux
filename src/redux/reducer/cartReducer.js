import * as types from "../types";

export const initialState = {
  cartItem: [],
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
      return {
        ...state,
        ccartItem: action.payload.cartItem,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    case "DELETE_CART":
      return {
        ...state,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    case "DELETE_ALL_CART":
      state = null;
      return state;
    default:
      return state;
  }
};
