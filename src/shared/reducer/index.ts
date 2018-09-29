import { combineReducers, Reducer } from 'redux';

import { selectedReducer } from '../../tracking-period/tracking-period-list/reducer';
import {
  trackingPeriodsAllId,
  trackingPeriodsById
} from '../../tracking-period/tracking-period-new/reducer';
import { selectedTransactionReducer } from '../../transaction/transaction-list/reducer';
import {
  transactionsAllId,
  transactionsById,
  transactionsByTrackingPeriod
} from '../../transaction/transaction-new/reducer';
import { ActionsType } from '../action';
import { AppState } from '../store';

const trackingPeriodsReducer = combineReducers<AppState['trackingPeriods']>({
  allId: trackingPeriodsAllId,
  byId: trackingPeriodsById,
  selected: selectedReducer
});

const transactionsReducer = combineReducers<AppState['transactions']>({
  allId: transactionsAllId,
  byId: transactionsById,
  byTrackingPeriod: transactionsByTrackingPeriod,
  selected: selectedTransactionReducer
});

export const rootReducer: Reducer<AppState, ActionsType> = combineReducers({
  trackingPeriods: trackingPeriodsReducer,
  transactions: transactionsReducer
});
