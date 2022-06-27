import { GET_STATISTICA } from "../types";

export const initialState = {
  statisticaItem: [],
  totalQuantity: 0,
  totalPrice: 0,
};
export const statisticaReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATISTICA:
      let totalQuantity = 0;
      let totalPrice = 0;
      const newDataStatisticaItem = [...state.statisticaItem];
      newDataStatisticaItem.push(...action.payload);
      newDataStatisticaItem.forEach((e) => {
        totalPrice += e.quantity * e.price;
        totalQuantity += e.quantity;
      });
      return {
        ...state,
        statisticaItem: newDataStatisticaItem,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
      };
    default:
      return state;
  }
};
