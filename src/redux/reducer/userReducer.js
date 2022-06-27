import {
  GET_USERS,
  ACOUNT_LOGIN,
  LOGOUT,
  DELETE_USERS,
  UPDATE_USERS,
  ADD_USERS_GOOGLE,
} from "../types";

export const initialState = {
  user: [
    {
      id: 0,
      image: "/userDai.webp",
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
  googleUser: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      // const newDataUser = [...state.user];
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case ACOUNT_LOGIN:
      return {
        ...state,
        accountLogin: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        accountLogin: [],
      };
    case DELETE_USERS:
      const newData = [...state.user];
      newData.splice(action.payload, 1);
      return {
        ...state,
        user: newData,
      };
    case UPDATE_USERS:
      state.user.splice(action.payload.id, 1, action.payload.new_User);
      return {
        ...state,
        user: state.user,
      };

    case ADD_USERS_GOOGLE:
      const idLogin = state.user.filter((e) => e.userName == action.payload);
      const results = [
        {
          id: idLogin[0].id,
          image: idLogin[0].image,
          userName: idLogin[0].userName,
          passWord: "******",
          role: idLogin[0].role,
        },
      ];
      return {
        ...state,
        accountLogin: results,
      };
    default:
      return state;
  }
};
