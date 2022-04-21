import * as types from "../types";

export const initialState = {
  user: [
    {
      id: 0,
      image: "/userDai.jpg",
      userName: "dai",
      passWord: "123456",
      role: "admin",
    },
    {
      id: 1,
      userName: "dai123",
      passWord: "123456",
      role: "user",
    },
  ],

  accountLogin: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        user: action.payload.results,
      };
    case types.ACOUNT_LOGIN:
      return {
        ...state,
        accountLogin: action.payload.results,
      };
    case types.EDIT_LOGIN:
      return {
        ...state,
        accountLogin: action.payload.results,
      };
    case types.LOGOUT:
      state = null;
      return {
        ...state,
        accountLogin: action.payload.results,
      };
    case types.DELETE_USERS:
      return {
        ...state,
        user: action.payload.user,
      };
    case types.UPDATE_USERS:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
