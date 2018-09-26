import { CreateTrackingPeriodAction } from '../../tracking-period/tracking-period-list/action';
import { SaveTrackingPeriodAction } from '../../tracking-period/tracking-period-new/action';

export enum ActionKeys {
  CREATE_TRACKING_PERIOD = 'CREATE_TRACKING_PERIOD',
  SAVE_TRACKING_PERIOD = 'SAVE_TRACKING_PERIOD'
}

export type ActionsType = CreateTrackingPeriodAction | SaveTrackingPeriodAction;
