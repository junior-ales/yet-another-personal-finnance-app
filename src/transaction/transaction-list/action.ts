import { History } from 'history';
import { Action, Dispatch } from 'redux';

import { ActionKeys } from '../../shared/action';

export interface SelectTransactionAction extends Action {
  type: ActionKeys.SELECT_TRANSACTION;
  payload: string;
}

export const selectTransaction = (
  transactionId: string,
  history: History
) => async (dispatch: Dispatch<SelectTransactionAction>) => {
  Promise.resolve()
    .then(() =>
      dispatch({
        payload: transactionId,
        type: ActionKeys.SELECT_TRANSACTION
      })
    )
    .then(() =>
      history.push(history.location.pathname + '/transaction/' + transactionId)
    );
};
