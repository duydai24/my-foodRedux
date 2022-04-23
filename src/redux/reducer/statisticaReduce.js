import * as types from "../types";

export const initialState = {
  statisticaItem: [],
};
export const statisticaReduce = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STATISTICA":
      return {
        ...state,
        statisticaItem: action.payload.statisticaItem,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    default:
      return state;
  }
};
