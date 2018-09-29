import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type SelectedTrackingPeriod = AppState['trackingPeriods']['selected'];
export const selectedReducer: Reducer<SelectedTrackingPeriod, ActionsType> = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionKeys.SAVE_TRACKING_PERIOD:
      return action.payload.id;

    case ActionKeys.SELECT_TRACKING_PERIOD:
      return action.payload;

    default:
      return state;
  }
};
