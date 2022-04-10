import * as types from "../types";

export const fetchcart =
  (productId, totalQuantity, totalPrice, userId) => async (dispatch) => {
    dispatch({
      type: types.GET_CARTS,
      payload: {
        userId,
        productId,
        totalQuantity,
        totalPrice,
      },
    });
  };

export const addCart =
  (cartItem, totalQuantity, totalPrice) => async (dispatch) => {
    dispatch({
      type: types.ADD_CART,
      payload: {
        cartItem, totalQuantity, totalPrice
      },
    });
  };

export const updateCart =
  (cartItem, totalQuantity, totalPrice) => async (dispatch) => {
    dispatch({
      type: types.UPDATE_CART,
      payload: {
        cartItem, totalQuantity, totalPrice
      },
    });
  };
export const deleteCart =
  (cartItem, totalQuantity, totalPrice) => async (dispatch) => {
    dispatch({
      type: types.DELETE_CART,
      payload: {
        cartItem, totalQuantity, totalPrice
      },
    });
  };

export const deteteAllCart =
  () => async (dispatch) => {
    dispatch({
      type: types.DELETE_ALL_CART,
    });
  };
