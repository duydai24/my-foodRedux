import { ADD_CART, DELETE_ALL_CART, DELETE_CART, UPDATE_CART } from "../types";

export const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
        totalQuantity: (state.totalQuantity += action.payload.quantity),
        totalPrice: (state.totalPrice +=
          action.payload.quantity * action.payload.price),
      };
    case UPDATE_CART: {
      const newDataCartItem = [...state.cartItem];
      let filterCart = newDataCartItem.filter(
        (e) => e.id === action.payload.id
      );
      let key = newDataCartItem.indexOf(...filterCart);
      newDataCartItem[key].quantity =
        newDataCartItem[key].quantity + action.payload.quantityNumber;
      let totalQuantity = 0;
      let totalPrice = 0;
      newDataCartItem.forEach((e) => {
        totalPrice += e.quantity * e.price;
        totalQuantity += e.quantity;
      });
      return {
        ...state,
        cartItem: newDataCartItem,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
      };
    }
    case DELETE_CART:
      const newDataCartItem = [...state.cartItem];
      let filterCart = newDataCartItem.filter((e) => e.id === action.payload);
      let key = newDataCartItem.indexOf(...filterCart);
      newDataCartItem.splice(key, 1);
      let totalQuantity = 0;
      let totalPrice = 0;
      newDataCartItem.forEach((element) => {
        totalPrice += element.quantity * element.price;
        totalQuantity += element.quantity;
      });
      return {
        ...state,
        cartItem: newDataCartItem,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
      };
    case DELETE_ALL_CART:
      // state = null;
      return { ...state, cartItem: [], totalQuantity: 0, totalPrice: 0 };
    default:
      return state;
  }
};
