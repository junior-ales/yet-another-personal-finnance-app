import { AppState } from '../../shared/store';
import { selectedTrackingPeriod } from '../../tracking-period/tracking-period-view/selector';

export const selectedTrackingPeriodId = (state: AppState): string => {
  const trackingPeriod = selectedTrackingPeriod(state);

  if (trackingPeriod) {
    return trackingPeriod.id;
  }

  throw Error('No Tracking Period selected');
};
