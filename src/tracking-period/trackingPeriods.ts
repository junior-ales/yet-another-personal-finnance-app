import { fromPredicate, Option } from 'fp-ts/lib/Option';
import * as moment from 'moment';

import { TrackingPeriod } from '../shared/store';

const currentDateIsWithingPeriod = fromPredicate(
  (t: TrackingPeriod): boolean => moment().isBetween(t.startDate, t.endDate)
);

const daysTillEndDate = (trackingPeriod: TrackingPeriod): number =>
  trackingPeriod.endDate.diff(moment(), 'days');

export const remainindDaysTillEndDate = (
  trackingPeriod: TrackingPeriod
): Option<number> =>
  currentDateIsWithingPeriod(trackingPeriod).map(daysTillEndDate);
