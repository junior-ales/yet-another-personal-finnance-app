import { History } from 'history';
import { Action, Dispatch } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { Transaction } from '../../shared/store';

export interface SaveTransactionAction extends Action {
  type: ActionKeys.SAVE_TRANSACTION;
  payload: Transaction;
}

export const saveTransaction = (
  transaction: Transaction,
  history: History
) => async (dispatch: Dispatch<ActionsType>) => {
  // TODO replace next line with POST to save TP
  Promise.resolve()
    .then(() =>
      dispatch({
        payload: transaction,
        type: ActionKeys.SAVE_TRANSACTION
      })
    )
    .then(() => history.push('/transaction'));
};
