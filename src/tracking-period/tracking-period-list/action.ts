import { History } from 'history';
import { Action, Dispatch } from 'redux';
import * as uuid from 'uuid/v4';

import { ActionKeys, ActionsType } from '../../shared/action';
import { TrackingPeriod } from '../../shared/store';

export interface CreateTrackingPeriodAction extends Action {
  type: ActionKeys.CREATE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

export const createTrackingPeriod = (history: History) => async (
  dispatch: Dispatch<ActionsType>
) => {
  Promise.resolve()
    .then(() =>
      dispatch({
        payload: {
          endDate: new Date(),
          id: uuid(),
          initialBudget: 0,
          plannedSavings: 0,
          startDate: new Date()
        },
        type: ActionKeys.CREATE_TRACKING_PERIOD
      })
    )
    .then(() => history.push('/tracking-periods/new'));
};
