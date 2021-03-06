import { SelectTrackingPeriodAction } from '../../tracking-period/tracking-period-list/action';
import { SaveTrackingPeriodAction } from '../../tracking-period/tracking-period-new/action';
import { SelectTransactionAction } from '../../transaction/transaction-list/action';
import { SaveTransactionAction } from '../../transaction/transaction-new/action';
import { DeleteTransactionAction } from '../../transaction/transaction-view/action';

export enum ActionKeys {
  SELECT_TRANSACTION = 'SELECT_TRANSACTION',
  SAVE_TRANSACTION = 'SAVE_TRANSACTION',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  SELECT_TRACKING_PERIOD = 'SELECT_TRACKING_PERIOD',
  SAVE_TRACKING_PERIOD = 'SAVE_TRACKING_PERIOD'
}

export type ActionsType =
  | SaveTrackingPeriodAction
  | SaveTransactionAction
  | DeleteTransactionAction
  | SelectTrackingPeriodAction
  | SelectTransactionAction;
