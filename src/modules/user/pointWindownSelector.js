import {createSelector} from 'reselect';

import {pointSelector} from './selectors';

export function pointWindownSelector() {
  return createSelector(
    [pointSelector],
    ({point}) => {
      return {
        point
      };
    }
  );
}
