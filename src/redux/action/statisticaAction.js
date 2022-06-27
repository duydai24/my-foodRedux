import { GET_STATISTICA } from "../types";

export const setNewStatistic = (cartIem) => async (dispatch) => {
  dispatch({
    type: GET_STATISTICA,
    payload: cartIem,
  });
};
