import * as types from "../types";

export const initialState = {
    user: [
        {
            id: 0,
            userName: "dai",
            passWord: "123456",
            role: "admin",
          },
          {
            id: 1,
            userName: "dai1",
            passWord: "123456",
            role: "user",
          },
  ],
  loading: false,
  error: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
