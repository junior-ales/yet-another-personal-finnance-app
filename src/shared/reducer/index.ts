import { combineReducers, Reducer } from 'redux';

import { selectedReducer } from '../../tracking-period/tracking-period-list/reducer';
import { ActionKeys, ActionsType } from '../action';
import { AppState } from '../store';

type ByIdState = AppState['trackingPeriods']['byId'];
const trackingPeriodsById: Reducer<ByIdState, ActionsType> = (
  state = {},
  action
) => {
  if (action.type === ActionKeys.SAVE_TRACKING_PERIOD) {
    return { ...state, [action.payload.id]: action.payload };
  }

  return state;
};

type AllIdState = AppState['trackingPeriods']['allId'];
const trackingPeriodsAllId: Reducer<AllIdState, ActionsType> = (
  state = [],
  action
) => {
  if (action.type === ActionKeys.SAVE_TRACKING_PERIOD) {
    return [...state, action.payload.id];
  }

  return state;
};

type EditTrackingPeriod = AppState['editing']['trackingPeriod'];
const editTrackPeriodReducer: Reducer<EditTrackingPeriod, ActionsType> = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionKeys.CREATE_TRACKING_PERIOD:
      return action.payload;

    case ActionKeys.SAVE_TRACKING_PERIOD:
      return null;

    default:
      return state;
  }
};

const trackingPeriodsReducer = combineReducers<AppState['trackingPeriods']>({
  allId: trackingPeriodsAllId,
  byId: trackingPeriodsById,
  selected: selectedReducer
});

const editingReducer = combineReducers<AppState['editing']>({
  trackingPeriod: editTrackPeriodReducer
});

export const rootReducer: Reducer<AppState, ActionsType> = combineReducers({
  editing: editingReducer,
  trackingPeriods: trackingPeriodsReducer
});
