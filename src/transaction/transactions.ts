import { fromPredicate, Option } from 'fp-ts/lib/Option';
import { Moment } from 'moment';
import * as R from 'ramda';

import { Transaction } from '../shared/store';

const hasAnyTransaction: (
  transactions: Transaction[]
) => Option<Transaction[]> = fromPredicate(
  R.compose(
    R.not,
    R.isEmpty
  )
);

const filterByType = (type: Transaction['type']) => (
  ts: Transaction[]
): Transaction[] => ts.filter(t => t.type === type);

export const onlyDebit = filterByType('debit');

export const onlyCredit = filterByType('credit');

export const transactionsTill = (
  date: Moment,
  transactions: Transaction[]
): Transaction[] => transactions.filter(t => t.date.isSameOrBefore(date));

const emptyTransactions: Transaction[] = [];

export const aggregateTransactionsValue = (
  transactions = emptyTransactions,
  initialValue = 0
): number =>
  transactions.reduce((acc, t: Transaction) => acc + t.value, initialValue);

const sumIsMoreThanZero: (transactions: Transaction[]) => boolean = R.compose(
  (v: number) => Math.abs(v) > 0,
  aggregateTransactionsValue
);

export const hasDebitTransactions = (transactions: Transaction[]): boolean =>
  hasAnyTransaction(transactions)
    .map(onlyDebit)
    .map(sumIsMoreThanZero)
    .getOrElse(false);
