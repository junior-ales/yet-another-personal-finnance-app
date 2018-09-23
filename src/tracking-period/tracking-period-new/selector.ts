import * as R from 'ramda';

import { AppState, TrackingPeriod } from '../../shared/store';

export const newTrackingPeriod = (
  state: AppState
): TrackingPeriod | undefined =>
  state.trackingPeriods.byId[
    R.last(state.trackingPeriods.allId) || '__INVALID_KEY'
  ];
