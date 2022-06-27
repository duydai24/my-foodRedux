import { ADD_CART, UPDATE_CART, DELETE_ALL_CART, DELETE_CART } from "../types";

export const addCart = (new_cartItem) => async (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload: new_cartItem,
  });
};

export const updateCart = (id, quantityNumber) => async (dispatch) => {
  dispatch({
    type: UPDATE_CART,
    payload: { id, quantityNumber },
  });
};

export const deleteCart = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CART,
    payload: id,
  });
};

export const deteteAllCart = () => async (dispatch) => {
  dispatch({
    type: DELETE_ALL_CART,
  });
};
