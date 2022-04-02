import {createSelector} from 'reselect';

import {authDirectSelector} from './selectors';

export function authenSelector() {
  return createSelector(
    [authDirectSelector],
    ({isAdmin, isSa, isContent}) => {
      return {
        isAdmin, isSa, isContent
      };
    }
  );
}
