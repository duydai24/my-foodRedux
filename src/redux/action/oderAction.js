import * as types from "../types";

export const addOrder =
  (order, cartItem) => async (dispatch) => {
    dispatch({
      type: types.ADD_ORDER,
      payload: {
        order, cartItem
      },
    });
  };

  export const handelOrder =
  (order) => async (dispatch) => {
    dispatch({
      type: types.HANDLE_ORDER,
      payload: {
        order
      },
    });
  };