import { Action, ActionCreator } from 'redux';

import { ActionKeys } from '../../shared/action';
import { TrackingPeriod } from '../../shared/store';

export interface OtherAction extends Action {
  type: ActionKeys.OTHER_ACTION;
  payload: {};
}

export interface CreateTrackingPeriodAction extends Action {
  type: ActionKeys.CREATE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

// const otherAction: ActionCreator<OtherAction> = () => ({
//   payload: {},
//   type: ActionKeys.OTHER_ACTION
// });

export const createTrackingPeriod: ActionCreator<
  CreateTrackingPeriodAction
> = () => ({
  payload: {
    endDate: new Date(),
    id: '123',
    initialBudget: 0,
    plannedSavings: 0,
    startDate: new Date()
  },
  type: ActionKeys.CREATE_TRACKING_PERIOD
});
