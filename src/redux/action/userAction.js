const createUser = (userName, passWord, role) => ({
  type: "ADD_USER",
  payload: {
    userName,
    passWord,
    role,
  },
});

const updateUser = (id, userName, passWord, role) => ({
  type: "UPDATE_USER",
  payload: {
    id,
    userName,
    passWord,
    role,
  },
});

const removeUser = (id) => ({
  type: "REMOVE_USER",
  payload: {
    id,
  },
});

const getUser = (userName) => ({
  type: "GET_USER",
  payload: {
    userName,
  },
});
const logOut = () => ({
  type: "LOGOUT",
});

export { createUser, updateUser, removeUser, getUser, logOut };
