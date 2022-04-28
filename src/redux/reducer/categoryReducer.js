import * as types from "../types";

export const initialState = {
  category: [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Hamburger",
    },
    {
      id: 2,
      name: "Drink",
    },
    {
      id: 3,
      name: "Sandwich",
    },
    {
      id: 4,
      name: "Piza",
    },
  ],
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORYS:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
