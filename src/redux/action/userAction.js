import {
  GET_USERS,
  ACOUNT_LOGIN,
  ADD_USERS,
  DELETE_USERS,
  UPDATE_USERS,
  LOGOUT,
  ADD_USERS_GOOGLE,
} from "../types";

export const getUser = (results) => async (dispatch) => {
  dispatch({
    type: GET_USERS,
    payload: results,
  });
};

export const userLogin = (results) => async (dispatch) => {
  dispatch({
    type: ACOUNT_LOGIN,
    payload: results,
  });
};

export const addUser = (results) => async (dispatch) => {
  dispatch({
    type: ADD_USERS,
    payload: results,
  });
};

export const deleteUser = (key) => async (dispatch) => {
  dispatch({
    type: DELETE_USERS,
    payload: key,
  });
};

export const updateUser = (id, new_User) => async (dispatch) => {
  dispatch({
    type: UPDATE_USERS,
    payload: { id, new_User },
  });
};

export const LogOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const googleUserLogin = (email) => async (dispatch) => {
  dispatch({
    type: ADD_USERS_GOOGLE,
    payload: email,
  });
};
