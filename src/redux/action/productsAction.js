import * as types from "../types";

export const addProducts = (products) => async (dispatch) => {
  dispatch({
    type: types.ADD_PRODUCTS,
    payload: {
      products,
    },
  });
};
export const deleteProducts = (products) => async (dispatch) => {
  dispatch({
    type: types.DELETE_PRODUCTS,
    payload: {
      products,
    },
  });
};
export const updateProducts = (products) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_PRODUCTS,
    payload: {
      products,
    },
  });
};
export const quantityNumberProducts =
  (product, quantityNumber) => async (dispatch) => {
    dispatch({
      type: types.QUANTITY_PRODUCTS,
      payload: {
        product,
        quantityNumber,
      },
    });
  };
export const updateQuantity = (products, quantity) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_QUANTITY,
    payload: {
      products,
      quantity,
    },
  });
};
export const addSale = (sale) => async (dispatch) => {
  dispatch({
    type: types.ADD_SALE,
    payload: {
      sale,
    },
  });
};
export const deleteSale = (sale) => async (dispatch) => {
  dispatch({
    type: types.DELETE_SALE,
    payload: {
      sale,
    },
  });
};
