import { History } from 'history';
import { Action, Dispatch } from 'redux';
import * as uuid from 'uuid/v4';

import { ActionKeys, ActionsType } from '../../shared/action';
import { TrackingPeriod } from '../../shared/store';

export interface SaveTrackingPeriodAction extends Action {
  type: ActionKeys.SAVE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

export interface CreateTrackingPeriodAction extends Action {
  type: ActionKeys.CREATE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

export const createTrackingPeriod = (): CreateTrackingPeriodAction => ({
  payload: {
    endDate: new Date(),
    id: uuid(),
    initialBudget: 0,
    plannedSavings: 0,
    startDate: new Date()
  },
  type: ActionKeys.CREATE_TRACKING_PERIOD
});

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
    .then(() => history.push('/'));
};
