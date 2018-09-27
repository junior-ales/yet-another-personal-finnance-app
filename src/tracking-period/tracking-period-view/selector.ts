import { AppState, TrackingPeriod } from '../../shared/store';

export const selectedTrackingPeriod = (
  state: AppState
): TrackingPeriod | null => {
  const selectedId: string = state.trackingPeriods.selected || '__INVALID_KEY';
  return state.trackingPeriods.byId[selectedId] || null;
};
