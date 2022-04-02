import {gateAPI} from 'core/gateAPI';
import ToastRoot from 'lib/ToastRoot';
import {_layLoad} from 'modules/layout/actions';
import {_tokenClear} from 'modules/notification/actions';
import Router from 'next/router';
import {batch} from 'react-redux';
import {ROUTES} from 'routers/routes';

import {
  _authClear,
  _authSet,
  _loginClear,
  processLogin,
} from './actions';

export const _authFull = (data) => (dispatch) => {
  const {...authData} = data;
  batch(() => {
    dispatch(_authSet(authData));
    dispatch(_loginClear());
  });
};
export const reloadAuth = (id) => async (dispatch) => {
  dispatch(_layLoad(true));
  const newData = await gateAPI('auth/ownerget', {id});
  if (newData) {
    dispatch(_authFull(newData));
  }
  dispatch(_layLoad(false));
};

export const processLogout = (id) => async (dispatch) => {
  await gateAPI('auth/logout', {id});
  batch(() => {
    dispatch(_authClear({}));
    dispatch(_tokenClear());
  });
  global.firebase
    .auth()
    .signOut()
    .then(() => Router.push(ROUTES.LANDING));
};

export const _authLogout = () => dispatch => {
  dispatch(_authClear());
  dispatch(_tokenClear());
};
export const loginWithGoogle = () => async dispatch => {
  dispatch(processLogin(true));
  try {
    await global.firebase
      .auth()
      .signInWithPopup(global.firebase.googleAuthProvider);
  } catch (e) {
    ToastRoot.showError(e);
  }
  dispatch(processLogin(false));
};

export const loginWithFacebook = () => async dispatch => {
  dispatch(processLogin(true));
  global.firebase
    .auth()
    .signInWithPopup(global.firebase.facebookAuthProvider)
    .catch((error) => {
      if (error.code === 'auth/account-exists-with-different-credential') {
        global.firebase
          .auth()
          .fetchSignInMethodsForEmail(error.email)
          .then((providers) => {
            if (
              providers.findIndex((x) => x === 'google.com') > -1 ||
              (providers.findIndex((x) => x === 'password') > -1 &&
                error.email.indexOf('@gmail.com') > -1)
            ) {
              let provider = global.firebase.googleAuthProvider();
              provider.setCustomParameters({
                login_hint: error.email,
              });
              global.firebase
                .auth()
                .signInWithPopup(provider)
                .then((authUser) => {
                  authUser.user.linkAndRetrieveDataWithCredential(
                    error.credential
                  );
                })
                .catch(ToastRoot.showError);
            }
          });
      } else {
        ToastRoot.showError(error);
      }
    });
};
export const updateProfile = (id, displayName, photoURL) => async dispatch => {
  dispatch(_layLoad(true));
  const serverData = await gateAPI('auth/updateProfile', {id, displayName, photoURL});
  if (serverData) {
    dispatch(reloadAuth(id));
  }
  else dispatch(_layLoad(false));
};