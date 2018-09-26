import { Action, ActionCreator } from 'redux';
import * as uuid from 'uuid/v4';

import { ActionKeys } from '../../shared/action';
import { TrackingPeriod } from '../../shared/store';

export interface SaveTrackingPeriodAction extends Action {
  type: ActionKeys.SAVE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

export interface CreateTrackingPeriodAction extends Action {
  type: ActionKeys.CREATE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

export const createTrackingPeriod: ActionCreator<
  CreateTrackingPeriodAction
> = () => ({
  payload: {
    endDate: new Date(),
    id: uuid(),
    initialBudget: 0,
    plannedSavings: 0,
    startDate: new Date()
  },
  type: ActionKeys.CREATE_TRACKING_PERIOD
});
