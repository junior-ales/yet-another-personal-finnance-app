import { History } from 'history';
import { Action, Dispatch } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { TrackingPeriod } from '../../shared/store';

export interface SaveTrackingPeriodAction extends Action {
  type: ActionKeys.SAVE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

export const saveTrackingPeriod = (
  trackingPeriod: TrackingPeriod,
  history: History
) => async (dispatch: Dispatch<ActionsType>) => {
  // TODO replace next line with POST to save TP
  Promise.resolve()
    .then(() =>
      dispatch({
        payload: trackingPeriod,
        type: ActionKeys.SAVE_TRACKING_PERIOD
      })
    )
    .then(() =>
      history.push(`/tracking-period/${trackingPeriod.id}/transaction`)
    );
};
