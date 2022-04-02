import * as types from "../types";

export const initialState = {
  cart: [
    {
      id: 0,
      userId: 1,
      productId: 1,
      totalPrice: 300,
      totalQuantity: 2,
    },
  ],
  loading: false,
  error: null,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARTS:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
