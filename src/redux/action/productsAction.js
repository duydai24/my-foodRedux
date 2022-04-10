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
