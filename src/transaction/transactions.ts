import { fromPredicate, Option } from 'fp-ts/lib/Option';
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

export const onlyDebit = (ts: Transaction[]): Transaction[] =>
  ts.filter(t => t.type === 'debit');

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
