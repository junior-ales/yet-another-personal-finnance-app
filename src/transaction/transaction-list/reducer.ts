import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type SelectedTransaction = AppState['transactions']['selected'];
export const selectedTransactionReducer: Reducer<
  SelectedTransaction,
  ActionsType
> = (state = null, action) => {
  if (action.type === ActionKeys.SELECT_TRANSACTION) {
    return action.payload;
  }
  return state;
};
