import db from '../../db/db'

function Users(state = db, action) {
  switch (action.type) {
    case "ADD_USER":
      state = [action.payload, ...state];
      return state;
    case "UPDATE_USER":
      let { id, userName, passWord, role } = action.payload;
      let newUsers = { userName, passWord, role };
      state.splice(id, 1, newUsers);
      return state;
    case "REMOVE_USER":
      state.splice(action.payload.id, 1);
      return state;

    default:
      return state;
  }
}

function Login(state = null, action) {
  switch (action.type) {
    case "GET_USER":
      state = action.payload;
      return state;
    case "LOGOUT":
      state = null;
      return state;
    default:
      return state;
  }
}

export { Users, Login };