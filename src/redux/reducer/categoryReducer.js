import { GET_CATEGORYS } from "../types";

export const initialState = {
  category: [
    {
      id: 0,
      name: "All",
      icon: "MdFastfood",
    },
    {
      id: 1,
      name: "Hamburger",
      icon: "MdFastfood",
    },
    {
      id: 2,
      name: "Drink",
      icon: "MdFastfood",
    },
    {
      id: 3,
      name: "Sandwich",
      icon: "MdFastfood",
    },
    {
      id: 4,
      name: "Piza",
      icon: "MdFastfood",
    },
  ],
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORYS:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
