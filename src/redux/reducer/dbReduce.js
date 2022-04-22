import * as types from "../types";
export const initialState = {
  banerSlide: [
    { image: "/bgHome.jpg" },
    { image: "/bg2Home.jpg" },
    { image: "/bg3Home.jpg" },
  ],
  textSlide: [
    {
      lable: "ENJOY YOUR MEAL",
      text1: "Good food is wise",
      text2: "medicine",
    },
  ],
  priceBestFood: [],
};

export const dbReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DB:
      return {
        ...state,
        db: action.payload,
      };
    case types.DELETE_BANNER:
      return {
        ...state,
        db: action.payload.banerSlide,
      };
    case types.ADD_BANNER:
      return {
        ...state,
        db: action.payload.banerSlide,
      };
    case types.UPDATE_BANNER:
      return {
        ...state,
        db: action.payload.banerSlide,
      };
    default:
      return state;
  }
};
