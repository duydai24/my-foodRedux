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
export const editLogin = (results) => async (dispatch) => {
  dispatch({
    type: types.EDIT_LOGIN,
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
export const deleteUser = (user) => async (dispatch) => {
  dispatch({
    type: types.DELETE_USERS,
    payload: {
      user,
    },
  });
};
export const updateUser = (user) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_USERS,
    payload: {
      user,
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
export const googleUserLogin = (googleUser) => async (dispatch) => {
  dispatch({
    type: types.ADD_USERS_GOOGLE,
    payload: {
      googleUser,
    },
  });
};
export const faceBookUser = (faceBookUser) => async (dispatch) => {
  dispatch({
    type: types.ADD_USERS_FACEBOOK,
    payload: {
      faceBookUser,
    },
  });
};
