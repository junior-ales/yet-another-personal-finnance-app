import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type SelectedTrackingPeriod = AppState['trackingPeriods']['selected'];
export const selectedReducer: Reducer<SelectedTrackingPeriod, ActionsType> = (
  state = null,
  action
) => {
  if (action.type === ActionKeys.SELECT_TRACKING_PERIOD) {
    return action.payload;
  }
  return state;
};
