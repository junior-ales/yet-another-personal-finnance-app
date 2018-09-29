import { AppState, TrackingPeriod, Transaction } from '../../shared/store';

const INVALID_KEY = '__INVALID_KEY';

export const selectedTrackingPeriod = (
  state: AppState
): TrackingPeriod | null => {
  const selectedId: string = state.trackingPeriods.selected || INVALID_KEY;
  return state.trackingPeriods.byId[selectedId] || null;
};

export const selectedTrackingPeriodTransactions = (
  state: AppState
): Transaction[] => {
  const selectedId = state.trackingPeriods.selected || INVALID_KEY;
  const transactionIds = state.transactions.byTrackingPeriod[selectedId] || [];

  return transactionIds.map(id => state.transactions.byId[id]);
};
