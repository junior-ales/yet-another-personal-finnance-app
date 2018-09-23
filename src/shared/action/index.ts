import {
  CreateTrackingPeriodAction,
  OtherAction
} from '../../tracking-period/tracking-period-new/action';

export enum ActionKeys {
  CREATE_TRACKING_PERIOD = 'CREATE_TRACKING_PERIOD',
  OTHER_ACTION = '__other_action_type__'
}

export type ActionsType = CreateTrackingPeriodAction | OtherAction;
