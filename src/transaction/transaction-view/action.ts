import { History } from 'history';
import { Action, Dispatch } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { Transaction } from '../../shared/store';

export interface DeleteTransactionAction extends Action {
  type: ActionKeys.DELETE_TRANSACTION;
  payload: Transaction;
}

export const deleteTransaction = (
  transaction: Transaction,
  history: History
) => async (dispatch: Dispatch<ActionsType>) => {
  Promise.resolve()
    .then(() =>
      dispatch({
        payload: transaction,
        type: ActionKeys.DELETE_TRANSACTION
      })
    )
    .then(() =>
      history.push(`/tracking-period/${transaction.trackingPeriodId}`)
    );
};
