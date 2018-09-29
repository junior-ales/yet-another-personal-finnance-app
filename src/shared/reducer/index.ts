import { combineReducers, Reducer } from 'redux';

import { selectedReducer } from '../../tracking-period/tracking-period-list/reducer';
import {
  trackingPeriodsAllId,
  trackingPeriodsById
} from '../../tracking-period/tracking-period-new/reducer';
import { ActionsType } from '../action';
import { AppState } from '../store';

const trackingPeriodsReducer = combineReducers<AppState['trackingPeriods']>({
  allId: trackingPeriodsAllId,
  byId: trackingPeriodsById,
  selected: selectedReducer
});

export const rootReducer: Reducer<AppState, ActionsType> = combineReducers({
  trackingPeriods: trackingPeriodsReducer
});
