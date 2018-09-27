import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type ByIdState = AppState['trackingPeriods']['byId'];
export const trackingPeriodsById: Reducer<ByIdState, ActionsType> = (
  state = {},
  action
) => {
  if (action.type === ActionKeys.SAVE_TRACKING_PERIOD) {
    return { ...state, [action.payload.id]: action.payload };
  }

  return state;
};

type AllIdState = AppState['trackingPeriods']['allId'];
export const trackingPeriodsAllId: Reducer<AllIdState, ActionsType> = (
  state = [],
  action
) => {
  if (action.type === ActionKeys.SAVE_TRACKING_PERIOD) {
    return [...state, action.payload.id];
  }

  return state;
};
