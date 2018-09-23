import { AppState, TrackingPeriod } from '../../shared/store';

export const allTrackingPeriods = (state: AppState): TrackingPeriod[] =>
  state.trackingPeriods.allId.map(id => state.trackingPeriods.byId[id]);
