import { combineReducers, Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../action';
import { AppState } from '../store';

type ByIdState = AppState['trackingPeriods']['byId'];
type AllIdState = AppState['trackingPeriods']['allId'];
type EditTrackPeriod = AppState['editing']['trackingPeriod'];

const trackingPeriodsById: Reducer<ByIdState> = (
  state = {},
  action: ActionsType
) => {
  if (action.type === ActionKeys.SAVE_TRACKING_PERIOD) {
    return { ...state, [action.payload.id]: action.payload };
  }

  return state;
};

const trackingPeriodsAllId: Reducer<AllIdState> = (
  state = [],
  action: ActionsType
) => {
  if (action.type === ActionKeys.SAVE_TRACKING_PERIOD) {
    return [...state, action.payload.id];
  }

  return state;
};

const editTrackPeriodReducer: Reducer<EditTrackPeriod> = (
  state = null,
  action: ActionsType
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

const trackingPeriodsReducer = combineReducers({
  allId: trackingPeriodsAllId,
  byId: trackingPeriodsById
});

const editingReducer = combineReducers({
  trackingPeriod: editTrackPeriodReducer
});

export const rootReducer: Reducer<AppState, ActionsType> = combineReducers({
  editing: editingReducer,
  trackingPeriods: trackingPeriodsReducer
});
