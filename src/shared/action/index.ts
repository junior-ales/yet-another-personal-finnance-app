import { SelectTrackingPeriodAction } from '../../tracking-period/tracking-period-list/action';
import { SaveTrackingPeriodAction } from '../../tracking-period/tracking-period-new/action';

export enum ActionKeys {
  SELECT_TRACKING_PERIOD = 'SELECT_TRACKING_PERIOD',
  SAVE_TRACKING_PERIOD = 'SAVE_TRACKING_PERIOD'
}

export type ActionsType = SaveTrackingPeriodAction | SelectTrackingPeriodAction;
