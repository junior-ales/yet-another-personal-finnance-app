import { AppState, Transaction } from '../../shared/store';

export const selectedTransaction = (state: AppState): Transaction | null => {
  const selectedId: string = state.transactions.selected || '__INVALID_KEY';
  return state.transactions.byId[selectedId] || null;
};
