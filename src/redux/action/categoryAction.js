import * as types from "../types";

export const getCategory = (category) => async (dispatch) => {
  dispatch({
    type: types.GET_CATEGORYS,
    payload: {
      category,
    },
  });
};
