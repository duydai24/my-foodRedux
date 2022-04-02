import {createSelector} from 'reselect';

import {authDirectSelector, loginSelector} from './selectors';

export const loginComponentSelector = () => createSelector(
  [authDirectSelector, loginSelector],
  ({id: userId}, {showLogin}) => {
    return {
      userId,
      showLogin
    };
  }
);
