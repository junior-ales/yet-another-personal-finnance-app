import * as R from 'ramda';

import { AppState, TrackingPeriod } from '../../shared/store';

export const editingTrackingPeriod = (state: AppState): TrackingPeriod | null =>
  R.pathOr<null, TrackingPeriod>(null, ['editing', 'trackingPeriod'], state);
