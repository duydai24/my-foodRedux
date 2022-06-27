import { DELETE_BANNER, UPDATE_BANNER, ADD_BANNER } from "../types";

export const deleteBannerSlide = (key, banerSlide) => async (dispatch) => {
  dispatch({
    type: DELETE_BANNER,
    payload: { key, banerSlide },
  });
};

export const updateBannerSlide = (index, new_banner) => async (dispatch) => {
  dispatch({
    type: UPDATE_BANNER,
    payload: { index, new_banner },
  });
};

export const addBannerSlide = (new_banner) => async (dispatch) => {
  dispatch({
    type: ADD_BANNER,
    payload: new_banner,
  });
};
