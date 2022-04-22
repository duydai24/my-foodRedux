import * as types from "../types";

export const deleteBannerSlide = (banerSlide) => async (dispatch) => {
  dispatch({
    type: types.DELETE_BANNER,
    payload: {
      banerSlide,
    },
  });
};

export const updateBannerSlide = (banerSlide) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_BANNER,
    payload: {
      banerSlide,
    },
  });
};

export const addBannerSlide = (banerSlide) => async (dispatch) => {
  dispatch({
    type: types.ADD_BANNER,
    payload: {
      banerSlide,
    },
  });
};
