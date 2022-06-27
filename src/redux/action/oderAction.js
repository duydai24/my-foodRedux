import { ADD_ORDER, HANDLE_ORDER } from "../types";

export const addOrder = (newOrder) => async (dispatch) => {
  dispatch({
    type: ADD_ORDER,
    payload: newOrder,
  });
};

export const handelOrder = (order) => async (dispatch) => {
  dispatch({
    type: HANDLE_ORDER,
    payload: order,
  });
};
