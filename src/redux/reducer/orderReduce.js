import * as types from "../types";

export const initialState = {
  order: []
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ORDER:
      return {
        ...state,
        order: action.payload.order,
      };
      case types.HANDLE_ORDER:
      return {
        ...state,
        order: action.payload.order,
      };


    // case "HANDLE_ORDER":
    //   let { id, dataOrder } = action.payload;
    //   state.splice(id, 1, dataOrder);
    //   return state;

    default:
      return state;
  }
};
