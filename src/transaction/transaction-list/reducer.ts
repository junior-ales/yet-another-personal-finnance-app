import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type SelectedTransaction = AppState['transactions']['selected'];
export const selectedTransactionReducer: Reducer<
  SelectedTransaction,
  ActionsType
> = (state = null, action) => {
  switch (action.type) {
    case ActionKeys.SELECT_TRANSACTION:
      return action.payload;

    case ActionKeys.DELETE_TRANSACTION:
      return null;

    default:
      return state;
  }
};
