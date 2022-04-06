import * as types from "../types";

export const fetchUser = (results) => async (dispatch) => {
  dispatch({
    type: types.GET_USERS,
    payload: {
      results,
    },
  });
};

export const userLogin = (results) => async (dispatch) => {
  dispatch({
    type: types.ACOUNT_LOGIN,
    payload: {
      results,
    },
  });
};

export const createUser = (results) => async (dispatch) => {
  dispatch({
    type: types.ADD_USERS,
    payload: {
      results,
    },
  });
};

export const LogOut = (results) => async (dispatch) => {
  dispatch({
    type: types.LOGOUT,
    payload: {
      results,
    },
  });
};
