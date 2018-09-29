import { History } from 'history';
import { Action, Dispatch } from 'redux';

import { ActionKeys } from '../../shared/action';

export interface SelectTrackingPeriodAction extends Action {
  type: ActionKeys.SELECT_TRACKING_PERIOD;
  payload: string;
}

export const selectTrackingPeriod = (
  trackingPeriodId: string,
  history: History
) => async (dispatch: Dispatch<SelectTrackingPeriodAction>) => {
  Promise.resolve()
    .then(() =>
      dispatch({
        payload: trackingPeriodId,
        type: ActionKeys.SELECT_TRACKING_PERIOD
      })
    )
    .then(() => history.push(`/tracking-period/${trackingPeriodId}`));
};
