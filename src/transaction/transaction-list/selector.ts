import { AppState, Transaction } from '../../shared/store';

export const allTransactions = (state: AppState): Transaction[] =>
  state.transactions.allId.map(id => state.transactions.byId[id]);

export const transactionsByTrackingPeriodId = (
  trackingPeriodId: string,
  state: AppState
): Transaction[] =>
  (state.transactions.byTrackingPeriod[trackingPeriodId] || []).map(
    id => state.transactions.byId[id]
  );
