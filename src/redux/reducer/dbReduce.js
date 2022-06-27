import { GET_DB, DELETE_BANNER, UPDATE_BANNER, ADD_BANNER } from "../types";
export const initialState = {
  banerSlide: [
    { image: "/bgHome.webp" },
    { image: "/bg5Home.jpg" },
    { image: "/bg3Home.webp" },
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
    case GET_DB:
      return {
        ...state,
        db: action.payload,
      };
    case DELETE_BANNER:
      state.banerSlide.splice(action.payload.key, 1);
      return {
        ...state,
        banerSlide: state.banerSlide,
      };
    case ADD_BANNER:
      return {
        ...state,
        banerSlide: [...state.banerSlide, action.payload],
      };
    case UPDATE_BANNER:
      state.banerSlide.splice(
        action.payload.index,
        1,
        action.payload.new_banner
      );
      return {
        ...state,
        banerSlide: state.banerSlide,
      };
    default:
      return state;
  }
};
