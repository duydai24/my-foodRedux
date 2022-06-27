import {
  ADD_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  ADD_SALE,
  DELETE_SALE,
  UPDATE_QUANTITY_PRODUCTS,
} from "../types";

export const addProducts = (new_products) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCTS,
    payload: new_products,
  });
};
export const deleteProducts = (key, products) => async (dispatch) => {
  dispatch({
    type: DELETE_PRODUCTS,
    payload: { key, products },
  });
};
export const updateProducts = (id, new_products) => async (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCTS,
    payload: {
      id,
      new_products,
    },
  });
};
export const updateQuantityNumberProducts =
  (id, quantityNumber) => async (dispatch) => {
    dispatch({
      type: UPDATE_QUANTITY_PRODUCTS,
      payload: { id, quantityNumber },
    });
  };
export const addSale = (key, new_Sale) => async (dispatch) => {
  dispatch({
    type: ADD_SALE,
    payload: {
      key,
      new_Sale,
    },
  });
};
export const deleteSale = (key, new_Sale) => async (dispatch) => {
  dispatch({
    type: DELETE_SALE,
    payload: {
      key,
      new_Sale,
    },
  });
};
