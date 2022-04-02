import {AUTH, AUTH_CLEAR, LOGIN_CLEAR, POINTWINDOWN, PROCESS, TOGGLE_LOGIN} from './consts';


export const _authSet = payload => ({
  type: AUTH,
  payload
});

export const _authClear = payload => ({
  type: AUTH_CLEAR,
  payload
});

export const _loginClear = () => ({type: LOGIN_CLEAR});
export const login_toggle = payload => ({type: TOGGLE_LOGIN, payload});

export const processLogin = (payload) => ({
  type: PROCESS,
  payload
});

export const getpoitWindow = payload =>({
  type:POINTWINDOWN,
  payload
})