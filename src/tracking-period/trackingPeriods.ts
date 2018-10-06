import { fromPredicate, Option } from 'fp-ts/lib/Option';
import * as moment from 'moment';

import { TrackingPeriod, Transaction } from '../shared/store';
import {
  aggregateTransactionsValue,
  onlyCredit,
  onlyDebit,
  transactionsTill
} from '../transaction/transactions';

const currentDateIsWithingPeriod = fromPredicate(
  (t: TrackingPeriod): boolean => moment().isBetween(t.startDate, t.endDate)
);

const daysTillEndDate = (trackingPeriod: TrackingPeriod): number =>
  trackingPeriod.endDate.diff(moment(), 'days');

export const remainindDaysTillEndDate = (
  trackingPeriod: TrackingPeriod
): Option<number> =>
  currentDateIsWithingPeriod(trackingPeriod).map(daysTillEndDate);

export const trackingPeriodNetValue = (
  trackingPeriod: TrackingPeriod,
  transactions: Transaction[]
): number => {
  const credits =
    trackingPeriod.initialBudget +
    aggregateTransactionsValue(onlyCredit(transactions));

  const debts = Math.abs(aggregateTransactionsValue(onlyDebit(transactions)));

  return credits - debts - trackingPeriod.plannedSavings;
};

export const currentValue = (
  trackingPeriod: TrackingPeriod,
  transactions: Transaction[]
): number =>
  aggregateTransactionsValue(
    transactionsTill(moment(), transactions),
    trackingPeriod.initialBudget
  );
