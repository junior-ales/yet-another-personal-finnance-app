import { combineReducers, Reducer } from 'redux';

import { ActionsType } from '../../App';
import { ActionKeys } from '../action';
import { AppState } from '../store';

type ByIdState = AppState['trackingPeriods']['byId'];
type AllIdState = AppState['trackingPeriods']['allId'];

const trackingPeriodsById: Reducer<ByIdState> = (
  state = {},
  action: ActionsType
) => {
  if (action.type === ActionKeys.CREATE_TRACKING_PERIOD) {
    return { ...state, [action.payload.id]: action.payload };
  }

  return state;
};

const trackingPeriodsAllId: Reducer<AllIdState> = (
  state = [],
  action: ActionsType
) => {
  if (action.type === ActionKeys.CREATE_TRACKING_PERIOD) {
    return [...state, action.payload.id];
  }

  return state;
};

const trackingPeriodsReducer = combineReducers({
  allId: trackingPeriodsAllId,
  byId: trackingPeriodsById
});

export const rootReducer: Reducer<AppState, ActionsType> = combineReducers({
  trackingPeriods: trackingPeriodsReducer
});
