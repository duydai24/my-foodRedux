import { ADD_ORDER, HANDLE_ORDER } from "../types";

export const initialState = {
  order: [],
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    case HANDLE_ORDER:
      const newDataOrder = [...state.order];
      return {
        ...state,
        order: newDataOrder,
      };
    default:
      return state;
  }
};
