import * as types from "../types";

export const getStatistica =
  (statisticaItem, totalQuantity, totalPrice) => async (dispatch) => {
    dispatch({
      type: types.GET_STATISTICA,
      payload: {
        statisticaItem,
        totalQuantity,
        totalPrice,
      },
    });
  };
